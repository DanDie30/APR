import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, TextInput, IconButton, MD3Colors, Provider } from 'react-native-paper';
import * as MediaLibrary from 'expo-media-library';

const ModalScreen = ({ visible, hideModal }) => {
  const [text, setText] = React.useState('');

  const onCloseModal = () => {
    setText('');
    hideModal();
  };

  const openPDF = async () => {
    console.log('Comenzando la apertura del PDF...');

    try {
      // Ruta al archivo local
      const localSource = require('./assets/pdf/miarchivo.pdf');

      // Crear el activo en la biblioteca de medios
      const asset = await MediaLibrary.createAssetAsync(localSource);

      // Abrir el activo
      await MediaLibrary.openAssetAsync(asset);

      console.log('Apertura del PDF completada con éxito');
    } catch (error) {
      console.error('Error al abrir el PDF:', error);
    }
  };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={onCloseModal} contentContainerStyle={styles.modalContainer}>
          <View>
            <Text style={styles.modalTitle}>Informe Falla general 1</Text>
          </View>
          <View>
            <TextInput
              style={styles.textArea}
              onChangeText={setText}
              placeholder='Debe incorporarse una descripción del informe subido por un usuario'
              value={text}
              keyboardType='text'
            />
          </View>
          <View style={styles.iconsContainer}>
            <IconButton
              icon="file-eye-outline"
              iconColor={MD3Colors.neutral0}
              size={35}
              onPress={openPDF}
            />
            <IconButton
              icon="download-outline"
              iconColor={MD3Colors.neutral0}
              size={35}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon="comment-edit-outline"
              iconColor={MD3Colors.neutral0}
              size={35}
              onPress={() => console.log('Pressed')}
            />
          </View>
          <View>
            <Button style={styles.closeButton} onPress={onCloseModal}>
              Cerrar
            </Button>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};


const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textArea: {
    width: '100%',
    maxWidth: 340,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    marginTop: 10,
  },
});

export default ModalScreen;
