import React from "react";
import Axios from "axios";

class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        let dataURL = 'https://gist.githubusercontent.com/khan-aqib/d938980d3651cc679b50de4af311c929/raw/e46799b35021a831fe668b0a87c69d1693ed10f1/customer.json';
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                contacts : response.data
            });
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error
            });
        });
    }

    clickContact = (contact) => {
        this.props.sendContact(contact);
    };

    render() {
        return (
            <React.Fragment>
                <table className="table table-hover text-center table-primary table-striped">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>LOCATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.length > 0 ?
                                <React.Fragment>
                                    {
                                        this.state.contacts.map(contact => {
                                            return(
                                                <tr key={contact.login.uuid} onClick={this.clickContact.bind(this,contact)}>
                                                    <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                                    <td>{contact.name.first} {contact.name.last}</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.phone}</td>
                                                    <td>{contact.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

}
export default ContactList;
