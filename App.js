import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore"; 
import React, { useEffect, useState } from "react";
import { db } from './components/config'

export default function App() {

  // Je transmet les données dans cette fonction

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

// Je creér une fontion pour soumettre mes données


//********************** */
// CREATE
//********************** */

// function create() {

//   addDoc(collection(db, "users"), {
//     username: username,
//     email: email,
//   }).then(() => {
//     // Si ca marche
//     console.log('data submitted');

//   }).catch((error) => {
//     // Si ca échoue..
//     console.log(error);
//   });;
// }
//*********************** */
// UPDATE
//********************** */

// function create() {

//   updateDoc(doc(db, "users", "LA"), {
//     username: username,
//     email: email,
//   }).then(() => {
//     // Si ca marche
//     console.log('data submitted');

//   }).catch((error) => {
//     // Si ca échoue..
//     console.log(error);
//   });;
// }


//*********************** */
// DELETE
//********************** */

function create() {
  deleteDoc(doc(db, "users", 'LA'));
}


  return (
    <View style={styles.container}>
      <Text>Firestor CRUD </Text>

<TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder='username' styles={styles.textBoxes}></TextInput>
<TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder='Email' styles={styles.textBoxes}></TextInput>

<button onClick={create}>Submit Data</button>
    </View>
    // Au clique j'appelle ma fonction Create
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
width: '90%',
fontSize: 18,
padding: 12,
borderColor: 'gray',
borderWidth: 0.2,
borderRadius: 10
  },
});
