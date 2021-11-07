import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin, PasswordInput, TextInput } from 'react-admin';
import { MuiThemeProvider } from '@material-ui/core/styles';

class LoginPage extends Component {
    submit = (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <form onSubmit={this.submit}>
                  <TextInput  required label="Username"  source="username" />
                  <PasswordInput required label="Password" source="password" />
                </form>
            </MuiThemeProvider>
        );
    }
};

export default connect(undefined, { userLogin })(LoginPage);
