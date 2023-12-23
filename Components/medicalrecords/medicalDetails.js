import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';



const MedicalCard = () => {


    useEffect(() => {

        const medRec = async () => {
            const email = await AsyncStorage.getItem('email')

            try {
                const response = await fetch(`http://192.168.0.100:5000/get_medical_records?email=${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add other headers if needed
                    },
                });

                const data = await response.json();
                console.log(data);

            } catch (error) {
                console.error(error);
            }

        }

        medRec()

    }, [])





    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={cardStyle.card}>
                    <View style={cardStyle.headerWrapper} >
                        <View style={cardStyle.header}>
                            <Text style={cardStyle.headerText}>Monday ,27 March 2023 </Text>
                            <Text style={cardStyle.spanText}>Healthy Family Center</Text>
                        </View>
                        <TouchableOpacity style={cardStyle.deleteBtn}>
                            <Text style={cardStyle.deleteBtn}>
                                Delete Record
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={cardStyle.disease}>
                        <Text style={cardStyle.cardText}>
                            Diagnoses
                        </Text>
                        <TouchableOpacity style={cardStyle.addBtn}>
                            <Text style={cardStyle.cardText && {
                                color: 'white',
                                fontSize: 12,
                                padding: 9,
                                backgroundColor: '#11B3CF',
                                borderRadius: 15
                            }}>
                                Add Diagnoses
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={cardStyle.disease}>
                        <Text style={{color :'black'}}>
                            Total Record
                        </Text>
                        <Text style={{textAlign : 'center'}}>
                            3
                        </Text>
                    </View>

                    <View style={cardStyle.disease}>
                        <Text style={{color :'black'}}>
                            Cancer
                        </Text>
                        <Text style={{textAlign : 'center'}}>
                            No
                        </Text>
                    </View>

                    <View style={cardStyle.disease}>
                        <Text style={{color :'black'}}>
                            Diabetes
                        </Text>
                        <Text style={{textAlign : 'center'}}>
                            Mild
                        </Text>
                    </View>

                    <View style={cardStyle.disease}>
                        <Text style={{color :'black'}}>
                            Back Pain
                        </Text>
                        <Text style={{textAlign : 'center'}}>
                            No
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )


}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexGrow: 1,
        backgroundColor: '#fff',
    },
});

const cardStyle = StyleSheet.create({
    card: {
        backgroundColor: '#11B3CF33',
        padding: 20,
        borderRadius: 15

    },

    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },



    headerText: {
        fontWeight: '600',
    },

    spanText: {
        fontWeight: '400',
        fontSize: 12,
    },

    deleteBtn: {
        color: '#FF0000',
        fontSize: 12,
        fontWeight: '500'
    },

    disease: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cardText: {
        color: '#106293'
    }
})

export default MedicalCard;