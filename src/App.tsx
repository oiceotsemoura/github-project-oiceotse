import React from 'react';
import {Navigator} from './navigator';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '@store/index';
import {theme} from './theme';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
