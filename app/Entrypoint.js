/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';


const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
            </ApplicationProvider>

        );
    }
}
