import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, Alert } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import homeImage from "../../../assets/shopping-bag.png";
import { USERNAME_DB_KEY } from "../../services/constants";
import { saveData } from "../../services/db";

export const HomeScreen = () => {
  const [username, setUsername] = useState("");

  const onClickContinue = async () => {
    if (username.length <= 3) {
      Alert.alert("Username deve conter mais do que 3 caracteres");
      return;
    }
    // salvar o username
    const result = await saveData(USERNAME_DB_KEY, username);
    if (result?.error) {
      Alert.alert("Erro ao salver username");
    }
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.homeImage} source={homeImage} />
      <Text style={styles.title}>
        Sua lista de supermercado mais fácil do que nunca
      </Text>
      <Text style={styles.subtitle}>
        Ajudamos você a organizar sua lista de compras de forma descomplicada.
      </Text>
      <Text style={styles.description}>
        Digite abaixo seu usuário para ter acesso a sua lista de compras:
      </Text>
      <Input
        value={username}
        onChangeText={setUsername}
        label="Username"
        placeholder="Ex: sevencoders"
        autoCapitalize="none"
      />
      <Button onClick={onClickContinue} marginTop={14} text="Avançar" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  homeImage: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    marginTop: 36,
    marginBottom: 14,
  },
});
