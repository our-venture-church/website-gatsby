import React from 'react';
import styled from 'styled-components';
import { Form, FormField } from '../theme/components';
import { encode } from '../lib/helpers';
import EmailInput from './EmailInput';
import EmailLink from './EmailLink';

const StyledFormWrapper = styled.div`
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
`;

const Box = styled.div`
    ${props =>
        !props.noBox &&
        `
        border: 1px solid rgba(255, 255, 255, 0.25);
        padding: 1.5rem 1.5rem 0;
        `}
`;

class JoinGroupForm extends React.Component {
    constructor(props) {
        super(props);
        const { groupName, groupNumber, groupPageUrl: groupPage } = this.props;
        this.state = {
            groupName,
            groupNumber,
            groupPage,
            sendSuccess: false,
            sendError: false,
        };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        this.setState({ sendError: false, errorMessage: null });
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'join-a-group', ...this.state }),
        })
            .then(this.setState({ sendSuccess: true }))
            .catch(error =>
                this.setState({ sendError: true, errorMessage: error })
            );

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const {
            name,
            email,
            groupName,
            groupNumber,
            groupPage,
            sendSuccess,
            sendError,
        } = this.state;
        const { title } = this.props;
        const showMessage = sendSuccess || sendError;

        return (
            <StyledFormWrapper>
                <Box {...this.props}>
                    {title && <h3>Sign-up</h3>}

                    {showMessage ? (
                        showMessage && sendSuccess ? (
                            <p>
                                Your request was sent. We'll contact you with
                                more information.
                            </p>
                        ) : (
                            <p>
                                There was a problem sending your request. Please
                                email your request to{' '}
                                <EmailLink emailAddress="groups@ourventure.church" />
                                .
                            </p>
                        )
                    ) : (
                        <React.Fragment>
                            <p>
                                Fill out this form and we'll contact you about
                                joining this group.
                            </p>
                            <Form
                                action="/groups/join/thanks"
                                name="join-a-group"
                                onSubmit={this.handleSubmit}
                                data-netlify="true"
                            >
                                <input
                                    type="hidden"
                                    name="groupName"
                                    value={groupName}
                                />
                                <input
                                    type="hidden"
                                    name="groupNumber"
                                    value={groupNumber}
                                />
                                <input
                                    type="hidden"
                                    name="groupPage"
                                    value={groupPage}
                                />
                                <FormField>
                                    <label htmlFor="join-form-name">Name</label>
                                    <input
                                        id="join-form-name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="join-form-email">
                                        Email
                                    </label>
                                    <EmailInput
                                        id="join-form-email"
                                        name="email"
                                        value={email}
                                        changeHandler={this.handleChange}
                                        required
                                    />
                                </FormField>
                                <div data-netlify-recaptcha="true"></div>
                                <FormField>
                                    <button type="submit">Sign up</button>
                                </FormField>
                            </Form>
                        </React.Fragment>
                    )}
                </Box>
            </StyledFormWrapper>
        );
    }
}

export default JoinGroupForm;
