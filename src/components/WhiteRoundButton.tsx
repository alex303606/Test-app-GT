import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

type WhiteRoundButtonProps = {
  icon: ImageSourcePropType;
  showEllipsis?: boolean;
};

export const WhiteRoundButton: React.FC<WhiteRoundButtonProps> = ({
  icon,
  showEllipsis,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed
          ? {
              backgroundColor: 'grey',
            }
          : { backgroundColor: 'white' },
      ]}
    >
      <Image style={styles.image} source={icon} />
      {showEllipsis ? (
        <View style={styles.ellipseContainer}>
          <Image
            style={styles.ellipse}
            source={require('../../assets/ellipse.png')}
          />
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 41,
    height: 40,
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 14,
    height: 16,
  },
  ellipse: {
    width: 9,
    height: 8,
  },
  ellipseContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#329763',
    borderRadius: '100%',
  },
});
