import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Footer, Header } from './components';
import React, { useCallback } from 'react';

export const AppContent: React.FC = () => {
  const onPressHandler = useCallback(() => {
    return;
  }, []);

  const [value, setValue] = React.useState<string>('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust as needed
    >
      <Header />
      <View style={styles.content}>
        {/*<Text style={styles.text}>{'Добавьте\nзначение'}</Text>*/}
        <View style={styles.add}>
          <Text style={styles.addText}>Добавить значение</Text>
          <TextInput
            placeholder={'Например: Cat'}
            placeholderTextColor={'rgba(41, 45, 58, 0.32)'}
            style={styles.input}
            value={value}
            onChangeText={setValue}
          />
        </View>
      </View>
      <Footer onPress={onPressHandler} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingBottom: 72,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 24,
  },
  text: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  add: {
    backgroundColor: 'white',
    paddingTop: 24,
    width: '100%',
    paddingHorizontal: 16,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingBottom: 56,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F5F5F5',
  },
  addText: {
    color: '#303030',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});
