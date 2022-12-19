import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DetailProduct} from './src/screens';

const Stack = createStackNavigator();

export default function App() {
 

  return (
    // <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
          {/*<Stack.Screen name="Conference" component={Conference} />
          <Stack.Screen name="Story" component={Story} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
