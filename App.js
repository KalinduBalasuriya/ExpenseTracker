import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './Screens/ManageExpense';
import RecentExpenses from './Screens/RecentExpenses';
import AllExpenses from './Screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './UI/IconButton';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator screenOptions={({ navigation }) => {
    return {
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor, }) => (<IconButton
        icon="add"
        size={24}
        color={tintColor}
        onPress={() => { navigation.navigate('ManageExpense') }} />
      )
    }
  }} >
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title: 'Recent Expences',
      tabBarLabel: 'Recent',
      //  tabBarIcon: ({color, size})=>{
      //  <Ionicons name="ios-add-circle" size={24} color={'white'} />
      //   }
    }} />
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
      title: 'All Expences',
      tabBarLabel: 'All',
      // tabBarIcon: ({color, size})=>{
      //     <Ionicons name='calendar' size={size} color={color} />
      // }
    }} />

  </BottomTabs.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: 'white',
        }
        }
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}




