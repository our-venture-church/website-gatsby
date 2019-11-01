import React from 'react';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
`;

const StyledFormField = styled.div`
    margin-bottom: 2rem;

    label {
        display: block;
        margin-bottom: 0.25em;
    }

    input {
        padding: 0.75em;
        width: 100%;
    }

    button {
        background: ${colors.ventureYellow};
        border: 1px solid ${colors.ventureYellow};
        border-radius: 3px;
        color: ${colors.charcoalBlack};
        cursor: pointer;
        display: block;
        padding: 0.5em 0.75em;
        text-align: center;
        text-decoration: none;
        width: 100%;

        &:hover,
        &:focus {
            background-color: ${colors.ventureYellow};
            border-color: ${colors.ventureYellow};
            color: ${colors.charcoalBlack};
        }
    }
`;

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

class JoinGroupForm extends React.Component {
    constructor(props) {
        super(props);
        const { groupName, groupNumber, groupPageUrl: groupPage } = this.props;
        this.state = {
            groupName,
            groupNumber,
            groupPage,
        };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'join-a-group', ...this.state }),
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, groupName, groupNumber, groupPage } = this.state;
        return (
            <StyledForm
                action="POST"
                name="join-a-group"
                onSubmit={this.handleSubmit}
                data-netlify="true"
            >
                <h3>Sign-up</h3>
                <p>
                    Fill out this form and we'll contact you about joining this
                    group.
                </p>
                <input type="hidden" name="groupName" value={groupName} />
                <input type="hidden" name="groupNumber" value={groupNumber} />
                <input type="hidden" name="groupPage" value={groupPage} />
                <StyledFormField>
                    <label htmlFor="join-form-name">Name</label>
                    <input
                        id="join-form-name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </StyledFormField>
                <StyledFormField>
                    <label htmlFor="join-form-email">Email</label>
                    <input
                        id="join-form-email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </StyledFormField>
                <div data-netlify-recaptcha="true"></div>
                <StyledFormField>
                    <button type="submit">Send Join Request</button>
                </StyledFormField>
            </StyledForm>
        );
    }
}

export default JoinGroupForm;
