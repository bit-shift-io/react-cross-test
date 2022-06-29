import logo from './logo.svg';
import './App.css';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import {createReduxModule, Provider} from 'hooks-for-redux'
import {FlexRow, FlexCol, View, Text} from './components'

import {Navigation} from './navigation'
import {Providers} from './providers'
import { useWindowDimensions } from 'react-native';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const theme = createTheme({
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
});

// https://reactnavigation.org/docs/web-support

function App() {
  const {width, height} = useWindowDimensions()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider theme={theme}>
            <style type="text/css">{`
              @font-face {
                font-family: 'MaterialIcons';
                src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
              }

              @font-face {
                font-family: 'FontAwesome';
                src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
              }
            `}</style>

          <View style={{
            width,
            height
          }}>
            <Providers>
              <Navigation/>
            </Providers>
          </View>

        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
