import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './Screens/ManageExpense';
import RecentExpenses from './Screens/RecentExpenses';
import AllExpenses from './Screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){
  return <BottomTabs.Navigator screenOptions={{
    headerStyle: {backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor : 'white',
    tabBarStyle: {backgroundColor : GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight:({tintColor})=>{
      return <IconButton icon ="add" size={24} color={tintColor}  onPress={()=>{}}/>
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
      <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name = "ExpensesOverview" component={ExpensesOverview} options={{headerShown:false}}/>
        <Stack.Screen name = "ManageExpense" component={ManageExpense} />
       </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}




