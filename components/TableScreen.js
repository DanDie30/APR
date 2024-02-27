// ExampleFour.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import ModalScreen from '../components/ModalScreen';

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Titulo', 'Acción'],
      tableData: [
        ['Falla 1', 'Ver Informe'],
        ['Actualización 2', 'Ver Informe'],
        ['Actualización 3', 'Ver Informe'],
        ['Actualización 4', 'Ver Informe'],
      ],
      showModal: false, // Nuevo estado para controlar la visibilidad del modal
    };
  }

  // Función para mostrar el modal basado en la fila seleccionada
  showReportModal(index) {
    this.setState({ showModal: true, selectedRowIndex: index });
  }

  // Función para ocultar el modal
  hideReportModal() {
    this.setState({ showModal: false });
  }

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <Table>
          <Row textStyle={styles.textHead} data={state.tableHead} style={styles.head} />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  textStyle={styles.text}
                  data={cellIndex === 1 ? this.renderCell(cellData, index) : cellData}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
        <ModalScreen
          visible={state.showModal}
          hideModal={() => this.hideReportModal()}
          // Pasa el índice de la fila seleccionada al modal
          selectedRowIndex={state.selectedRowIndex}
        />
      </View>
    );
  }

  renderCell(data, index) {
    return (
      <TouchableOpacity onPress={() => this.showReportModal(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{data}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', width: '100%', maxWidth: 350, justifyContent: 'center' },
  head: { height: 40, backgroundColor: '#CFCFCF', borderColor: '#000', borderWidth: 1, justifyContent: 'center' },
  text: { margin: 6, textAlign: 'center' },
  textHead: { margin: 6, textAlign: 'center', fontSize: 20 },
  row: { justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#E3E3E3', borderColor: '#000', borderWidth: 0.5, borderBlockColor: '#000' },
  btn: { width: '70%', backgroundColor: '#D2D2D2', borderColor: '#000', borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
  btnText: { textAlign: 'center', color: '#000' },
});
