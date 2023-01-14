import React from 'react';
import {TouchableOpacity,  Text} from 'react-native';
import Colors from './Colors';
const MyButton = props => {
  return (
  
      <TouchableOpacity
        style={[{
          backgroundColor: '#D30000',
          width: '50%',
          alignSelf:"center",
          justifyContent: 'center',
          alignItems:"center",
          borderRadius: 8,
          height:40,
          marginTop: 20,
        },props.buttonstyle]}
        onPress={props.onPress}>
        <Text style={{textAlign: 'center',color:Colors.white, fontSize:18, fontWeight:"600"}} {...props.disabled}>{props.titlebutton}</Text>
      </TouchableOpacity>
  
  );
};
export default MyButton;
