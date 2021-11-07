import React from 'react';
import { connect } from 'react-redux';
import { Responsive, userLogin} from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/PowerSettingsNew';

const LoginButton = ({ userLogin, ...rest }) => (
    <Responsive
        xsmall={
            <MenuItem
                onClick={userLogin}
                {...(rest)}
            >
                <LoginIcon /> userLogin
            </MenuItem>
        }
        medium={
            <Button
                onClick={userLogin}
                size="small"
                {...(rest)}
            >
                <LoginIcon /> Login
            </Button>
        }
    />
);
export default connect(undefined, { userLogin })(LoginButton);