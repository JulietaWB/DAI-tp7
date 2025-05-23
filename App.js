import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Animated, StyleSheet, SafeAreaView, Image, ImageBackground, Text, View, TextInput, Alert, TouchableOpacity, Pressable } from 'react-native';
const fotoVera = require('./assets/fotoPerfil.png');
const fotoJuli = require('./assets/fotoPerfil2.png');
const backgroundImg = require('./assets/fotoBackground.jpg');


export default function App() {
  const [nombre, handleNombreChange] = React.useState('');
  const [msg, setMsg] = useState('');
  const [opacity] = useState(new Animated.Value(1));


  const contactar = () => {
    Alert.alert('Mensaje enviado', msg);
  };

  const pressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.6,
      duration: 150,
      useNativeDriver: true
    }).start();
  };

  const pressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  };



  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor="#f5a6ca" barStyle="light-content" />

      <ImageBackground source={backgroundImg} style={styles.image} resizeMode="cover">

        {/*  <View style={styles.viewCards}>  */}
          <View style={styles.container}>        
              <Image source={fotoVera} style={styles.fotoPerfil} />

              <Text style={styles.nombre}>Vera Romanowicz</Text>
              <Text style={styles.titulo}>Desarrolladora frontend</Text>

              <TextInput
                style={styles.input}
                placeholder='Escribe tu mensaje'
                onChangeText={setMsg}
                value={msg}
              />
              
              <TouchableOpacity style={styles.boton} onPress={contactar}>
                <Text style={styles.botonTexto}>Contactar</Text>
              </TouchableOpacity>

              <Animated.View style={{ opacity }}>
                <Pressable
                  onPressIn={pressIn}
                  onPressOut={pressOut}
                  style={styles.botonSecundario} 
                >
                  <Text style={styles.botonSecundarioTexto}>Ver Perfil</Text>
                </Pressable>
              </Animated.View>
          </View>


          <View style={styles.container}>        
              <Image source={fotoJuli} style={styles.fotoPerfil} />

              <Text style={styles.nombre}>Julieta Wainhaus Barber</Text>
              <Text style={styles.titulo}>Desarrolladora backend</Text>

              <TextInput
                style={styles.input}
                placeholder='Escribe tu mensaje'
                onChangeText={setMsg}
                value={msg}
              />
              
              <TouchableOpacity style={styles.boton} onPress={contactar}>
                <Text style={styles.botonTexto}>Contactar</Text>
              </TouchableOpacity>

              <Animated.View style={{ opacity }}>
                <Pressable
                  onPressIn={pressIn}
                  onPressOut={pressOut}
                  style={styles.botonSecundario} 
                >
                  <Text style={styles.botonSecundarioTexto}>Ver Perfil</Text>
                </Pressable>
              </Animated.View>
          </View>

        {/*  </View>  */}

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  /*  viewCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },  */
  
  container: {
    marginVertical: 25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    maxWidth: 350,
    width: '90%',
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 18,
    color: '#f5a6ca',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#f5a6ca',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 10,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  botonSecundario: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  botonSecundarioTexto: {
    color: '#f5a6ca',
    fontWeight: 'bold',
    textAlign: 'center'
  },

});       