import React from 'react';
import {View, FlatList} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import ListItem from "./ListItem";


class HistoryScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: false
        }
    }

    async componentDidMount() {
        let history = await this.getHistory();
        this.setState({history});
    }

    async getHistory() {
        return JSON.parse(await AsyncStorage.getItem('product'));
    }

    render() {
        const { history } = this.state;

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                    data={history}
                    renderItem={ ({item}) => <ListItem item={item} navigation={this.props.navigation} /> }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default HistoryScreen;