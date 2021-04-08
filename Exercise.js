import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "./Home.styles";

export default function Exercise() {
  const [nome, onChangeNome] = useState("");
  const [cognome, onChangeCognome] = useState("");

  const handleSubmit = () => {
    console.log(input);
    alert(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeNome}
        value={nome}
        style={styles.textInput}
        placeholder={"PROVA"}
      />
      <TextInput
        onChangeText={onChangeCognome}
        value={cognome}
        style={styles.textInput}
        placeholder={"PROVA"}
      />
      <Button onPress={handleSubmit} title={"SUBMIT"}></Button>
    </View>
  );
}
