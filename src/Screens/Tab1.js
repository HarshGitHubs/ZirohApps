import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab1 = () => {

    const data = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Folders and Files Drive</Text>
                </View>
                <View style={styles.nameArrow}>
                    <Text style={styles.headerText}>Name</Text>
                    <Icon name="arrow-up" size={13} color="#8B8B8B" />
                </View>
            </View>
            <ScrollView style={{ backgroundColor: 'white' }}>
                {data.map(item => (
                    <View style={styles.container} key={item}>
                        <View style={styles.imageContainer}>
                            <View>
                                <Image
                                    style={{ height: 35, width: 35 }}
                                    source={require('../assets/logo.png')}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.imageText}>Image {item}</Text>
                            </View>
                        </View>
                        <View style={styles.lockContainer}>
                            <View>
                                <Icon name="lock-open" size={15} color="#61DD00" />
                            </View>
                            <View>
                                <Icon
                                    name="ellipsis-v"
                                    size={25}
                                    color="#8B8B8B"
                                    style={{paddingLeft:15}} />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tab1

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
        paddingRight: 20
    },
    container: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        marginBottom: 2
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "50%",
        paddingRight: 25,
    },
    imageText: {
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 20,
        fontWeight: '400'
    },
    nameArrow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 25,
        width: "50%",
    }
})