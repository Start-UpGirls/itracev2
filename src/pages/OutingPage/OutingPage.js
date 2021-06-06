import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, ImageBackground } from "react-native";

const supportedURL = "https://forms.gle/4ppofR73xXx5AsLx5";

const unsupportedURL = "https://forms.gle/ZNCRVoLgdsJTqX458";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../../assets/background1.jpeg')} style={styles.image}>
      <OpenURLButton url={supportedURL}> MCO Outing Form</OpenURLButton><br></br>
      <OpenURLButton url={unsupportedURL}>Weekly Outing</OpenURLButton>
      </ImageBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#D2E4D2' },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: 450,
    height: 820,
    justifyContent: "center"
  },
})
export default App;