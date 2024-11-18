import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Frase inicial',
      img: require('./src/fechado.png')
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "batata",
      "cenora",
      "abacaxi",
      "romã",
      "jabuticaba",
    ];
  }

  quebrarBiscoito() {
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numAleatorio] + '" ',
      img: require('./src/aberto.png')
    });
  }

  render() {
    return (
      <View style={estilos.container}>
        {/* imagem estática source={require('./src/biscoito.png')}*/}
        <Image
          source={this.state.img}
          style={estilos.img}
        />

        <Text style={estilos.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={estilos.botao} onPress={this.quebrarBiscoito}>
          <View style={estilos.btnArea}>
            <Text style={estilos.btnTexto}>Abrir biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#eeab22',
    borderRadius: 25,
    backgroundColor: '#dd7b22'
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default App;