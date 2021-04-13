import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Home.styles";

export default function Home() {
  //stato del componente
  const [titolo, setTitolo] = useState("Primo valore dello stato");

  //definizione di una funzione
  const funzione = () => {
    if (titolo == "Primo valore dello stato") {
      setTitolo("Nuovo titolo");
    } else {
      setTitolo("Primo valore dello stato");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.green}>
        <Text style={styles.text}>{titolo}</Text>
      </View>
      <TouchableOpacity onPress={funzione}>
        <Text>Cambia titolo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
