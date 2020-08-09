import React from 'react';
import { View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

export default function ProductScreen({ route }) {

    const {product_name_fr, image_front_url, brands_tags, quantity, ingredients_text_fr} = route.params.item;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: 350 }}>
                <Card.Content>
                    <Title>{product_name_fr}</Title>
                    <Paragraph style={{ marginBottom: 10 }}>{brands_tags != undefined ? brands_tags : ''}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: image_front_url }} />
                <Card.Content>
                    <Paragraph style={{ marginTop: 10 }} >{quantity != undefined ? quantity : ''}</Paragraph>
                    <Paragraph >{ingredients_text_fr != undefined ? ingredients_text_fr : ''}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}