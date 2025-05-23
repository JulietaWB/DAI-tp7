/*import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const image = require('./assets/fotoLimon.jpg');

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
*/

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Animated, StyleSheet, SafeAreaView, Image, ImageBackground, Text, View, TextInput, Alert, TouchableOpacity, Pressable } from 'react-native';
const imgPerfil = require('./assets/fotoPerfil.png');
const backgroundImg = require('./assets/fotoBackground.jpg');


export default function App() {
  const [nombre, handleNombreChange] = React.useState('');
  const [msg, setMsg] = useState('');
  const [opacity] = useState(new Animated.Value(1));


  const contactar = () => {
    Alert.alert('Mensaje enviado', mensaje);
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
      
        <View style={styles.container}>        
          <View>            
            <Image source={imgPerfil} style={styles.imgPerfil} />

            <Text style={styles.nombre}>Vera Romanowicz</Text>
            <Text style={styles.titulo}>Desarrolladora frontend</Text>

            <TextInput
              style={styles.input}
              placeholder='Enter a message'
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
        </View>
 
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    maxWidth: 350,
    width: '90%',
  },
  imgPerfil: {
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
    width: '100%',
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
  },

});       