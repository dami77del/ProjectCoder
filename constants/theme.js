import { Dimensions } from "react-native";


const {width, height} = Dimensions.get('screen');

COLOR,SIZES,COLORBTN,CONTAINER,TITLE,DESCRIPTION, BTN,TEXTBTNTRANS,TEXTBTN

export const COLOR = {
    primary:'#f52d56',
    title:'#072f4a',
}
export const SIZES ={
    h1:'22',
    h2:20,
    h3:18,
    h4:16,
    h5:14,
    h6:12,
    width,
    height,
}
export const COLORBTN = {
    primary:"#6115C8",
    title:'white',
}
export const COLORTEXTBTN = {
    primary:"#FFFFFF",
    secundary:'#6115C8'
}

export const CONTAINER= {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  }
  export const TITLE= {
    fontWeight: 'bold', color: COLOR.title, fontSize: SIZES.h1,
  }
  export const DESCRIPTION= {
    fontSize: SIZES.h3,
    textAlign: 'center',
    margin:15,
    color: '#072f4a',
    marginBottom:150,
    alignItems:"center",
  }
  export const BTN ={
    height:55,
    borderRadius:5,
    backgroundColor:"#6115C8",
    paddingHorizontal: 50,
    paddingTop: 5,
    justifyContent:'center', 
    alignItems:"center",
  }
  export const TEXTBTNTRANS={
    color: '#6115C8',
    textAlign: 'center',
    justifyContent:'center', 
    fontWeight:"bold",
    fontSize:15
  }
  export const TEXTBTN={
    color: '#FFFFFF',
    fontWeight:"bold",
    fontSize:15
  }