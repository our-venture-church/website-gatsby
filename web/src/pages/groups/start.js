import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Form, FormField, Fieldset, InlineRadio } from '../../theme/components';
import EmailInput from '../../components/EmailInput';
import EmailLink from '../../components/EmailLink';
import NarrowPageWrapper from '../../layouts/NarrowPageWrapper';
import { encode } from '../../lib/helpers';
import PhoneInput from '../../components/PhoneInput';

export const query = graphql`
    query StartGroupPageQuery {
        allSanityCampus(sort: { order: ASC, fields: _createdAt }) {
            nodes {
                title
            }
        }
    }
`;

class StartGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendSuccess: false,
            sendError: false,
        };
    }

    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'start-group', ...this.state }),
        })
            .then(this.setState({ sendSuccess: true }))
            .catch(error =>
                this.setState({ sendError: true, errorMessage: error })
            );

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { nodes: campuses } = this.props.data.allSanityCampus;
        const {
            name,
            email,
            phone,
            role,
            campus,
            topic,
            sendSuccess,
            sendError,
        } = this.state;
        const showMessage = sendSuccess || sendError;

        return (
            <Layout>
                <SEO
                    title="Start a group"
                    description="Tell us what kind of group you want to start or be part of."
                />
                <NarrowPageWrapper
                    includeSidePadding={true}
                    includeTopPadding={true}
                >
                    <h2>Start a group</h2>
                    {showMessage ? (
                        sendSuccess ? (
                            <p>
                                Thank you for your willingness to host and/or
                                lead a group. We'll contact you about your
                                upcoming group soon.
                            </p>
                        ) : (
                            <p>
                                There was a problem sending your message. Please
                                refresh to try again or email us directly as{' '}
                                <EmailLink emailAddress="groups@ourventure.church" />
                                .
                            </p>
                        )
                    ) : (
                        <React.Fragment>
                            <p>
                                Leading or hosting a growth group is mostly
                                about being willing. If you are willing, we are
                                here to support you, resource you and help you
                                promote your group. Our primary goal is to
                                connect people to people because we truly
                                believe that we are better together. We also
                                believe that if we connect people to people, and
                                faith is involved, the opportunity to share
                                Jesus will arise…and Jesus is in the business of
                                changing of lives.
                            </p>

                            <Form
                                action="POST"
                                name="start-group"
                                onSubmit={this.handleSubmit}
                                data-netlify="true"
                            >
                                <FormField>
                                    <label htmlFor="start-group-form-name">
                                        Name
                                    </label>
                                    <input
                                        id="start-group-form-name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="start-group-form-email">
                                        Email
                                    </label>
                                    <EmailInput
                                        id="start-group-form-email"
                                        name="email"
                                        value={email}
                                        changeHandler={this.handleChange}
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="start-group-form-phone">
                                        Phone
                                    </label>
                                    <PhoneInput
                                        id="start-group-form-phone"
                                        name="phone"
                                        value={phone}
                                        changeHandler={this.handleChange}
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="start-group-form-campus">
                                        Campus
                                    </label>
                                    <select
                                        id="start-group-form-campus"
                                        type="campus"
                                        name="campus"
                                        value={campus}
                                        onChange={this.handleChange}
                                    >
                                        <option value="Not specified">
                                            Select one
                                        </option>
                                        {campuses.map(({ title }) => (
                                            <option value={title}>
                                                {title}
                                            </option>
                                        ))}
                                    </select>
                                </FormField>
                                <Fieldset>
                                    <legend>
                                        Are you interested in leading or
                                        hosting?
                                    </legend>
                                    <InlineRadio>
                                        <input
                                            type="radio"
                                            value="lead"
                                            id="start-group-role-lead"
                                            name="role"
                                            onChange={this.handleChange}
                                            checked={role === 'lead'}
                                        />
                                        <label htmlFor="start-group-role-lead">
                                            Lead
                                        </label>
                                    </InlineRadio>
                                    <InlineRadio>
                                        <input
                                            type="radio"
                                            value="host"
                                            id="start-group-role-host"
                                            name="role"
                                            onChange={this.handleChange}
                                            checked={role === 'host'}
                                        />
                                        <label htmlFor="start-group-role-host">
                                            Host
                                        </label>
                                    </InlineRadio>
                                </Fieldset>
                                <FormField>
                                    <label htmlFor="start-group-form-topic">
                                        Suggested Topic
                                    </label>
                                    <textarea
                                        id="start-group-form-topic"
                                        name="topic"
                                        value={topic}
                                        onChange={this.handleChange}
                                        placeholder="Tell us what you're interested in."
                                        required
                                    ></textarea>
                                </FormField>
                                <div data-netlify-recaptcha="true"></div>
                                <FormField>
                                    <button type="submit">Submit</button>
                                </FormField>
                            </Form>
                        </React.Fragment>
                    )}
                </NarrowPageWrapper>
            </Layout>
        );
    }
}

StartGroup.propTypes = {};

export default StartGroup;
