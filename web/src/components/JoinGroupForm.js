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
            <form
                action="POST"
                name="join-a-group"
                onSubmit={this.handleSubmit}
                data-netlify="true"
            >
                <input type="hidden" name="groupName" value={groupName} />
                <input type="hidden" name="groupNumber" value={groupNumber} />
                <input type="hidden" name="groupPage" value={groupPage} />
                <p>
                    <label htmlFor="join-form-name">Name</label>
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
                    <label htmlFor="join-form-email">Email</label>
                    <input
                        id="join-form-email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button type="submit">Send Join Request</button>
                </p>
            </form>
        );
    }
}

export default JoinGroupForm;
