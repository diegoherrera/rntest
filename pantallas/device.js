import React, { useState, useEffect } from 'react';

import styles from './style'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  import {
    getManufacturer
    , useBatteryLevel,
    useBatteryLevelIsLow,
    usePowerState,
    useFirstInstallTime,
    useDeviceName,
    useHasSystemFeature,
    useIsEmulator,
  } from 'react-native-device-info';
  import DeviceInfo from 'react-native-device-info';

/*
class Device extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null
        };
    }

    render() {

        return (
            <Text>Hola Device</Text>
        );
    }
}*/


const Device: () => Node = () => {

    const [asyncDeviceInfo, setAsyncDeviceInfo] = useState({});
  
    useEffect(() => {
      getDataAsync();
    }, []);
  
  
    const getDataAsync = async () => {
  
      let deviceJSON = {};
      try { 
        
        deviceJSON.uniqueId = DeviceInfo.getUniqueId();
        deviceJSON.deviceId = DeviceInfo.getDeviceId();
        deviceJSON.bundleId = DeviceInfo.getBundleId();
        deviceJSON.systemName = DeviceInfo.getSystemName();
        deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
        deviceJSON.version = DeviceInfo.getVersion();
        deviceJSON.readableVersion = DeviceInfo.getReadableVersion();
        deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
        deviceJSON.isTablet = DeviceInfo.isTablet();
        deviceJSON.appName = DeviceInfo.getApplicationName();
        deviceJSON.brand = DeviceInfo.getBrand();
        deviceJSON.model = DeviceInfo.getModel();
        deviceJSON.deviceType = DeviceInfo.getDeviceType();
        deviceJSON.manufacturer = await getManufacturer();
        deviceJSON.buildId = await DeviceInfo.getBuildId();
        deviceJSON.isCameraPresent = await DeviceInfo.isCameraPresent();
        deviceJSON.deviceName = await DeviceInfo.getDeviceName();
        deviceJSON.usedMemory = await DeviceInfo.getUsedMemory();
        deviceJSON.userAgent = await DeviceInfo.getUserAgent();
        deviceJSON.instanceId = await DeviceInfo.getInstanceId();
        deviceJSON.installReferrer = await DeviceInfo.getInstallReferrer();
        deviceJSON.installerPackageName = await DeviceInfo.getInstallerPackageName();
        deviceJSON.isEmulator = await DeviceInfo.isEmulator();
        deviceJSON.fontScale = await DeviceInfo.getFontScale();
        deviceJSON.hasNotch = await DeviceInfo.hasNotch();
        deviceJSON.firstInstallTime = await DeviceInfo.getFirstInstallTime();
        deviceJSON.lastUpdateTime = await DeviceInfo.getLastUpdateTime();
        deviceJSON.serialNumber = await DeviceInfo.getSerialNumber();
        deviceJSON.androidId = await DeviceInfo.getAndroidId();
        deviceJSON.IpAddress = await DeviceInfo.getIpAddress();
        // For MacAddress add android.permission.ACCESS_WIFI_STATE
        deviceJSON.MacAddress = await DeviceInfo.getMacAddress();
        // For phoneNumber add android.permission.READ_PHONE_STATE
        deviceJSON.phoneNumber = await DeviceInfo.getPhoneNumber();
        deviceJSON.ApiLevel = await DeviceInfo.getApiLevel();
        deviceJSON.carrier = await DeviceInfo.getCarrier();
        deviceJSON.totalMemory = await DeviceInfo.getTotalMemory();
        deviceJSON.maxMemory = await DeviceInfo.getMaxMemory();
        deviceJSON.totalDiskCapacity = await DeviceInfo.getTotalDiskCapacity();
        deviceJSON.totalDiskCapacityOld = await DeviceInfo.getTotalDiskCapacityOld();
        deviceJSON.freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
        deviceJSON.freeDiskStorageOld = await DeviceInfo.getFreeDiskStorageOld();
        deviceJSON.batteryLevel = await DeviceInfo.getBatteryLevel();
        deviceJSON.isLandscape = await DeviceInfo.isLandscape();
        deviceJSON.isAirplaneMode = await DeviceInfo.isAirplaneMode();
        deviceJSON.isBatteryCharging = await DeviceInfo.isBatteryCharging();
        deviceJSON.isPinOrFingerprintSet = await DeviceInfo.isPinOrFingerprintSet();
        deviceJSON.supportedAbis = await DeviceInfo.supportedAbis();
        deviceJSON.hasSystemFeature = await DeviceInfo.hasSystemFeature('android.software.webview',);
        deviceJSON.getSystemAvailableFeatures = await DeviceInfo.getSystemAvailableFeatures();
        deviceJSON.powerState = await DeviceInfo.getPowerState();
        deviceJSON.isLocationEnabled = await DeviceInfo.isLocationEnabled();
        deviceJSON.headphones = await DeviceInfo.isHeadphonesConnected();
        deviceJSON.getAvailableLocationProviders = await DeviceInfo.getAvailableLocationProviders();
        deviceJSON.bootloader = await DeviceInfo.getBootloader();
        deviceJSON.device = await DeviceInfo.getDevice();
        deviceJSON.display = await DeviceInfo.getDisplay();
        deviceJSON.fingerprint = await DeviceInfo.getFingerprint();
        deviceJSON.hardware = await DeviceInfo.getHardware();
        deviceJSON.host = await DeviceInfo.getHost();
        deviceJSON.product = await DeviceInfo.getProduct();
        deviceJSON.tags = await DeviceInfo.getTags();
        deviceJSON.type = await DeviceInfo.getType();
        deviceJSON.baseOS = await DeviceInfo.getBaseOs();
        deviceJSON.previewSdkInt = await DeviceInfo.getPreviewSdkInt();
        deviceJSON.securityPatch = await DeviceInfo.getSecurityPatch();
        deviceJSON.codename = await DeviceInfo.getCodename();
        deviceJSON.incremental = await DeviceInfo.getIncremental();
        deviceJSON.supported32BitAbis = await DeviceInfo.supported32BitAbis();
        deviceJSON.supported64BitAbis = await DeviceInfo.supported64BitAbis();
        deviceJSON.synchronizedUniqueId = await DeviceInfo.syncUniqueId();
        /*deviceJSON.batteryLevel = batteryLevel;
        deviceJSON.batteryLevelIsLow = batteryLevelIsLow;
        deviceJSON.powerState = powerState;
        deviceJSON.firstInstallTime = firstInstallTime;
        deviceJSON.deviceName = deviceName;
        deviceJSON.hasSystemFeature = hasSystemFeature;
        deviceJSON.isEmulator = isEmulator;*/
  
        try {
          deviceJSON.deviceToken = await DeviceInfo.getDeviceToken();
        } catch (e) {
          console.log('Unable to get device token. Either simulator or not iOS11+');
        }
      } catch (e) {
        console.log('Trouble getting device info ', e);
      }
      // eslint-disable-next-line react/no-did-mount-set-state
      setAsyncDeviceInfo(deviceJSON);
    };
  

  
    return (
      <>
        <Text style={stylesDevice.titleStyle}>Informacion Device</Text>
        <ScrollView>
          <Text style={stylesDevice.instructions}>
            {JSON.stringify(asyncDeviceInfo, null, '  ')}
          </Text>
        </ScrollView>
      </>
    );
  };
  
  const stylesDevice = StyleSheet.create({
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


export default Device;