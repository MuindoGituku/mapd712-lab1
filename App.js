import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.details}>Muindo N Gituku</Text>
      <Text style={styles.details}>ID: 301372521</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:60,
    fontWeight:'bold',
    paddingBottom:40,
  },
  details:{
    fontSize:20,
    paddingBottom:5,
  }
});
