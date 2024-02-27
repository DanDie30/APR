import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ModalScreen from '../components/ModalScreen';
import TableScreen from '../components/TableScreen';


function DetailsScreen() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/history.png')} />
      </View>
      <View>
        <Text style={styles.textHeader}>Historial de Informes</Text>
      </View>
      <TableScreen showModal={showModal} toggleModal={toggleModal} />
      <ModalScreen visible={showModal} hideModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  contDate:{
marginBottom: 10,
  },
  logoContainer:{
    marginBottom: 40,
    fontSize: 10,
  
  },
  cardView:{
width: '100%',
maxWidth: 350,
borderTopWidth: 1,
margin: 10,
  },
  dropdownPicker:{
width: '100%',
maxWidth: 350,
borderWidth: 1,
backgroundColor: "#fff",
borderRadius: 20,
justifyContent: 'center',
marginBottom: 20,
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fafc'

  },
  logoContainer:{
    marginBottom: 40,
  
  },
  textHeader:{
  textAlign: 'center',
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  },


})


export default DetailsScreen
