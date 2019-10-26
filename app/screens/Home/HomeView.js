import React, { Component } from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout style={styles.container}>
            <Text category='h4' style={styles.container}>Welcome to UI Kitten</Text>
            <Button>BUTTON</Button>
          </Layout>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    text: { marginVertical: 16 },
  });
  
export default HomeView;
