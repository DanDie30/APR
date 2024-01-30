import React, {useRef, useState} from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Avatar, Card, Icon, IconButton, MD3Colors} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

 

function DetailsScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  ////////////////////////////////

  const [selectedLanguage, setSelectedLanguage] = useState();

  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  return (
    <View style={styles.container}>
  
      
  <View style={styles.logoContainer}>
      <Image source={require('../assets/history.png')}></Image>
      </View>
    <View>

    <Text style={styles.textHeader}>
  Historial de Informes
    </Text>
   </View>

   <SafeAreaView >
    <View style={styles.contDate}>
    <Button onPress={showDatepicker} title="Escoger fecha" color={"#000"}  />

    </View>
      <Text>Fecha seleccionada: {date.toLocaleDateString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>



  <View style={styles.cardView}>
      <Card.Title
        title="Informe generado Falla 1" 
        titleVariant='labelLarge'
        subtitle="Generado el 26/01/2024"
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center', borderTopColor:'#fff', bordertopWidth: 1 }}>
            <IconButton iconColor={'#000'} icon="eye" size={20} />
            {/* Agrega otro IconButton aquí */}
            <IconButton iconColor={'#000'} icon="download" />
          </View>
        )}
      />

<Card.Title
        title="Informe generado Falla 2" 
        titleVariant='labelLarge'
        subtitle="Generado el 27/01/2024"
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton iconColor={'#000'} icon="eye" size={20} />
            {/* Agrega otro IconButton aquí */}
            <IconButton iconColor={'#000'} icon="download" />
          </View>
        )}
      />
         <Card.Title
        title="Informe generado Falla 3" 
        titleVariant='labelLarge'
        subtitle="Generado el 28/01/2024"
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton iconColor={'#000'} icon="eye" size={20} />
            {/* Agrega otro IconButton aquí */}
            <IconButton iconColor={'#000'} icon="download" />
          </View>
        )}
      />
         <Card.Title
        title="Informe generado Falla 4" 
        titleVariant='labelLarge'
        subtitle="Generado el 29/01/2024"
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton iconColor={'#000'} icon="eye" size={20} />
            {/* Agrega otro IconButton aquí */}
            <IconButton iconColor={'#000'} icon="download" />
          </View>
        )}
      />
       
    </View>

    </View>


  )
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
