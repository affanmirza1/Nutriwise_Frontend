

import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import profileImage from '../../assets/profileImg.png'
import arrowRight from '../../assets/chevron-down-rt.png'
import searchBtn from '../../assets/search.png'
import MedicalCard from './medicalDetails';

const MedicalRecords = ({ navigation }) => {
    const [search, setSearch] = useState()



    return (

        <>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CameraAction')}>
                    <Text
                        style={{
                            backgroundColor: '#11B3CF',
                            width: 160,
                            textAlign : 'center',
                            marginLeft : 'auto',
                            padding : 8,
                            borderRadius : 8,
                            color : 'white',
                            fontWeight : '600'
                        }}
                    >
                        Calculate Nutrient
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.sw_heading}>Switch Profile</Text>
                </View>

                <TouchableOpacity >
                    <View style={userProfileStyles.profileContainer}>
                        {/* <Image source={profileImage} style={userProfileStyles.profilePicture} /> */}
                        <View style={userProfileStyles.userInfo}>
                            <Text style={userProfileStyles.userName}>Affan Mirza</Text>
                            <Text style={userProfileStyles.userAge}>Age 23</Text>
                        </View>

                        <View style={userProfileStyles.arrow_rt}>
                            <Image source={arrowRight} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={searchStyles.input_wrapper}>
                    <TextInput
                        style={searchStyles.input}
                        placeholder="Search Your Report"
                        onChangeText={(text) => setSearch(text)}
                        keyboardType="email-address"
                    />
                    <TouchableOpacity style={searchStyles.button}>
                        <Image source={searchBtn} />
                    </TouchableOpacity>
                </View>
                <MedicalCard />
            </ScrollView>



        </>

    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    sw_heading: {
        textAlign: 'left',
        marginTop: 30,
        color: '#0B8AA0',
        fontWeight: '700',
        fontSize: 16
    },
});

const userProfileStyles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#11B3CF0D',
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 15
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    userInfo: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    userAge: {
        fontSize: 14,
        fontWeight: '400'
    },
    arrow_rt: {
        position: 'absolute',
        right: 15
    }
})

const searchStyles = StyleSheet.create({
    input_wrapper: {
        marginTop: 20
    },


    input: {
        width: 'auto',
        padding: 15,
        backgroundColor: '#11B3CF33',
        borderRadius: 25
    },

    button: {
        position: 'absolute',
        right: 10,
        top: 0,
        padding: 20
    }
})


export default MedicalRecords;