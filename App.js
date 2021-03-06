import React, { useState } from "react";
import {
 StyleSheet,
 Text,
 View,
 TouchableOpacity,
 Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get("window").width;

const App = () => {
 const [tab, setTab] = useState(0);

 const _startButtonClickHandler = (value) => {
  setTab(value);
 };

 return (
  <View style={styles.container}>
   <View style={styles.inGameArea}>
    {tab === 0 && (
     <TouchableOpacity
      style={styles.startBtn}
      onPressOut={() => _startButtonClickHandler(1)}
     >
      <Text style={styles.startBtnText}>START GAME!</Text>
     </TouchableOpacity>
    )}
    {tab === 1 && (
     <View>
      <View style={styles.inGameTop}>
       <Text>top</Text>
      </View>
      <View style={styles.inGameMiddle}>
       <LinearGradient
        colors={[`#079992`, `#38ada9`]}
        locations={[1, 0.9]}
        start={[0.25, 0.9]}
        end={[0.5, 0.4]}
        style={styles.vsView}
       >
        <Text style={styles.vsViewText}>VS</Text>
       </LinearGradient>
      </View>
      <View style={styles.inGameBottom}>
       <Text>bottom</Text>
      </View>
     </View>
    )}
    {/** (조건식) && 트루라면 */}
   </View>
   <View style={styles.resultArea}>
    <View style={styles.resultAreaTop}></View>
    <View style={styles.resultAreaBottom}>
     {tab === 1 && (
      <TouchableOpacity
       style={styles.startBtn}
       onPressOut={() => _startButtonClickHandler(0)}
      >
       <Text style={styles.startBtnText}>RESTART!</Text>
      </TouchableOpacity>
     )}
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 inGameArea: {
  flex: 8,
  alignItems: "center",
  justifyContent: "center",
 },
 resultArea: {
  flex: 2,
  alignItems: `center`,
  justifyContent: `center`,
  // backgroundColor: `#38ada9`,
 },
 resultAreaTop: {
  flex: 1,
 },
 resultAreaBottom: {
  flex: 1,
 },
 startBtn: {
  width: CURRENT_WIDTH / 2,
  height: 45,
  borderRadius: 6,
  backgroundColor: `#82ccdd`,
  justifyContent: "center",
  alignItems: "center",
 },
 startBtnText: {
  color: `#fff`,
  fontWeight: `700`,
  justifyContent: "center",
 },

 inGameTop: {
  flex: 4,
  justifyContent: "center",
  alignItems: "center",
 },
 inGameMiddle: {
  flex: 2,
  justifyContent: "center",
  alignItems: "center",
 },
 inGameBottom: {
  flex: 4,
  justifyContent: "center",
  alignItems: "center",
 },
 vsView: {
  width: CURRENT_WIDTH,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
 },
 vsViewText: {
  fontSize: 20,
  fontWeight: `700`,
  color: `#fff`,
 },
});

export default App;
