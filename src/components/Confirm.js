import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { 
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio 
        }
    } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        /> 
                        <ListItem 
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </List>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}