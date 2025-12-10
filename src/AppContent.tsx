import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import {
  Footer,
  Header,
  ModalScreen,
  SectionListComponent,
} from './components';
import React, { useCallback, useState } from 'react';

export const AppContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  //const [list, setList] = useState<string[]>([]);

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
      <SectionListComponent />
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
});
