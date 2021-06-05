import React from 'react';
import './App.css';
import ContactApp from "./components/ContactApp";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                    <a href="/" className="navbar-brand">React with Contact App</a>
                </nav>

                <ContactApp/>

                <div style={{marginBottom : '200px'}}/>
            </React.Fragment>
        );
    }

}

export default App;
