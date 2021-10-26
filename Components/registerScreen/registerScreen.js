import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class RegisterScreen extends Component {

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
    <ScrollView data-layer="0df3355f-a335-4935-91de-6975e6bc8087" style={styles.registerScreen}>
        <View data-layer="30ce3da8-3fce-4cda-b7b5-b261a90976d4" style={styles.registerScreen_rectangle31}></View>
        <View data-layer="37c6ec5d-880b-433a-862e-2a1aff0d68be" style={styles.registerScreen_rectangle32}></View>
        <View data-layer="7ca1a4b2-7ab6-446d-adbf-b3eb00cb2132" style={styles.registerScreen_rectangle33}></View>
        <ReactImage data-layer="4df40bbf-edb0-4b54-b770-3e69cb924283" source={require('./assets/shopanywhereWhiteLogo300x300.png')} style={styles.registerScreen_shopanywhereWhiteLogo300x300} />
        <View data-layer="41595140-db36-4663-80fc-93d215c69bcc" style={styles.registerScreen_rectangle34}></View>
        <View data-layer="15ecc003-7efd-48aa-8603-87c4ebf93522" style={styles.registerScreen_rectangle219056688}></View>
        <View data-layer="b9b35d75-030f-49c5-841b-dce5f3d1f901" style={styles.registerScreen_rectangle2186b1118}></View>
        <View data-layer="445bda0c-dc99-4088-9278-ecfb2e4bfa4a" style={styles.registerScreen_rectangle2}></View>
        <Text data-layer="22c49ad5-fe95-4594-847b-1cf7c20b7a78" style={styles.registerScreen_firstName}>First Name</Text>
        <Text data-layer="1dfda5ed-0d74-447d-b70d-22a33e2ccc93" style={styles.registerScreen_lastName}>Last Name</Text>
        <Text data-layer="ee60aabe-af9e-4c34-b2ff-4e693ce8bdb8" style={styles.registerScreen_email}>Email</Text>
        <Text data-layer="4744d013-8140-49fb-b5c7-060644c6ec0a" style={styles.registerScreen_password}>Password</Text>
        <ReactImage data-layer="841fd462-65cd-4a20-bd7b-0eebe75bf2e3" source={require('./assets/x538642a114f00f.png')} style={styles.registerScreen_x538642a114f00f} />
        <ReactImage data-layer="2932f5eb-61ff-42da-88d8-6119ff7037dc" source={require('./assets/x538642.png')} style={styles.registerScreen_x538642} />
        <ReactImage data-layer="3b6e6afe-6ec2-40b5-ad48-e6dfecbc4f83" source={require('./assets/download.png')} style={styles.registerScreen_download} />
        <ReactImage data-layer="07476366-c4e8-4c2c-b8bb-d0f98385a13c" source={require('./assets/download1.png')} style={styles.registerScreen_download1} />
        <View data-layer="d8a8ce69-d569-4bc5-a41a-b104d9a01cad" style={styles.registerScreen_rectangle35}></View>
        <Text data-layer="b19304e7-1705-44e3-8a55-6f93cb987e26" style={styles.registerScreen_cancel}>CAncel</Text>
        <Text data-layer="e962f79f-6674-49f4-9368-181cc140e74f" style={styles.registerScreen_register}>Register</Text>
    </ScrollView>
    );
  }
}

RegisterScreen.propTypes = {

}

RegisterScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "registerScreen": {
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
  "registerScreen_rectangle31": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(239, 239, 239, 1)",
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
  "registerScreen_rectangle32": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 17,
    "top": 250
  },
  "registerScreen_rectangle33": {
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
    "borderTopLeftRadius": 38,
    "borderTopRightRadius": 38,
    "borderBottomLeftRadius": 38,
    "borderBottomRightRadius": 38,
    "width": 181,
    "height": 160,
    "left": 116,
    "top": 27
  },
  "registerScreen_shopanywhereWhiteLogo300x300": {
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
    "width": 150,
    "height": 150,
    "left": 132,
    "top": 32
  },
  "registerScreen_rectangle34": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 17,
    "top": 335
  },
  "registerScreen_rectangle219056688": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 17,
    "top": 420
  },
  "registerScreen_rectangle2186b1118": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 17,
    "top": 516
  },
  "registerScreen_rectangle2": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 14,
    "top": 741
  },
  "registerScreen_firstName": {
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
    "width": 114,
    "height": 39,
    "left": 93,
    "top": 262.5
  },
  "registerScreen_lastName": {
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
    "width": 112,
    "height": 39,
    "left": 95,
    "top": 347.5
  },
  "registerScreen_email": {
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
    "width": 56,
    "height": 39,
    "left": 95,
    "top": 432.5
  },
  "registerScreen_password": {
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
    "width": 100,
    "height": 39,
    "left": 93,
    "top": 528.5
  },
  "registerScreen_x538642a114f00f": {
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
    "width": 38,
    "height": 38,
    "left": 30,
    "top": 256
  },
  "registerScreen_x538642": {
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
    "width": 38,
    "height": 38,
    "left": 30,
    "top": 341
  },
  "registerScreen_download": {
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
    "width": 35,
    "height": 36,
    "left": 33,
    "top": 430
  },
  "registerScreen_download1": {
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
    "width": 37,
    "height": 39,
    "left": 31,
    "top": 528
  },
  "registerScreen_rectangle35": {
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
    "borderTopLeftRadius": 92,
    "borderTopRightRadius": 92,
    "borderBottomLeftRadius": 92,
    "borderBottomRightRadius": 92,
    "width": 359,
    "height": 55,
    "left": 14,
    "top": 645
  },
  "registerScreen_cancel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 26,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 33,
    "left": 157,
    "top": 754.5
  },
  "registerScreen_register": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 26,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 84,
    "height": 33,
    "left": 152,
    "top": 659.5
  }
});