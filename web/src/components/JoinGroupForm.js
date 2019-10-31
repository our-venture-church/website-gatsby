import React from 'react';

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
        this.state = { isValidated: false };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state }),
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email } = this.state;
        return (
            <form
                name="join-a-group"
                onSubmit={this.handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="join-a-group" />
                <div hidden>
                    <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </div>
                <p>
                    <label htmlFor="join-form-name">Your Name: </label>
                    <input
                        id="join-form-name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="join-form-email">Your Email:</label>
                    <input
                        id="join-form-email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </p>
                <p>
                    <button type="submit">Send Join Request</button>
                </p>
            </form>
        );
    }
}

export default JoinGroupForm;
