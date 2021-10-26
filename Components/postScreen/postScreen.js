import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class PostScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="775dd3cb-4110-405d-bbfa-dbf74ecec51c" style={styles.postScreen}>
        <View data-layer="3981b125-3920-400c-ba53-f911020be540" style={styles.postScreen_rectangle18}></View>
        <View data-layer="9d3724d4-f3fa-44e0-a1c9-e08b7f8c617a" style={styles.postScreen_rectangle19}></View>
        <ReactImage data-layer="6e52a167-5899-4a7e-97da-e6045a213600" source={require('./assets/x42CarPngHd.png')} style={styles.postScreen_x42CarPngHd} />
        <Text data-layer="f2bec91c-fde1-44d5-9395-eb56a895fbd8" style={styles.postScreen_benzCarModel6InNewCondition}>Benz Car Model 6 in new condition</Text>
        <Text data-layer="38574fcc-eb23-4137-8949-2c6d3b585627" style={styles.postScreen_x12000}>12, 000$</Text>
        <View data-layer="4a7a8e01-8e8f-408d-b83d-61ea76e99f5a" style={styles.postScreen_rectangle20}></View>
        <Text data-layer="1d7f9406-5df1-4ea3-86ab-3f535043a605" style={styles.postScreen_ahmadAbid}>Ahmad Abid</Text>
        <Text data-layer="75be66ca-7fb1-4751-b999-c2233a9d58a5" style={styles.postScreen_x5Listings}>5 Listing(s)</Text>
        <ReactImage data-layer="22e41618-a757-4a82-ae03-8d3d08427fef" source={require('./assets/download.png')} style={styles.postScreen_download} />
        <View data-layer="0d74b266-c4b2-40da-b591-84562409f046" style={styles.postScreen_rectangle21}></View>
        <Text data-layer="9b5e6deb-1693-4ec4-afe8-018b561cdf8d" style={styles.postScreen_isThisAvailable}>Is this available?</Text>
        <View data-layer="c6f0e765-8835-40ac-9112-978b26486306" style={styles.postScreen_rectangle22}></View>
        <Text data-layer="89cf5dfb-592d-49e7-abbe-c591b7ef2c65" style={styles.postScreen_contactSeller}>Contact Seller</Text>
        <ReactImage data-layer="83a162e5-bae2-4320-8843-7553a8bfcca4" source={require('./assets/x12.png')} style={styles.postScreen_x12} />
    </ScrollView>
    );
  }
}

PostScreen.propTypes = {

}

PostScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "postScreen": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 896,
    "left": 0,
    "top": 0
  },
  "postScreen_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(242, 242, 242, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 414,
    "height": 896,
    "left": 0,
    "top": 0
  },
  "postScreen_rectangle19": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 414,
    "height": 273,
    "left": 0,
    "top": 0
  },
  "postScreen_x42CarPngHd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 387,
    "height": 290,
    "left": 14,
    "top": 0
  },
  "postScreen_benzCarModel6InNewCondition": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 370,
    "height": 39,
    "left": 22,
    "top": 290.5
  },
  "postScreen_x12000": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 33,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 43,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 122,
    "height": 54,
    "left": 22,
    "top": 331
  },
  "postScreen_rectangle20": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 45,
    "borderTopRightRadius": 45,
    "borderBottomLeftRadius": 45,
    "borderBottomRightRadius": 45,
    "width": 85,
    "height": 79,
    "left": 22,
    "top": 418
  },
  "postScreen_ahmadAbid": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 132,
    "height": 39,
    "left": 116,
    "top": 426.5
  },
  "postScreen_x5Listings": {
    "opacity": 0.5600000023841858,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 114,
    "height": 39,
    "left": 116,
    "top": 458.5
  },
  "postScreen_download": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 76,
    "borderTopRightRadius": 76,
    "borderBottomLeftRadius": 76,
    "borderBottomRightRadius": 76,
    "width": 70,
    "height": 47,
    "left": 30,
    "top": 435
  },
  "postScreen_rectangle21": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(231, 221, 221, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50,
    "width": 362,
    "height": 61,
    "left": 26,
    "top": 520
  },
  "postScreen_isThisAvailable": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 170,
    "height": 39,
    "left": 60,
    "top": 534.5
  },
  "postScreen_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(102, 56, 228, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 35,
    "borderTopRightRadius": 35,
    "borderBottomLeftRadius": 35,
    "borderBottomRightRadius": 35,
    "width": 366,
    "height": 56,
    "left": 22,
    "top": 611
  },
  "postScreen_contactSeller": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 146,
    "height": 39,
    "left": 134,
    "top": 623.5
  },
  "postScreen_x12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 414,
    "height": 303,
    "left": 0,
    "top": 667
  }
});