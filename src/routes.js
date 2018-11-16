import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Wikipedia from './pages/link';
export default createStackNavigator({
    Main,
    Wikipedia
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        },
});