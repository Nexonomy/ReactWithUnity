import React from 'react';
import UnityView from '@azesmway/react-native-unity/src';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Unity from './Unity';

enum RootRoutes {
  HOME = 'Home',
  UNITY = 'Unity',
}

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button}
      onPress={() => {
          const pushAction = StackActions.push('Unity', {})

          navigation.dispatch(pushAction)
       }}
      >
        <Text style={styles.buttonText}>Go Unity</Text>
      </TouchableOpacity>
    </View>
  );
};

const UnityScreen = () => {
  return <UnityView style={styles.screen} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RootRoutes.HOME} component={HomeScreen} />
        <Stack.Screen name={RootRoutes.UNITY} component={Unity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
