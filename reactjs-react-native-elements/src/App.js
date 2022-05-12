import logo from './logo.svg';
import './App.css';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import { AirbnbRating } from "@rneui/themed";
import {View } from './components/view'
import { Chip } from '@rneui/themed';
import { Switch } from "@rneui/themed";

import {FlexRow, FlexCol} from './components/flex'

const theme = createTheme({
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
});

function App() {
  return (
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

      <View style={{padding: '10px'}}>
        <Button title="Hello World" titleStyle={{ color: 'pink' }} />
        <AirbnbRating />
        <Chip
          title="Pressable Icon Chip"
          icon={{
            name: 'close',
            type: 'font-awesome',
            size: 20,
            //color: colors.primary2,
          }}
          onPress={() => console.log('Icon chip was pressed!')}
          iconRight
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />

        <Switch
          value={false}
          //onValueChange={(value) => setChecked(value)}
        />

        <View bg-red p-2 m-10px br-10px bc-green bw-2px h-20pct>
          Styled View Test  
        </View>

        <FlexRow bg-yellow>
          <FlexCol fh-center bg-orange f-1>
            <View>A1</View>
            <View>A2</View>
          </FlexCol>
          <FlexRow f-1>
            <View f-1>B1</View>
            <View f-1>B2</View>
          </FlexRow>
        </FlexRow>

      </View>
    </ThemeProvider>
  );
}

export default App;
