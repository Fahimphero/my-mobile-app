import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Countries from './components/Countries';
import Posts from './components/Posts';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <Countries></Countries> */}
      <Posts></Posts>
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
});
