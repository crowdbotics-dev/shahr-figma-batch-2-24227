import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StarRateReviewApp = () => {
  return (
    <View style={styles.starRateReviewApp}>
      <Image
        style={styles.iconlyLightOutlineArrowL}
        resizeMode="cover"
        source={require("../assets/iconlylight-outlinearrow---left-2.png")}
      />
      <Text style={styles.reviewAppText}>Review app</Text>
      <Image
        style={styles.eosIconsnetworkPolicy}
        resizeMode="cover"
        source={require("../assets/eosiconsnetworkpolicy.png")}
      />
      <Image
        style={styles.eosIconsnetworkPolicy1}
        resizeMode="cover"
        source={require("../assets/eosiconsnetworkpolicy.png")}
      />
      <Text style={styles.transactionsText}>
        <Text style={styles.howWasYour}>How was your experience?</Text>
      </Text>
      <View style={styles.loginButtonView1}>
        <View style={styles.loginButtonView}>
          <View style={styles.rectangleView} />
          <Text style={styles.logInButton}>Cancel</Text>
        </View>
      </View>
      <View style={styles.saveButtonView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.saveText}>Submit</Text>
      </View>
      <Text style={styles.use5StarRatingToRateAnA}>
        Use 5 star rating to rate an app or leave a text review
      </Text>
      <View style={styles.groupView}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-12857.png")}
        />
        <Text style={styles.poorText}>Poor</Text>
        <Text style={styles.badText}>Bad</Text>
        <Text style={styles.goodText}>Good</Text>
        <Text style={styles.veryGoodText}>Very good</Text>
        <Text style={styles.excellentText}>Excellent</Text>
      </View>
      <View style={styles.orView}>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
      </View>
      <View style={styles.frameView}>
        <Text style={styles.searchText}>Text review</Text>
        <Text style={styles.enterText}>Enter</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.enEnterText}>|En enter|</Text>
      </View>
      <View style={styles.rectangleView3} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconlyLightOutlineArrowL: {
    position: "absolute",
    height: "2.23%",
    width: "2.72%",
    top: "4.69%",
    right: "90.76%",
    bottom: "93.08%",
    left: "6.52%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  reviewAppText: {
    position: "absolute",
    height: "2.23%",
    width: "27.29%",
    top: "5.13%",
    right: "36.23%",
    bottom: "92.63%",
    left: "36.47%",
    fontSize: 22,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#231f20",
    textAlign: "left",
  },
  eosIconsnetworkPolicy: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "40.74%",
    right: "87.68%",
    bottom: "56.58%",
    left: "6.52%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    display: "none",
  },
  eosIconsnetworkPolicy1: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "44.75%",
    right: "87.68%",
    bottom: "52.57%",
    left: "6.52%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    display: "none",
  },
  howWasYour: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  transactionsText: {
    position: "absolute",
    height: "2.23%",
    width: "86.23%",
    top: "15.07%",
    right: "6.76%",
    bottom: "82.7%",
    left: "7%",
    fontSize: 25,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  logInButton: {
    position: "absolute",
    height: "40.82%",
    width: "15.96%",
    top: "28.57%",
    right: "42.02%",
    bottom: "30.61%",
    left: "42.02%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  loginButtonView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  loginButtonView1: {
    position: "absolute",
    height: "5.47%",
    width: "74.15%",
    top: "76.9%",
    right: "13.04%",
    bottom: "17.63%",
    left: "12.8%",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#000",
  },
  saveText: {
    position: "absolute",
    height: "40.82%",
    width: "16.61%",
    top: "28.57%",
    right: "41.69%",
    bottom: "30.61%",
    left: "41.69%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  saveButtonView: {
    position: "absolute",
    height: "5.47%",
    width: "74.15%",
    top: "68.42%",
    right: "13.04%",
    bottom: "26.12%",
    left: "12.8%",
  },
  use5StarRatingToRateAnA: {
    position: "absolute",
    height: "4.46%",
    width: "68.84%",
    top: "18.86%",
    right: "15.46%",
    bottom: "76.67%",
    left: "15.7%",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  groupIcon: {
    position: "absolute",
    height: "58.02%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "41.98%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  poorText: {
    position: "absolute",
    height: "24.69%",
    width: "7.37%",
    top: "75.31%",
    right: "88.87%",
    bottom: "0%",
    left: "3.76%",
    fontSize: 11,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    opacity: 0.3,
  },
  badText: {
    position: "absolute",
    height: "24.69%",
    width: "6.09%",
    top: "75.31%",
    right: "68.03%",
    bottom: "0%",
    left: "25.88%",
    fontSize: 11,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    opacity: 0.3,
  },
  goodText: {
    position: "absolute",
    height: "24.69%",
    width: "8.34%",
    top: "75.31%",
    right: "46.55%",
    bottom: "0%",
    left: "45.12%",
    fontSize: 11,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  veryGoodText: {
    position: "absolute",
    height: "24.69%",
    width: "15.71%",
    top: "75.31%",
    right: "20.9%",
    bottom: "0%",
    left: "63.39%",
    fontSize: 11,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    opacity: 0.3,
  },
  excellentText: {
    position: "absolute",
    height: "24.69%",
    width: "14.11%",
    top: "75.31%",
    right: "0.38%",
    bottom: "0%",
    left: "85.51%",
    fontSize: 11,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    opacity: 0.3,
  },
  groupView: {
    position: "absolute",
    height: "9.04%",
    width: "75.34%",
    top: "24.11%",
    right: "12.27%",
    bottom: "66.85%",
    left: "12.38%",
  },
  orText: {
    position: "absolute",
    height: "100%",
    width: "7.33%",
    top: "0%",
    right: "46.34%",
    bottom: "0%",
    left: "46.34%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#231f20",
    textAlign: "center",
    opacity: 0.5,
  },
  lineView: {
    position: "absolute",
    height: "5%",
    width: "38.56%",
    top: "47.5%",
    right: "61.6%",
    bottom: "47.5%",
    left: "-0.16%",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.05)",
    borderTopWidth: 1,
  },
  lineView1: {
    position: "absolute",
    height: "5%",
    width: "38.56%",
    top: "47.5%",
    right: "-0.16%",
    bottom: "47.5%",
    left: "61.6%",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.05)",
    borderTopWidth: 1,
  },
  orView: {
    position: "absolute",
    height: "2.23%",
    width: "74.15%",
    top: "37.28%",
    right: "13.04%",
    bottom: "60.49%",
    left: "12.8%",
  },
  searchText: {
    position: "absolute",
    height: "20.25%",
    width: "42.59%",
    top: "0%",
    right: "52.29%",
    bottom: "79.75%",
    left: "5.12%",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  enterText: {
    position: "absolute",
    height: "20.25%",
    width: "42.59%",
    top: "54.43%",
    right: "52.29%",
    bottom: "25.32%",
    left: "5.12%",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    height: "67.09%",
    width: "100%",
    top: "32.91%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
    opacity: 0,
  },
  enEnterText: {
    position: "absolute",
    top: 45,
    left: 20,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
    width: 260,
  },
  frameView: {
    position: "absolute",
    height: "8.82%",
    width: "89.61%",
    top: "41.41%",
    right: "6.28%",
    bottom: "49.78%",
    left: "4.11%",
  },
  rectangleView3: {
    position: "absolute",
    height: "14.73%",
    width: "89.61%",
    top: "45.09%",
    right: "3.86%",
    bottom: "40.18%",
    left: "6.52%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
  },
  starRateReviewApp: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default StarRateReviewApp;
