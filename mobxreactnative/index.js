/**
 * 
 * Routing  
 * @author Shashank Srivastava
 * 
 */

import { createStackNavigator,createAppContainer } from 'react-navigation';

// import List from'./Containers/List';
import Home from './components/HomeComponent';
// import HomeComponent from './components/HomeComponent'
// import ListComponent from './src/Components/ListComponent'



const  MyApp = createStackNavigator({
  Home: {
    screen: Home
  }
});   



export default createAppContainer(MyApp);  