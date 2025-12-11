import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
