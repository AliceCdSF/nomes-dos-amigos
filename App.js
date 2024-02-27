import React from 'react';
import { View,Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Amigodois')} style={[styles.button, styles.buttonLeft]}>
          <Text style={styles.buttonText}>Annely</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Amigoum') }style={[styles.button, styles.buttonRight]}>
          <Text style={styles.buttonText}>Isabella Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Amigoum({ navigation }) {
    return (
        <View style={styles.container1}>
        <Text style={styles.text1}>
          Porque ela é carente e tá sempre perto de mim, me acostumei tanto que até gosto da quenga. Mimica: Vender trufa.
        </Text>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home') }style={[styles.button, styles.buttonRight]}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
    </View>
      </View>
    );
  };

  function Amigodois({ navigation }) {
    return (
      <View style={styles.container2}>
        <Text style={styles.text2}>
          Fofocamos e julgamos até a sombra dos outros queridos, amo esses momentos com a diva. Quero que ela imite uma lagartixa dançante.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home') }style={[styles.button, styles.buttonRight]}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonLeft: {
    marginRight: 10,
  },
  buttonRight: {
    marginLeft: 10,
  },
  footer: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'left',
    padding: 10,
  },
  footerText: {
    color: '#fff',
  },

  
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text1: {
    fontSize: 18,
    textAlign: 'center',
  },


  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
  },
});

const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Amigoum" component={Amigoum} />
<Stack.Screen name="Amigodois" component={Amigodois} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;