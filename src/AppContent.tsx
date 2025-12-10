import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import {
  Footer,
  Header,
  ModalScreen,
  SectionListComponent,
} from './components';
import React, { useCallback, useState } from 'react';
import { Section } from './components/types.ts';

export const AppContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [sections, setSections] = useState<Section[]>([]);

  const onToggleModalHandler = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const onSetSection = useCallback(() => {
    if (!inputValue) {
      return;
    }
    setSections(prevState => {
      return [...prevState, { title: 'Значение 1', data: [inputValue] }];
    });
    return setModalVisible(!modalVisible);
  }, [inputValue, modalVisible]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust as needed
    >
      <Header />
      <SectionListComponent sections={sections} />
      <Footer onPress={onToggleModalHandler} />
      <ModalScreen
        modalVisible={modalVisible}
        inputValue={inputValue}
        toggleModal={onToggleModalHandler}
        setInputValue={setInputValue}
        onPressAddValue={onSetSection}
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
