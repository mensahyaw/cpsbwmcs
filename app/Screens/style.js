//import React from 'react';
import { StyleSheet,} from 'react-native';

const CanvasHeight = 350;
const CanvasWidth = 350;

const colors =  {
 primary: "#ffffff",
 secondry: "#12261b",
 highlevel: "#5682a7",
 click: "#e0edfc",
tertiary: "#ffffff",  
darkLight: "#9ca3af",
Red: "#ffffff",
Green: "#007b42",
Yellow: "#DD4D44",
};
 const styles = StyleSheet.create({
    bg:{
    flex:1,
    height:'100%',
    },
    
    container: {
        alignItems: 'center',
        padding: 10,
      },
    containerb: {
        alignItems: 'center',
      },
      newcontainer: {
        padding: 10,
      },
      logo:{
        width:'70%',
        height:200,
      },

      createlogo:{
        width:'70%',
        height:200,
        justifyContent:'center',
      },

      sectionTitle:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color: '#12261b',
        padding: 10,
      },
      loginTitle:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color: '#ffffff',
        padding: 5,
      },

      Titlehome:{
        fontSize: 16,
        fontWeight:'bold',
        textAlign:'justify',
        color: '#000042', 
      },
      TitleAbout:{
        fontSize: 26,
        fontWeight:'bold',
        textAlign:'center',
        color: '#007b42',
        padding: 10,
      },
      Thome:{
        fontSize: 16,
        fontWeight:'bold',
        //textAlign:'center',
        color: '#000042',
        paddingTop:30,
        paddingBottom:10,
      },
      homenew:{
        paddingBottom: 15,
        fontSize: 20,
      },
    StyledContainer: {
        flex: 1,
        padding: '10%',
        backgroupColor: colors.primary,
        paddingTop: 100,
        
        },
        InnerContainer: {
         flex: 1,
         width:'100%',
         alignItem: "center",
        },
        
        PageLogo:{
         width: 250,
         height:165,
        },
        PageTitle: {
        fontSize:16,
        TaxtAlign: "center",
        fontWeight: "bold",
       padding:10,
       color:colors.highlevel,    
        },
        SubTitle:{
            fontSize: 18,
            letterSpacing: 1,
            marginBottom:10,
            fontWeight:"bold",
            color: colors.tertiary,
            alignItem: 'center',
        },
        StyleForm:{
            backgroundColor:colors.primary,
          width:'90%',
          borderColor:colors.tertiary,
          borderWidth:1,
          borderRadius:10,
          padding: 10,
          marginVertical: 10,
        },
        Textinput:{
            color: colors.Green,
        },
        InputLebel:{
            color:colors.tertiary,
            fontSize: 13,
            textAlign: "left",
        },
        LeftIcon:{
            right: 15,
            top:10,
            position:"absolute",
            zIndex:1,
            color:'#007b42',
        },
    RightIcon:{
        position:"absolute" ,
        right:10, 
            //alignSelf: "flex-end",
        },
    StyleButton:{
        
          width:'90%',
          borderRadius:10,
          padding: 15,
          marginVertical: 10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          
    },
    StyleButton_PRIMARY:{
    backgroundColor:colors.Green,
    borderColor:'#ffffff',
    borderWidth:1,
    },
    StyleButton_TERTIARY:{

    },
    ButtonText:{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:16,
    },
    ButtonText_TERTIARY:{
        color:colors.Red,
    },
    ButtonText_SECONDARY:{
        color:colors.Yellow,
    },
    texts:{
        color:'#ffffff',
        width:'90%',
        padding:20,
    },
    link:{
        color:'#FDB075'
    },

    pass:{
        textAlign:'right',
        color:'#DD4D44',
    },
   
    homebanner:{
    width:'90%',
    height: 150,
    borderRadius: 10,
    padding: 10,
    borderWidth:1,
    borderColor:'#007b42',

    },
    homebannerc:{
      width:'90%',
      height: 300,
      borderRadius: 10,
      padding: 10,
      borderWidth:1,
      borderColor:'#007b42',
      marginRight:10,
      },

      homebanneradura:{
        width:'60%',
        height: 120,
        padding: 10,
        },
      homebannerlebo:{
          width:'100%',
          height: 200,
          padding: 10,
      marginTop:10,
      
          },


    homebannerb:{
        width:'95%',
        height: 180,
        borderRadius: 10,
        padding: 10,
        borderWidth:1,
        borderColor:'#007b42',
        backgroundColor:'#d0ead7'
    
        },
    homeneed:{
     alignItems:'center',
    },
    homeneeds:{
      alignItems:'center',
      flexDirection:'row',
     },
    cps:{
        flexDirection:'row',
    },
    cpss:{
      paddingBottom:'30%',
  },
    cpsai:{
        width:'30%',
        height: 90,
        margin: 5,
        alignItems:'center',
    
        },
        cpsabb:{
            width:'50%',
            flexDirection:'row',
            alignItems:'center',
           
        
            },
            cpsss:{
              height: 30,
              width:'20%',
              borderRadius: 3,
              borderWidth:1,
              borderColor:'#b4d13b',
              backgroundColor:'#007b42',
              alignItems:'center',
          
              },

            cpsme:{
        
                height: 85,
                width:'49%',
                borderRadius: 3,
                borderWidth:1,
                borderColor:'#b4d13b',
                backgroundColor:'#007b42',
                alignItems:'center',
                padding: 10,
                margin: 1,
            
                },
                cpsmen:{
        
                  height: 85,
                  width:'100%',
                  borderRadius: 3,
                  borderWidth:1,
                  borderColor:'#007b42',
                  backgroundColor:'#007b42',
                  alignItems:'center',
                  padding: 10,
                  margin: 1,
              
                  },
                  cpsmens:{
        
                    height: 85,
                    width:'200%',
                    borderRadius: 3,
                    borderWidth:1,
                    borderColor:'#007b42',
                    backgroundColor:'#007b42',
                    alignItems:'center',
                    padding: 10,
                    margin: 1,
                
                    },
    cpsa:{
        
        height: 70,
        borderRadius: 10,
        margin: 5,
        borderWidth:1,
        borderColor:'#b4d13b',
        backgroundColor:'#b4d13b',
        alignItems:'center',
        padding: 10,
    
        },
    cpsb:{
        
        height: 70,
        borderRadius: 10,
        margin: 5,
        borderWidth:1,
        borderColor:'#b0ac9f',
        backgroundColor:'#eaebdd',
        padding: 10,
        },
    cpsc:{
       
        height: 70,
        borderRadius: 10,
        margin: 5,
        borderWidth:1,
        borderColor:'#73a335',
        backgroundColor:'#73a335',
        padding: 10,
    
        },
        mycpsbutton:{
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold',
        },
        mycpsbuttons:{
          textAlign:'center',
          fontSize:12,
          fontWeight:'bold',
          color:'#ffffff',
          },
        mycpsimage:{
          color:'#ffffff',
          },
        foot:{
         width:50,
         height:50,
         marginLeft:'42%',
         backgroundColor:'#007b42',
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
        },
       
        footIcon:{
        color:'#ffffff',
        padding:10,
        },
        subscript: {
          fontSize: 8,
          position: 'relative',
          bottom: 5, 
        },

        sep:{
          width:'100%',
          height:1,
          backgroundColor:'#cccccc'
        },
        listheadme:{
          fontSize:21,
          fontWeight:'bold',
          color:'#007b42',
          textAlign:'center',
        },
        listheader:{
          height:55,
          width:'100%'
        },

        itemme:{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          paddingVertical:13,
        
        },
        avaterContaner:{
          backgroundColor:'#b4d13b',
          justifyContent:'center',
          borderRadius:100,
          height:72,
          width:72,
          alignContent:'center',
          padding:10,
          
        },
        avaterContaners:{
          backgroundColor:'#b0ac9f',
          justifyContent:'center',
          borderRadius:100,
          height:72,
          width:72,
          alignContent:'center',
          padding:10,
        },
        avaimage:{
          height:45,
          width:45,
        },
        listname:{
          fontWeight:'600',
          fontSize:16,
          marginLeft:13,
        },
        listok:{
          fontWeight:'600',
          marginLeft: 40,
        },

        canvas:{
          height: CanvasHeight,
          width: CanvasWidth,
        },
       
})

export default styles;