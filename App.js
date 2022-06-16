import { StatusBar } from 'expo-status-bar';
import { styles } from "./Style";
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"
import React, { useState } from "react"
import { Text, View, ScrollView, Image} from 'react-native';

export default function App() {

   const {email, setEmail} = useState('')
   const {password, setPassword } = useState("")
    
   function login() {
    console.log("Hello")
     return 
          <Login email={email} password={password}  />
   }

  return (
    <ScrollView>

       <View style={styles.container}>
         <View style={styles.auth}>
           <Text 
           onPress={login}
           style={styles.login}>Login</Text>
           <Text
            onPress={SignUp}
            style={styles.signup}>Sign Up</Text>
         </View>
         <Text style={styles.title}>I'm web builder</Text>
         <Image
         style={styles.img}
         source={{uri: "https://www.tisindia.com/blog/wp-content/uploads/2015/09/Web-Development-Steps-1200x675.jpg"}}
         
         ></Image>
         <Text style={styles.question}>what can i do for you</Text>  

         <Image 
         style={styles.img}
         source={{uri: ("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80")}}>

         </Image>
         <Image
          style={styles.img}
          source={{uri:"https://media.istockphoto.com/photos/office-responsive-devices-web-design-website-picture-id1201166649?k=20&m=1201166649&s=612x612&w=0&h=oLpzLwZhmRe9mFObnylKkE-xJbyYesh8l0Zxucb03gM="}}
         >
         </Image>
       </View>
       <StatusBar style="auto" />
    </ScrollView>
  );
}

