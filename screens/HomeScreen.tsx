import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LeafletMap from '../screens/HomeScreen/LeafletMap';
import MicButton from '../screens/HomeScreen/MicButton';
import IncidentPanel from '../screens/HomeScreen/IncidentPanel';

export default function HomeScreen() {
  const [emergency, setEmergency] = useState(false);

  const handleEmergency = () => {
    setEmergency(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <LeafletMap />

      <View style={styles.bottom}>
        <MicButton onEmergency={handleEmergency} />
      </View>

      <IncidentPanel visible={emergency} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});