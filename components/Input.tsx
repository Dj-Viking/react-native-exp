import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, ButtonProps, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';


const Input: React.FC <{}> = () => {
  const [ inputText, setText ] = useState("ksdjfkdjf");

  function textChanged(event: any) {
    return setText(event.target.value)
  } 
  const inputStyles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      color: "white",
      borderWidth: 1,
      padding: 10,
    },
  });
  return (
    <>
      <TextInput 
        value={inputText} 
        onChange={textChanged} 
        style={inputStyles.input} 
        keyboardType="default" 
      />
    </>
  )
}

export default Input;