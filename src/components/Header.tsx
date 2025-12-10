import { StyleSheet, Text, View } from 'react-native';
import { WhiteRoundButton } from './WhiteRoundButton.tsx';
import React from 'react';
import { RoundButton } from './RoundButton.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Header: React.FC = () => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
        },
      ]}
    >
      <View style={styles.row}>
        <WhiteRoundButton icon={require('../../assets/user.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Добрый день</Text>
          <Text style={styles.name}>Егоренко Н.А.</Text>
        </View>
        <WhiteRoundButton
          showEllipsis
          icon={require('../../assets/bing.png')}
        />
      </View>
      <View style={[styles.buttonsRow]}>
        <RoundButton
          text={'Заявки'}
          icon={require('../../assets/Group 32.png')}
        />
        <RoundButton
          text={'Статистика'}
          icon={require('../../assets/Group 29.png')}
        />
        <RoundButton
          text={'Отделения'}
          icon={require('../../assets/Group 30.png')}
        />
        <RoundButton
          text={'Архив'}
          icon={require('../../assets/Group 31.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  text: {
    fontSize: 10,
    lineHeight: 18,
    color: 'white',
    fontWeight: 400,
    opacity: 0.5,
  },
  name: {
    fontSize: 14,
    lineHeight: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
  },
  container: {
    backgroundColor: '#329763',
    height: 190,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
