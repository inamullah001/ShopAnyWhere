import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class HomeScreen extends Component {

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
    <ScrollView data-layer="3b7122d5-f591-46bb-922b-0efcfb005690" style={styles.homeScreen}>
        <View data-layer="52ea8eed-79c5-4886-9ba3-5e0bc36f9247" style={styles.homeScreen_rectangle16}></View>
        <View data-layer="809062f9-4ec6-4dab-8081-6842e20d345e" style={styles.homeScreen_rectangle6}></View>
        <View data-layer="c9476ee6-d6e0-41e8-8bcd-94e85101a400" style={styles.homeScreen_rectangle7}></View>
        <View data-layer="66acae13-c94c-4a6e-b2bd-d3ab0c0f59ec" style={styles.homeScreen_rectangle8}></View>
        <View data-layer="e4009829-32a8-4ec0-bddc-32ec4041fa01" style={styles.homeScreen_rectangle9}></View>
        <Text data-layer="9e325a8b-e9d7-46ea-817b-f68ee06e3ef1" style={styles.homeScreen_books}>Books</Text>
        <Text data-layer="7c1a6376-769a-419e-9d70-5baca581f401" style={styles.homeScreen_cameras}>Cameras</Text>
        <Text data-layer="9a432548-113d-4997-9787-c2af3df4f995" style={styles.homeScreen_cars}>Cars</Text>
        <Text data-layer="9140da52-9f3c-43f8-a515-987f88b8a005" style={styles.homeScreen_tvs}>TVs</Text>
        <View data-layer="be84ed4b-cdd4-49ae-9991-0889a1e004fe" style={styles.homeScreen_rectangle10}></View>
        <View data-layer="6a7c1053-37f8-4389-9094-af712aca56e3" style={styles.homeScreen_rectangle11}></View>
        <View data-layer="f2659ff8-6145-4b09-9bd1-5476dc925be5" style={styles.homeScreen_rectangle12}></View>
        <View data-layer="4962185f-91d9-4463-966a-7ab71d142a71" style={styles.homeScreen_rectangle13}></View>
        <ReactImage data-layer="a59a1f3e-6575-4a6a-96bd-70948d296ad0" source={require('./assets/x42CarPngHd.png')} style={styles.homeScreen_x42CarPngHd} />
        <View data-layer="17b97bab-3bee-4486-bacd-45cb46a26827" style={styles.homeScreen_rectangle14}></View>
        <View data-layer="ecf3d3bb-7951-4a03-a3eb-ea563f37a578" style={styles.homeScreen_rectangle15}></View>
        <ReactImage data-layer="fd07ed59-2d83-4a8f-aa51-044d8c9454fb" source={require('./assets/x87973MovieTripodAccessoryCameraPhotographicFilm.png')} style={styles.homeScreen_x87973MovieTripodAccessoryCameraPhotographicFilm} />
        <ReactImage data-layer="24629b4b-c161-426d-a0e3-6d05adb02c9c" source={require('./assets/x4OfficeChairPngImage.png')} style={styles.homeScreen_x4OfficeChairPngImage} />
        <Text data-layer="dc6bb45c-e1a1-4aa5-a723-ef35a9854cb8" style={styles.homeScreen_benzCarModel6InNewCondition}>Benz Car Model 6 in new condition</Text>
        <Text data-layer="85f78588-73ee-450b-b76d-a78e8fd41995" style={styles.homeScreen_x12000}>12, 000$</Text>
        <Text data-layer="45b79549-5a16-4828-a536-1d317abcd8cf" style={styles.homeScreen_newChair}>New Chair </Text>
        <Text data-layer="aafc860c-5933-4d55-bd37-eaf85bab52a8" style={styles.homeScreen_x100}>100$</Text>
        <View data-layer="61e86c58-d139-487f-9853-dad278d00a12" style={styles.homeScreen_rectangle36}></View>
        <View data-layer="b04de909-a034-4673-b3b4-b15ae1ec03be" style={styles.homeScreen_rectangle37}></View>
        <Text data-layer="d09a4405-5338-4148-8750-8f5dab6d4766" style={styles.homeScreen_purchasedff0afb9}>Purchase</Text>
        <Text data-layer="c1eb3a59-6de1-4996-8c5a-33aa43fe7cfe" style={styles.homeScreen_purchase}>Purchase</Text>
    </ScrollView>
    );
  }
}

HomeScreen.propTypes = {

}

HomeScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "homeScreen": {
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
  "homeScreen_rectangle16": {
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
  "homeScreen_rectangle6": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 24,
    "top": 42
  },
  "homeScreen_rectangle7": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 133,
    "top": 42
  },
  "homeScreen_rectangle8": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 242,
    "top": 42
  },
  "homeScreen_rectangle9": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 351,
    "top": 42
  },
  "homeScreen_books": {
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
    "width": 54,
    "height": 33,
    "left": 47,
    "top": 49.5
  },
  "homeScreen_cameras": {
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
    "width": 76,
    "height": 33,
    "left": 145,
    "top": 49.5
  },
  "homeScreen_cars": {
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
    "width": 38,
    "height": 33,
    "left": 273,
    "top": 49.5
  },
  "homeScreen_tvs": {
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
    "width": 32,
    "height": 33,
    "left": 385,
    "top": 49.5
  },
  "homeScreen_rectangle10": {
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 350,
    "height": 264,
    "left": 35,
    "top": 106
  },
  "homeScreen_rectangle11": {
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
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 350,
    "height": 264,
    "left": 35,
    "top": 106
  },
  "homeScreen_rectangle12": {
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
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 350,
    "height": 264,
    "left": 32,
    "top": 400
  },
  "homeScreen_rectangle13": {
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
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 350,
    "height": 264,
    "left": 32,
    "top": 694
  },
  "homeScreen_x42CarPngHd": {
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
    "width": 208,
    "height": 156,
    "left": 103,
    "top": 115
  },
  "homeScreen_rectangle14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 194, 46, 1)",
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
    "borderTopLeftRadius": 12,
    "borderTopRightRadius": 12,
    "borderBottomLeftRadius": 12,
    "borderBottomRightRadius": 12,
    "width": 350,
    "height": 80,
    "left": 35,
    "top": 290
  },
  "homeScreen_rectangle15": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 194, 46, 1)",
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
    "borderTopLeftRadius": 12,
    "borderTopRightRadius": 12,
    "borderBottomLeftRadius": 12,
    "borderBottomRightRadius": 12,
    "width": 350,
    "height": 80,
    "left": 32,
    "top": 584
  },
  "homeScreen_x87973MovieTripodAccessoryCameraPhotographicFilm": {
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
    "width": 157,
    "height": 338,
    "left": 129,
    "top": 707
  },
  "homeScreen_x4OfficeChairPngImage": {
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
    "width": 104,
    "height": 152,
    "left": 155,
    "top": 410
  },
  "homeScreen_benzCarModel6InNewCondition": {
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
    "width": 308,
    "height": 33,
    "left": 62,
    "top": 296.5
  },
  "homeScreen_x12000": {
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
    "width": 74,
    "height": 33,
    "left": 64,
    "top": 330.5
  },
  "homeScreen_newChair": {
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
    "width": 96,
    "height": 33,
    "left": 55,
    "top": 591.5
  },
  "homeScreen_x100": {
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
    "width": 44,
    "height": 33,
    "left": 55,
    "top": 625.5
  },
  "homeScreen_rectangle36": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 271,
    "top": 611
  },
  "homeScreen_rectangle37": {
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
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 99,
    "height": 41,
    "left": 273,
    "top": 323
  },
  "homeScreen_purchasedff0afb9": {
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
    "width": 80,
    "height": 33,
    "left": 281,
    "top": 618.5
  },
  "homeScreen_purchase": {
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
    "width": 80,
    "height": 33,
    "left": 281,
    "top": 329.5
  }
});