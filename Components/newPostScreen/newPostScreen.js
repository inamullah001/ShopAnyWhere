import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class NewPostScreen extends Component {

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
    <ScrollView data-layer="3b361834-17e9-4c3a-adbd-0dfc6167da86" style={styles.newPostScreen}>
        <View data-layer="9eb20fcc-dd84-49ad-a5ae-87dae9a12821" style={styles.newPostScreen_rectangle23}></View>
        <Text data-layer="cf409d8d-6b8d-466e-a1f0-0e987a1cf3c6" style={styles.newPostScreen_newListing}>New Listing</Text>
        <View data-layer="ee5a7d57-817f-4009-ae0c-ecbedbdf5b1a" style={styles.newPostScreen_rectangle24}></View>
        <ReactImage data-layer="c5d593b5-8743-4b10-9b8f-66e775df4f6e" source={require('./assets/fileUploadImageIcon115632290507ftgixivqp.png')} style={styles.newPostScreen_fileUploadImageIcon115632290507ftgixivqp} />
        <View data-layer="af8d7131-81d1-46ec-a22d-0c157d29523e" style={styles.newPostScreen_rectangle227e54982}></View>
        <View data-layer="faa57db7-75f2-4693-8bdd-0de227f440e0" style={styles.newPostScreen_rectangle2a396bee8}></View>
        <View data-layer="79029562-8292-42b7-a677-7bd0cd687f93" style={styles.newPostScreen_rectangle212b8309c}></View>
        <View data-layer="5881fda2-889d-45b7-80c3-9387f425ea20" style={styles.newPostScreen_rectangle2497fe999}></View>
        <View data-layer="81e17048-67c6-4042-af26-eaddc95d4662" style={styles.newPostScreen_rectangle2dbf5a92a}></View>
        <View data-layer="6e8d1599-317d-4174-9e6a-b4ea89544d9b" style={styles.newPostScreen_rectangle2}></View>
        <Text data-layer="f164ff9e-2f34-4383-a6a9-423c5cf35d97" style={styles.newPostScreen_title}>Title</Text>
        <ReactImage data-layer="6f908fbc-0f95-4700-a249-2b9fd213632b" source={require('./assets/x212.png')} style={styles.newPostScreen_x212} />
        <ReactImage data-layer="8f69cbc7-02aa-4d53-95b8-bc1fba81a564" source={require('./assets/x122.png')} style={styles.newPostScreen_x122} />
        <Text data-layer="5fdd38b3-286a-40ca-9214-bb2b9836a2cd" style={styles.newPostScreen_price}>Price</Text>
        <ReactImage data-layer="031c87cc-a43c-43b4-962f-fb302466f0b2" source={require('./assets/categories988842.png')} style={styles.newPostScreen_categories988842} />
        <Text data-layer="1e15b35d-0b57-4c54-b814-72dd04546112" style={styles.newPostScreen_category}>Category</Text>
        <ReactImage data-layer="8b9ae60a-22b0-4fe9-b08b-345e71eff522" source={require('./assets/x138376200.png')} style={styles.newPostScreen_x138376200} />
        <Text data-layer="2b55f738-e141-4fa1-984e-3a95a03a623f" style={styles.newPostScreen_description}>Description</Text>
        <Text data-layer="daddab79-04c6-4ee3-8e6b-1a421521d6a8" style={styles.newPostScreen_post}>Post</Text>
        <Text data-layer="3039c200-514e-4a23-a2a6-56f232612720" style={styles.newPostScreen_cancel}>Cancel</Text>
    </ScrollView>
    );
  }
}

NewPostScreen.propTypes = {

}

NewPostScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "newPostScreen": {
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
  "newPostScreen_rectangle23": {
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
  "newPostScreen_newListing": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 31,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 31,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 3.1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 160,
    "height": 41,
    "left": 26,
    "top": 31
  },
  "newPostScreen_rectangle24": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(229, 218, 218, 1)",
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
    "width": 150,
    "height": 166,
    "left": 36,
    "top": 87
  },
  "newPostScreen_fileUploadImageIcon115632290507ftgixivqp": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 80,
    "height": 82,
    "left": 71,
    "top": 129
  },
  "newPostScreen_rectangle227e54982": {
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
    "left": 28,
    "top": 318
  },
  "newPostScreen_rectangle2a396bee8": {
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
    "width": 167,
    "height": 55,
    "left": 28,
    "top": 393
  },
  "newPostScreen_rectangle212b8309c": {
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
    "width": 246,
    "height": 55,
    "left": 28,
    "top": 468
  },
  "newPostScreen_rectangle2497fe999": {
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
    "left": 28,
    "top": 543
  },
  "newPostScreen_rectangle2dbf5a92a": {
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
    "left": 28,
    "top": 742
  },
  "newPostScreen_rectangle2": {
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
    "left": 28,
    "top": 667
  },
  "newPostScreen_title": {
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
    "width": 44,
    "height": 39,
    "left": 84,
    "top": 330.5
  },
  "newPostScreen_x212": {
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
    "width": 28,
    "height": 29,
    "left": 43,
    "top": 330
  },
  "newPostScreen_x122": {
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
    "width": 36,
    "height": 36,
    "left": 35,
    "top": 403
  },
  "newPostScreen_price": {
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
    "width": 52,
    "height": 39,
    "left": 84,
    "top": 403.5
  },
  "newPostScreen_categories988842": {
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
    "width": 27,
    "height": 27,
    "left": 43,
    "top": 482
  },
  "newPostScreen_category": {
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
    "width": 96,
    "height": 39,
    "left": 84,
    "top": 477.5
  },
  "newPostScreen_x138376200": {
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
    "width": 42,
    "height": 41,
    "left": 36,
    "top": 550
  },
  "newPostScreen_description": {
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
    "width": 120,
    "height": 39,
    "left": 87,
    "top": 555.5
  },
  "newPostScreen_post": {
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
    "width": 44,
    "height": 39,
    "left": 185,
    "top": 679.5
  },
  "newPostScreen_cancel": {
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
    "width": 70,
    "height": 39,
    "left": 172.5,
    "top": 754.5
  }
});