import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsScreen from './ContactsScreen';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      phone:""
    }
    
  }
  render(){
    return (
      <View style={styles.container}>
         <ContactsScreen/>
      </View>
    );
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:80,
    marginHorizontal:20
  },
});
