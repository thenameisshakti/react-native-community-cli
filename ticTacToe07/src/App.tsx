import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Main from './Main';

function App() {

  return (
    <SafeAreaProvider>
      <Main/>
    </SafeAreaProvider>
  );
}

export default App;
