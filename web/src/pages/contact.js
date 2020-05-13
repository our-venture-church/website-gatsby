import React, { useReducer } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { Form, FormField } from '../theme/components';
import { encode } from '../lib/helpers';
import EmailLink from '../components/EmailLink';
import EmailInput from '../components/EmailInput';

const initialState = {
    sendSuccess: false,
    sendError: false,
    errorMessage: '',
    name: '',
    email: '',
    message: '',
};

const contactFormReducer = (state, action) => {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        case 'success':
            return {
                ...state,
                sendSuccess: true,
            };
        case 'error':
            return {
                ...state,
                sendError: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query ContactPageQuery {
            sanitySiteSettings {
                phoneNumber
                email
                address
            }
        }
    `);

    const [state, dispatch] = useReducer(contactFormReducer, initialState);
    const {
        phoneNumber,
        email: contactEmail,
        address,
    } = data.sanitySiteSettings;
    const { name, email, message, sendSuccess, sendError } = state;

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...state }),
            });

            dispatch({ type: 'success' });
        } catch (error) {
            dispatch({ type: 'error', payload: error });
        }
    };

    const handleChange = e =>
        dispatch({
            type: 'field',
            fieldName: e.target.name,
            payload: e.target.value,
        });

    return (
        <Layout>
            <SEO title="Contact" description="Contact us" />
            <NarrowPageWrapper
                includeSidePadding={true}
                includeTopPadding={true}
            >
                <h1>Contact Us</h1>
                {sendSuccess || sendError ? (
                    sendSuccess ? (
                        <p>
                            Your message was sent. We'll contact you if your
                            message necessitates a reply.
                        </p>
                    ) : (
                        <p>
                            There was a problem sending your message. Please
                            email us directly as{' '}
                            <EmailLink emailAddress={contactEmail} />.
                        </p>
                    )
                ) : (
                    <React.Fragment>
                        <p>Fill out this form to get ahold of us.</p>
                        <Form
                            action="/contact/thanks"
                            name="contact"
                            onSubmit={handleSubmit}
                            data-netlify="true"
                        >
                            <FormField>
                                <label htmlFor="contact-form-name">Name</label>
                                <input
                                    id="contact-form-name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </FormField>
                            <FormField>
                                <label htmlFor="contact-form-email">
                                    Email
                                </label>
                                <EmailInput
                                    id="contact-form-email"
                                    name="email"
                                    value={email}
                                    changeHandler={handleChange}
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
                                    onChange={handleChange}
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
                    <li>
                        Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </li>
                    <li>
                        Email: <EmailLink emailAddress={contactEmail} />
                    </li>
                    <li>Mailing address: {address}</li>
                </ul>
            </NarrowPageWrapper>
        </Layout>
    );
};

export default ContactPage;
