import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

class ContactApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedContact : {}
        }
    }

    receiveContact= (contact) => {
        this.setState({
            selectedContact : contact
        })
    };


    render() {
        return (
            <React.Fragment>
               <div className="container mt-3">
                   <div className="row">
                       <div className="col">
                           <p className="h3 text-primary">Contact App</p>
                           <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo facere ipsa saepe vitae. A aspernatur consectetur dicta doloribus laboriosam maiores qui, voluptatibus! Accusamus eius eum in labore perferendis quas.</p>
                       </div>
                   </div>
                   <div className="row mt-3">
                       <div className="col-md-9">
                           <ContactList sendContact={this.receiveContact}/>
                       </div>
                       <div className="col-md-3">
                           <ContactCard selectedContact={this.state.selectedContact}/>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }

}
export default ContactApp;
