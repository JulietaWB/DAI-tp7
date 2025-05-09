import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  const imagen=''; //RUTA DE LA IMAGEN
  const [nombre, handleNombreChange] = React.useState('');
  const botonPresionado = () => styles.boton= backgroundColor='blue';

  return (
    
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
