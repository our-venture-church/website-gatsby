import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { Form, FormField } from '../theme/components';

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

export const query = graphql`
    query ContactPageQuery {
        sanitySiteSettings {
            phoneNumber
            email
            address
        }
    }
`;

class ContactPage extends React.Component {
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
            body: encode({ 'form-name': 'contact', ...this.state }),
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
            phoneNumber,
            email: contactEmail,
            address,
        } = this.props.data.sanitySiteSettings;
        const { name, email, message, sendSuccess, sendError } = this.state;
        const showMessage = sendSuccess || sendError;
        const statusMessage =
            showMessage && sendSuccess ? (
                <p>
                    Your message was sent. We'll contact you if your message
                    necessitates a reply.
                </p>
            ) : (
                <p>
                    There was a problem sending your message. Please email us
                    directly as{' '}
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                </p>
            );
        return (
            <Layout>
                <SEO title="Contact" description="Contact us" />
                <NarrowPageWrapper
                    includeSidePadding={true}
                    includeTopPadding={true}
                >
                    <h1>Contact Us</h1>
                    {showMessage ? (
                        { statusMessage }
                    ) : (
                        <React.Fragment>
                            <p>Fill out this form to get a hold of us.</p>
                            <Form
                                action="POST"
                                name="join-a-group"
                                onSubmit={this.handleSubmit}
                                data-netlify="true"
                            >
                                <FormField>
                                    <label htmlFor="contact-form-name">
                                        Name
                                    </label>
                                    <input
                                        id="contact-form-name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="contact-form-email">
                                        Email
                                    </label>
                                    <input
                                        id="contact-form-email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="contact-form-message">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-form-message"
                                        name="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        required
                                    ></textarea>
                                </FormField>
                                <div data-netlify-recaptcha="true"></div>
                                <FormField>
                                    <button type="submit">Send Message</button>
                                </FormField>
                            </Form>
                        </React.Fragment>
                    )}

                    <h2>Contact Info:</h2>
                    <ul>
                        <li>Phone: {phoneNumber}</li>
                        <li>
                            Email: <a href={contactEmail}>{contactEmail}</a>
                        </li>
                        <li>Mailing address: {address}</li>
                    </ul>
                </NarrowPageWrapper>
            </Layout>
        );
    }
}

export default ContactPage;
