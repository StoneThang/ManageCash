import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import MainBackGround from "../assets/background.jpg";
import styles from '../values/style'

 const CategoryScreen = () => {

    return (
      
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View>
            <Text style={styles.whiteText}> CategoryScreen </Text>
          </View>
        </ImageBackground>
     
    )}

export default CategoryScreen;