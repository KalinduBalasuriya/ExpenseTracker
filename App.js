import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AllExpenses from './components/Screens/AllExpenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#252591' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#17186d' },
          headerRight: () => {
            return <Text>+</Text>
          }
        }} >
          <Stack.Screen
            name='All Expenses'
            options={{ title: 'All Expenses' }}
            component={AllExpenses}
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
