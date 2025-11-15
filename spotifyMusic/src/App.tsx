
import { StatusBar,  useColorScheme,  } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Main from './Main';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Main/>
    </SafeAreaProvider>
  );
}

export default App;
