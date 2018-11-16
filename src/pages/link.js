import React from 'react';
import { WebView } from 'react-native';


const wikipedia = ({ navigation }) => (
    <WebView source={{uri: navigation.state.params.wikipedia.url}} /> 
);

wikipedia.navigationOptions = ({ navigation }) =>  ({ 
    title: navigation.state.params.wikipedia
}); 

export default wikipedia;