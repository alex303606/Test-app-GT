import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Footer, Header, ModalScreen, SectionListComponent, } from './components';
import React, { useCallback, useMemo, useState } from 'react';
import { groupAnagrams } from './utils';

export const AppContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [words, setWords] = useState<string[]>([]);

  const onToggleModalHandler = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const onSetSection = useCallback(() => {
    if (!inputValue) {
      return;
    }

    setWords(prevState => {
      return [...prevState, inputValue];
    });

    return setModalVisible(!modalVisible);
  }, [inputValue, modalVisible]);

  const sectionList = useMemo(() => {
    return groupAnagrams(words);
  }, [words]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust as needed
    >
      <Header />
      <SectionListComponent sections={sectionList} />
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
