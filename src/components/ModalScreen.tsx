import React, { useCallback } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const ModalScreen: React.FC<Props> = ({
  modalVisible,
  toggleModal,
  inputValue,
  setInputValue,
}) => {
  const toggleModalHandler = useCallback(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModalHandler}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={toggleModalHandler}
      >
        <View style={styles.modalContent}>
          <Text style={styles.addText}>Добавить значение</Text>
          <TextInput
            placeholder={'Например: Cat'}
            placeholderTextColor={'rgba(41, 45, 58, 0.32)'}
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Pressable
            onPress={() => null}
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
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 24,
    marginBottom: 56,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 24,
    width: '100%',
    paddingHorizontal: 16,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.07)',
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#329763',
    height: 64,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#303030',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});
