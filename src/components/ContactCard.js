import React from "react";

class ContactCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {
                    //check the object is empty or not using global varibale OBJECT(keys)
                    Object.keys(this.props.selectedContact).length > 0 ?
                        <React.Fragment>
                            <div className="card sticky-top">
                                <div className="card-header bg-primary text-white">
                                    <div className="p-4">

                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <img src={this.props.selectedContact.picture.large} alt="" className="img-thumbnail rounded-circle w-50 contact-img"/>
                                    <ul className="list-group mt-3">
                                        <li className="list-group-item list-group-item-primary">
                                            NAME : {this.props.selectedContact.name.first} {this.props.selectedContact.name.last}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            {this.props.selectedContact.email}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            AGE : {this.props.selectedContact.dob.age} Yrs.
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            City : {this.props.selectedContact.location.City}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            State : {this.props.selectedContact.location.state}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment> : null
                }
            </React.Fragment>
        );
    }

}
export default ContactCard;
