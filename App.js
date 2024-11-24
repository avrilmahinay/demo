import { StyleSheet, Text, View } from 'react-native';
import Login from './.expo/components/pages/loginPage/login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

    export default function App() {
      return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Login />
          </SafeAreaView>
        </SafeAreaProvider>
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
