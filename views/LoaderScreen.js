import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <Text style={styles.text}>Carregando...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 674.12,
    height: 360.52,
    backgroundColor: '#34B414',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    marginTop: 20,
  },
});



export default LoaderScreen;
