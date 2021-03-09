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

const ROC_DATUM = ["가위", "바위", "보"];

const App = () => {
 const [tab, setTab] = useState(0);
 const [mineData, setMineData] = useState(`잠시만 기다려 주세요`);
 const [cpuData, setCpuData] = useState(`잠시만 기다려 주세요`);
 const [resultText, setResultText] = useState(``);

 const _getRandomNumber = () => Math.floor(Math.random() * 3);

 const _startButtonClickHandler = (value) => {
  setTab(value);

  if (value === 0) {
   setMineData(`잠시만 기다려 주세요`);
   setCpuData(`잠시만 기다려 주세요`);
   setResultText(``);
  }

  if (value === 1) {
   const ran1 = _getRandomNumber();
   const ran2 = _getRandomNumber();

   const mine = ROC_DATUM[ran1];
   const cpu = ROC_DATUM[ran2];
   setMineData(mine);
   setCpuData(cpu);

   if (ran1 === ran2) {
    setResultText("비겼습니다.");
    return;
   }

   if (ran1 === 0) {
    if (ran2 === 1) {
     setResultText("컴퓨터한테 졌습니다.");
     return;
    } else if (ran2 === 2) {
     setResultText("컴퓨터한테 이겼습니다.");
     return;
    }
   }
   if (ran1 === 1) {
    if (ran2 === 2) {
     setResultText("컴퓨터한테 졌습니다.");
     return;
    } else if (ran2 === 0) {
     setResultText("컴퓨터한테 이겼습니다.");
     return;
    }
   }
   if (ran1 === 2) {
    if (ran2 === 0) {
     setResultText("컴퓨터한테 졌습니다.");
     return;
    } else if (ran2 === 1) {
     setResultText("컴퓨터한테 이겼습니다.");
     return;
    }
   }
  }
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
       <Text>{cpuData} </Text>
      </View>
      <View style={styles.inGameMiddle}>
       <LinearGradient
        // colors={[`#079992`, `#38ada9`]}
        colors={[`#e74c3c`, `#2980b9`]}
        locations={[1, 0.99]}
        start={[0, 0]}
        end={[0.494, 0.9]}
        style={styles.vsView}
       >
        <Text style={styles.vsViewText}>컴퓨터</Text>
        <Text style={styles.vsViewText}>VS</Text>
        <Text style={styles.vsViewText}>사용자</Text>
       </LinearGradient>
      </View>
      <View style={styles.inGameBottom}>
       <Text>{mineData}</Text>
      </View>
     </View>
    )}
    {/** (조건식) && 트루라면 */}
   </View>
   <View style={styles.resultArea}>
    <View style={styles.resultAreaTop}>
     <Text>{resultText}</Text>
    </View>
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
  justifyContent: "space-around",
  flexDirection: `row`,
 },
 vsViewText: {
  fontSize: 20,
  fontWeight: `700`,
  color: `#fff`,
 },
});

export default App;
