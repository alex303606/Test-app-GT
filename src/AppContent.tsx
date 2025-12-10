import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Footer, Header, ModalScreen } from './components';
import React, { useCallback, useState } from 'react';

export const AppContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);

  const onToggleModalHandler = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust as needed
    >
      <Header />
      <View style={styles.content}>
        {/*<Text style={styles.text}>{'Добавьте\nзначение'}</Text>*/}
      </View>
      <Footer onPress={onToggleModalHandler} />
      <ModalScreen
        modalVisible={modalVisible}
        inputValue={inputValue}
        toggleModal={onToggleModalHandler}
        setInputValue={setInputValue}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
});
