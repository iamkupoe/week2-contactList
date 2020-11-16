import React from 'react';
import { View , FlatList, Text, StyleSheet} from 'react-native';
import Contact from './components/Contact';


export default function ContactsScreen() {
  const contacts = [
    {name:"Pep Gadiola", number:"043-565-7665"},
    {name:"Cina Soul", number:"026-767-6851"},
    {name:"Paul Pogba", number:"098-785-4222"},
    {name:"Cabum Man", number:"020-111-4444"},
    {name:"John Benjamin ", number:"002-335-7722"},
    {name:"Kwame Asare Bediako", number:"020-050-3535"},
  ]
  return (
    <View>
      <FlatList 
        data={contacts}
        renderItem={({item})=>{
          return <Contact name={item.name} phone={item.number}/>
        }}
        keyExtractor={(item)=>item.number}
     />
     
    </View>
  );
}


 