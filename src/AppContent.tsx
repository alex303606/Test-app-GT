import { StyleSheet, Text, View } from 'react-native';
import { Footer, Header } from './components';
import React, { useCallback } from 'react';

export const AppContent: React.FC = () => {
  const onPressHandler = useCallback(() => {
    return;
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>{'Добавьте\nзначение'}</Text>
      </View>
      <Footer onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '400',
  },
});
