import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        async function loadInitialPosition() {
           const { granted } = await requestPermissionsAsync()

           if (granted) {
               const { coords } = await getCurrentPositionAsync({
                   enableHighAccuracy: true
               })

               const { latitude, longitude } = coords

               setCurrentRegion({
                   latitude,
                   longitude,
                   latitudeDelta: 0.04,
                   longitudeDelta: 0.04,
               })
            }
        }

        loadInitialPosition()
    }, [])

    if (!currentRegion) {
        return null
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -23.7614198, longitude: -53.3402552 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/47280581?s=460&v=4' }} />
            
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'henriquechsf' })
                } }>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Carlos Henrique</Text>
                        <Text style={styles.devBio}>Web Development Student</Text>
                        <Text style={styles.devTechs}>React, React-Native, Node</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>

        
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }
})

export default Main