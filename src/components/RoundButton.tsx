import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type RoundButtonProps = {
  icon: ImageSourcePropType;
  text: string;
};

export const RoundButton: React.FC<RoundButtonProps> = ({ icon, text }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed
            ? {
                backgroundColor: 'grey',
              }
            : null,
        ]}
      >
        <Image style={styles.image} source={icon} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    width: 57,
    height: 56,
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },
  image: {
    width: 57,
    height: 56,
  },
  text: {
    fontSize: 11,
    color: 'white',
    fontWeight: 400,
    textAlign: 'center',
  },
});
