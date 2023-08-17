import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab5 from './Tab5';
import Tab4 from './Tab4';
import Tab3 from './Tab3';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Tab 1"
                    component={Tab1}
                    options={{
                        headerStyle: {
                            backgroundColor: '#33B5EF',
                        },
                        tabBarIcon: ({ tintColor }) => (
                            <FontAwesome6 name="hard-drive" size={20} color='#8B8B8B' />
                        ),
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight:()=>(
                            <View>
                                <Icon 
                                    name="search" 
                                    size={20} 
                                    color='white' 
                                    style={{paddingRight:20}}
                                    />
                            </View>
                        )
                    }} />
                <Tab.Screen
                    name="Tab 2"
                    component={Tab2}
                    options={{
                        headerStyle: {
                            backgroundColor: '#33B5EF',
                        },
                        headerRight:()=>(
                            <View>
                                <Icon 
                                    name="search" 
                                    size={20} 
                                    color='white' 
                                    style={{paddingRight:20}}
                                    />
                            </View>
                        ),
                        tabBarIcon: ({ tintColor }) => (
                            <Fontisto name="photograph" size={20} color='#8B8B8B' />
                        ),
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Tab.Screen
                    name="Tab 3"
                    component={Tab3}
                    options={{
                        headerStyle: {
                            backgroundColor: '#33B5EF',
                        },
                        tabBarIcon: ({ tintColor }) => (
                            <MaterialCommunityIcons name="file-document-multiple" size={20} color='#8B8B8B'/>
                        ),
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Tab.Screen
                    name="Tab 4"
                    component={Tab4}
                    options={{
                        headerStyle: {
                            backgroundColor: '#33B5EF',
                        },
                        tabBarIcon: ({ tintColor }) => (
                            <MaterialIcons name="video-library" size={20} color='#8B8B8B' />
                        ),
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Tab.Screen
                    name="Tab 5"
                    component={Tab5}
                    options={{
                        headerStyle: {
                            backgroundColor: '#33B5EF',
                        },
                        tabBarIcon: ({ tintColor }) => (
                            <MaterialIcons name="groups" size={30} color='#8B8B8B'/>
                        ),
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})