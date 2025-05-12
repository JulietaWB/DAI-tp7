import React from 'react';
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


/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  const imagen=''; //RUTA DE LA IMAGEN
  const [nombre, handleNombreChange] = React.useState('');
  const botonPresionado = () => styles.boton= backgroundColor='blue';

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    
    <SafeAreaView style = {styles.container} >
    <View>
      <StatusBar style={styles.statusbar} />
      
      <ImageBackground 
        source={imagen}
        resizeMode='cover'
        style={styles.foto}>
      </ImageBackground>

      <Text style={styles.nombre}>Vera Romanowicz</Text>
      <Text style={styles.titulo}>Desarrolladora frontend</Text>

      <TextInput
        style={styles.input}
        placeholder='Enter a message'
        onChangeText={handleNombreChange}
        value={nombre}
      />
      
      <TouchableOpacity style={styles.boton} onPress={() => Alert.alert("Mensaje enviado")}>
        <Text>Contactar</Text>
      </TouchableOpacity>

      <Pressable style={styles.botonSecundario}
        onPress={botonPresionado}>
        <Text>Ver Perfil</Text>
      </Pressable>
      
    </View>
    </SafeAreaView>
  );
}

@@ -17,4 +49,15 @@ const styles = StyleSheet.create({
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {},

  statusbar: {
    backgroundColor: '#f5a6ca',
  },

  boton: {
    backgroundColor: 'red',
  }

});
*/