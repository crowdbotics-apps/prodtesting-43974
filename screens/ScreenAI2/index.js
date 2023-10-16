import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <Button title="Save" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default LoginScreen;