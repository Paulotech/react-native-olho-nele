import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Picker } from 'react-native';
import api from '../services/api';


export default class App extends React.Component {
  static navigationOptions = {
    title: 'Olho nele' 
  }
  state = {
    name: [],
    siglum: [],
    wikipedia: [],
    sigla: 1
  };

  componentDidMount() {
    this.loadpartidos();
  }
  _onPressButton() {
    this.loadpartidos();
  }
  loadpartidos = async () => {
    const response = await api.get(`political-parties/${this.state.sigla}`);
    
    const { name, siglum, wikipedia } = response.data;
    this.setState({name, siglum, wikipedia }) 
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 350, height: 100, marginBottom: 10}} 
        source={require('../imgs/brasil.jpg')}
        />
        
        <TextInput  style={styles.inputs}
        onChangeText={sigla => this.setState({sigla})}
        placeholder="Search"
        />
        
        <Button
        style={[styles.button, {width: 200}]} 
        onPress={() => this._onPressButton()} 
        title="pesquisar"
        color="#0f4811"
        accessibilityLabel="Pesquisar"
      />
        <View style={styles.lista}>
          <Text style={styles.listasigla}>{this.state.siglum}</Text>
          <Text style={styles.listaname}>{this.state.name}</Text>
          <Text style={styles.listalink}>{this.state.wikipedia}</Text>
          <Text>{this.state.sigla}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  inputs: {
    height: 40,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 2
  },
  lista: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listasigla: {
    fontSize: 25,
    fontWeight: "800", 
  }, 
  listaname: {
    fontSize: 20
  },
  listalink: {
    color: 'blue'
  },
  button: {
    width: 150,
    height: 35,
    padding: 20
  }
});
