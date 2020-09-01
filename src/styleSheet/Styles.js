import {StyleSheet} from 'react-native'
export default StyleSheet.create(
    {
        touchButton:{
            backgroundColor: 'white',
            
           height:80,
            borderWidth: 0.5,
            elevation: 10,
            flexDirection: 'row',
            alignSelf:'center',
            alignItems: 'center',
            width:'98%',
            margin:1
        },
        flatImage:{
            height: '100%',
            width: '20%'
        },
        buttonText:{
            fontWeight: '100'
            , color: 'black'
        },
        container:{
            flexDirection:'row',
          justifyContent:'space-between',
          backgroundColor:'white',
          height:'50%',
          
        },
        image:{
            height: '100%',
             width: '20%',
             marginRight:10
        },
        imageBackGround:{
            margin: 25,
             height: '100%', 
             width: '100%',
            alignSelf:'center'
        },
        iconContainer:{
            backgroundColor: 'white',
          width: '100%',
          padding: 2
        },
        view:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin:5
        },containers: {
            flex: 1,
          },
          toolbar: {
            marginTop: 30,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
          },
          mediaPlayer: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'red',
          },
          itemSeparator:{  
            height: 1,  
            width: "100%",  
            backgroundColor: "#000",  
          },
          btn:{
            backgroundColor:'black',
            flex:1,
            elevation:10,
            height:250,
           
          },
          btnText:{
            fontSize:16,
            color:'white',
            alignSelf:'flex-start'
          },
          btonText:{
              fontSize:11,
              color:'white',
              alignSelf:'flex-start'
          },
          flatlst:{
              flexDirection:'row',
              justifyContent:'space-between'
          },
          titleView:{
              backgroundColor:'black',
          },
          sourceImage:{
              height:'80%',
              width:'100%'
          },
          Homebtn:{
            width:'50%',height:'100%'
          }
    }
)