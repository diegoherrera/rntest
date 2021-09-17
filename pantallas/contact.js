

// Import React
import React, { useState, useEffect } from 'react';

// Import all required component
import {
    PermissionsAndroid,
    Platform,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
} from 'react-native';

import Contacts from 'react-native-contacts';

const Contact: () => Node = () => {
    
    let [contacts, setContacts] = useState([]);


useEffect(() => {
    if (Platform.OS === 'android') {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
        }).then(() => {
            console.log('antes de llamar al metodo');
            loadContacts();
        }
        );
    } else {
        loadContacts();
    }
}, []);

const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
        console.log('Retorno del metodo ');
        contacts.sort(
            (a, b) =>
                a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        console.log('contacts -> ', contacts);
        if (err === 'denied') {
            alert('Permission to access contacts was denied');
            console.warn('Permission to access contacts was denied');
        } else {
            setContacts(contacts);
            console.log('contacts', contacts);
        }
    });
};

  
return (
    <>
      <Text style={stylesContact.titleStyle}>Contact in Device</Text>
      <ScrollView>
        <Text style={stylesContact.instructions}>
          {JSON.stringify(contacts, null, '  ')}
        </Text>
      </ScrollView>
    </>
  );

};


const stylesContact = StyleSheet.create({
    titleStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'left',
      color: '#333333',
      margin: 5,
    },
  });


export default Contact;
