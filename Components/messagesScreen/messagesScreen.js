import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class MessagesScreen extends Component {

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
    <ScrollView data-layer="5c6e53f1-5367-40b6-8768-f95933b42c75" style={styles.messagesScreen}>
        <View data-layer="37c2fe7b-4286-486e-b36f-e8778807d91a" style={styles.messagesScreen_rectangle30}></View>
        <Text data-layer="bc6ba4c6-4006-4eb0-b7a3-caf6cd15a520" style={styles.messagesScreen_messages}>Messages</Text>
        <Svg data-layer="2af16493-7810-4b36-96e2-510315ecd47e" style={styles.messagesScreen_line2} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 371.0029296875 2" fill="transparent"><SvgPath d="M 0 1 L 371 0"  /></Svg>
        <Text data-layer="aba03e55-4723-48d2-90d9-f101488963ec" style={styles.messagesScreen_account}>Account</Text>
        <ReactImage data-layer="9bd347cb-bf1f-435d-b8f4-8516c2aa576c" source={require('./assets/x3273275608clipRoyaltyFreeDownloadArrowsUiLeftIconBlueTransparentArrowLeft.png')} style={styles.messagesScreen_x3273275608clipRoyaltyFreeDownloadArrowsUiLeftIconBlueTransparentArrowLeft} />
        <Svg data-layer="b4dbc915-c849-4843-8efb-f8016e0c35ce" style={styles.messagesScreen_line3} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 371.0029296875 2" fill="transparent"><SvgPath d="M 0 1 L 371 0"  /></Svg>
        <Svg data-layer="62293f47-c58c-44cf-bb59-ac71c4ebfb01" style={styles.messagesScreen_line4} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 371.0029296875 2" fill="transparent"><SvgPath d="M 0 1 L 371 0"  /></Svg>
        <Svg data-layer="85081518-5c9f-47eb-87ad-31f80d3dead4" style={styles.messagesScreen_line5} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 371.0029296875 2" fill="transparent"><SvgPath d="M 0 1 L 371 0"  /></Svg>
        <Text data-layer="cc63098c-f471-443b-bcfd-1be3b87aa9db" style={styles.messagesScreen_jawad}>Jawad</Text>
        <Text data-layer="0fdfc09c-ccfb-4ef0-a9ca-00b525fce152" style={styles.messagesScreen_kamram}>Kamram</Text>
        <Text data-layer="f791ac28-2ecf-4cda-811f-4cd64ae5ae23" style={styles.messagesScreen_ahmad}>Ahmad</Text>
        <Text data-layer="37f284ea-47d5-4ba9-8f8d-24e2224d3588" style={styles.messagesScreen_isThisAvailable30d93282}>Is this available?</Text>
        <Text data-layer="9946030e-63a7-4f1d-9abb-5065c4cf6ba2" style={styles.messagesScreen_isThisAvailable}>Is this available?</Text>
        <Text data-layer="4133d958-4b2d-4ab9-9d65-786ac9b8c194" style={styles.messagesScreen_iAmInterestedInItDoYouProvideFreeDelivery}>I am interested in it. Do you provide free delivery?</Text>
        <ReactImage data-layer="0e7b685e-5970-4f91-92c0-54590a606d2d" source={require('./assets/images7717b3ac.png')} style={styles.messagesScreen_images7717b3ac} />
        <ReactImage data-layer="ce460082-fcb3-48b1-b311-940b5c2c3170" source={require('./assets/imagesa49cd2ba.png')} style={styles.messagesScreen_imagesa49cd2ba} />
        <ReactImage data-layer="dd19b2e7-3eaa-4035-b1cb-3ce710bf2993" source={require('./assets/images.png')} style={styles.messagesScreen_images} />
    </ScrollView>
    );
  }
}

MessagesScreen.propTypes = {

}

MessagesScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "messagesScreen": {
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
  "messagesScreen_rectangle30": {
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
    "height": 896,
    "left": 0,
    "top": 0
  },
  "messagesScreen_messages": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 19,
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
    "width": 82,
    "height": 38,
    "left": 166,
    "top": 17.5
  },
  "messagesScreen_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 371,
    "height": 2,
    "left": 21.5,
    "top": 57.5
  },
  "messagesScreen_account": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(99, 99, 99, 1)",
    "fontSize": 18,
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
    "width": 66,
    "height": 37,
    "left": 59,
    "top": 17.5
  },
  "messagesScreen_x3273275608clipRoyaltyFreeDownloadArrowsUiLeftIconBlueTransparentArrowLeft": {
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
    "width": 39,
    "height": 27.5,
    "left": 8,
    "top": 22
  },
  "messagesScreen_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 371,
    "height": 2,
    "left": 21.5,
    "top": 150.5
  },
  "messagesScreen_line4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 371,
    "height": 2,
    "left": 27.5,
    "top": 243.5
  },
  "messagesScreen_line5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 371,
    "height": 2,
    "left": 21.5,
    "top": 354.5
  },
  "messagesScreen_jawad": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 19,
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
    "width": 52,
    "height": 38,
    "left": 34,
    "top": 64.5
  },
  "messagesScreen_kamram": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 19,
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
    "width": 70,
    "height": 38,
    "left": 34,
    "top": 158.5
  },
  "messagesScreen_ahmad": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 19,
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
    "width": 60,
    "height": 38,
    "left": 39,
    "top": 251.5
  },
  "messagesScreen_isThisAvailable30d93282": {
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
    "left": 37,
    "top": 101.5
  },
  "messagesScreen_isThisAvailable": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(129, 128, 128, 1)",
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
    "left": 37,
    "top": 196.5
  },
  "messagesScreen_iAmInterestedInItDoYouProvideFreeDelivery": {
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
    "width": 300,
    "height": 70,
    "left": 34,
    "top": 274.5
  },
  "messagesScreen_images7717b3ac": {
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
    "height": 37,
    "left": 360,
    "top": 87
  },
  "messagesScreen_imagesa49cd2ba": {
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
    "height": 37,
    "left": 361,
    "top": 180
  },
  "messagesScreen_images": {
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
    "height": 37,
    "left": 360,
    "top": 273
  }
});