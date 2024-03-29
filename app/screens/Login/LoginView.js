import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { Button } from 'react-native-ui-kitten';

class LoginView extends Component {
    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={this.navigate}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
                <Button>
                    Test Here 
                </Button>
            </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;
