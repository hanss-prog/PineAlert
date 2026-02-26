import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function TermsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.text}>
        Welcome to PineAlert, a community-based emergency response app designed to provide fast assistance, real-time communication, and improved safety during emergencies.
By continuing, you allow PineAlert to access your location and microphone to help responders and nearby users identify your position, communicate, and coordinate rescue efforts. These permissions are used only for safety and emergency purposes, and your privacy is protected.
PineAlert is provided “as is.” The developers are not liable for damages resulting from its use. Always use the app responsibly and prioritize your safety.

Tap “I Agree” to continue.

      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Accept & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { marginBottom: 30 },
  button: {
    backgroundColor: '#D00000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: { color: 'white', fontWeight: 'bold' }
});
