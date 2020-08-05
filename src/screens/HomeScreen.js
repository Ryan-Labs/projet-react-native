import React from 'react';
import {Text, View, FlatList} from "react-native";

const ListItem = ({ item }) => (
    <View>
        <Text> {item.product_name_fr} </Text>
    </View>
);


class HomeScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            DATA: false
        }
    }

    componentDidMount(){
        return fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    DATA: json.products
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>New screen</Text>
                <FlatList
                    data={this.state.DATA}
                    renderItem={ ({item}) => <ListItem item={item} /> }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default HomeScreen