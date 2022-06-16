













import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
      },
      
      img:{
        width: 250,
        height: 250,
        marginTop: 10,
        borderRadius: 10
      },

      title: {
         fontSize: 20,
      },

      question: {
         fontSize: 20,
         marginTop: 15
      },
    
      auth: {
         flex: 1,
         width: 150,
         height: 50,
         flexDirection: "row",
         marginTop: 50,
         marginLeft: 250,
      },

      login: {
         width: 50,
         height: 20,
         marginRight: 10,
         borderRadius: 10,
         borderWidth: 1,
         borderColor: "gray",
         textAlign: "center"
      },

      signup: {
        width: 70,
        height: 20,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        textAlign: "center"
      },
     
      popup: {
         width: 100,
         height: 100,
         borderWidth: 1,
         borderColor: "red",
         flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },

      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },

       
});

export { styles }











































