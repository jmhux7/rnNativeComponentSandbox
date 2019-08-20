/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Start-up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  }
});

export default App;
