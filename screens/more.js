import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const MoreScreen = () => {
    return(
        <View style={styles.container}>
            <Text>By using this application, you agree that PNCC is not responsible for the inaccuracy and inappropriateness of the information or material contained on any web sites viewed on or downloaded from the Internet using PNCC service.
The Internet is inherently unsecured, and you may be exposed to viruses and other threats depending on the sites you visit and the actions taken over which we have no control. We cannot guarantee the confidentiality of any information which you choose to transmit over the Internet. USING THE SERVICE IS ENTIRELY AT YOUR OWN RISK. We shall not be liable for any direct and indirect, special or consequential loss, damages, costs and/or other claims that may arise as a result of your use of the service.
You are reminded to comply with all local laws, rules and regulations, and you will be solely responsible for any breaches of the law. Refrain from downloading COPYRIGHTED MATERIALS. IP and MAC Addresses are being monitored by international copyright holders for such activities.</Text>
        </View>
    );
};

export default MoreScreen;