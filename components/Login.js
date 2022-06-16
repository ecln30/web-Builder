









import React, { useState } from 'react';
import { styles } from "../Style"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



export function Login({password,email, handleEmail, handlePassword}){
    return (
        <View style={styles.popup}>
        <TextInput
          value={email}
          onChangeText={handleEmail}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={handlePassword}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
     )
 
}


















































































































































