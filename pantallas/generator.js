

import React, {useState, useRef} from 'react';


import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';


const Generator = () => {
    const [inputText, setInputText] = useState('');
    const [qrvalue, setQrvalue] = useState('');
    let myQRCode = useRef();
  
    const shareQRCode = () => {
      myQRCode.toDataURL((dataURL) => {
        console.log(dataURL);
        let shareImageBase64 = {
          title: 'React Native',
          url: `data:image/png;base64,${dataURL}`,
          subject: 'Share Link', //  for email
        };
        Share.share(shareImageBase64).catch((error) => console.log(error));
      });
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={stylesGenerator.container}>
          <Text style={stylesGenerator.titleStyle}>
            Generation of QR Code in React Native
          </Text>
          <QRCode
            getRef={(ref) => (myQRCode = ref)}
            // ref={myQRCode}
            //QR code value
            value={qrvalue ? qrvalue : 'NA'}
            //size of QR Code
            size={250}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor="white"
            //Center Logo size  (Optional)
            logoSize={30}
            //Center Logo margin (Optional)
            logoMargin={2}
            //Center Logo radius (Optional)
            logoBorderRadius={15}
            //Center Logo background (Optional)
            logoBackgroundColor="yellow"
          />
          <Text style={stylesGenerator.textStyle}>
            Please insert any value to generate QR code
          </Text>
          <TextInput
            style={stylesGenerator.textInputStyle}
            onChangeText={(inputText) => setInputText(inputText)}
            placeholder="Enter Any Value"
            value={inputText}
          />
          <TouchableOpacity
            style={stylesGenerator.buttonStyle}
            onPress={() => setQrvalue(inputText)}>
            <Text style={stylesGenerator.buttonTextStyle}>
              Generate QR Code
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={stylesGenerator.buttonStyle}
            onPress={shareQRCode}>
            <Text style={stylesGenerator.buttonTextStyle}>
              Share QR Code
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

export default Generator;

const stylesGenerator = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    titleStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textStyle: {
      textAlign: 'center',
      margin: 10,
    },
    textInputStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#ff0066',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#51D8C7',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 30,
      padding: 10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      backgroundColor: '#ff0066',
      paddingVertical: 10,
      fontSize: 16,
    },
  });
