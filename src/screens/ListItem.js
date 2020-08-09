import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Avatar, Card } from 'react-native-paper';

export default function ListItem ({item})
{
    const navigation = useNavigation();

    const goTo = (item) =>{
        navigation.navigate('Product',
            {
                item: item
            })
    }

    const image = props => <Avatar.Image source={{ uri: item.image_thumb_url }} />

    return (
        <View>
            <TouchableOpacity
                onPress={() => goTo(item)}
            >

                <Card style={{margin: 5}}>

                    <Card.Title title={'    ' + item.product_name_fr} subtitle={item.brands_tags != undefined ? '      ' + item.brands_tags : ''} left={image} />
                    <Card.Content>
                        <Text style={styles.line}></Text>
                    </Card.Content>


                </Card>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    line:{
        width: 300,
        height: 1
    }

})