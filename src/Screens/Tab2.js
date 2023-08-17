import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab2 = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Folders </Text>
        </View>
        <View style={styles.nameArrow}>
          <Text style={styles.headerText}>Name</Text>
          <Icon name="arrow-up" size={13} color="#8B8B8B" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Tab2

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    paddingHorizontal: 20
  },
  headerText: {
    color: '#8B8B8B',
    fontWeight: '600',
    fontSize: 12,
    paddingRight: 3
  },
  nameArrow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})