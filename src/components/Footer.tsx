import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  onPress: () => void;
};

export const Footer: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.footer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed
            ? {
                backgroundColor: 'grey',
              }
            : null,
        ]}
      >
        <Text style={styles.buttonText}>Добавить значение</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#329763',
    height: 64,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
