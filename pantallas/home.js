import React, { Component, Fragment } from 'react';

import styles from './style'

import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View
} from 'react-native';


class Home extends Component {


    constructor(props) {
        super(props);
        
    }

   openPanel = () => {
       this.props.navigation.openDrawer();
    }

    render() {

        return (
            <View >               
            </View>
        );
    }
}

export default Home;