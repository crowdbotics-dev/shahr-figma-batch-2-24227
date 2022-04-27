import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_23}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a925/53a0/a5d2404bc9a933e0aac6eb3e53a13c94"
          }}
          style={styles.ImageBackground_1_24}
        />
      </View>
      <View style={styles.View_1_26}>
        <Text style={styles.Text_1_26}>Getting started</Text>
      </View>
      <View style={styles.View_1_27}>
        <Text style={styles.Text_1_27}>
          I understand that uses my dolor sit amet, consectetur adipiscing elit.
          Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis
          nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet
          feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada
          velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam.
          Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id
          vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia
          elit est libero sed. Commodo viverra et, neque augue augue mauris,
          nunc ut nec.
        </Text>
      </View>
      <View style={styles.View_1_28}>
        <Text style={styles.Text_1_28}>
          I understand that uses my dolor sit amet, consectetur adipiscing elit.
          Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis
          nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet
          feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada
          velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam.
          Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id
          vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia
          elit est libero sed. Commodo viverra et, neque augue augue mauris,
          nunc ut nec.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf6/f558/69a8a76f10ae81610fc64523fade0fab"
        }}
        style={styles.ImageBackground_1_29}
      />
      <View style={styles.View_1_33}>
        <View style={styles.View_1_34}>
          <View style={styles.View_1_35}>
            <View style={styles.View_1_36} />
          </View>
          <View style={styles.View_1_37}>
            <View style={styles.View_1_38} />
          </View>
          <View style={styles.View_1_39}>
            <View style={styles.View_1_40} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
            }}
            style={styles.ImageBackground_1_41}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_1_23: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_24: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_26: {
    width: wp("36%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_1_26: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_27: {
    width: wp("89%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_28: {
    width: wp("89%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_29: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_1_33: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_34: {
    width: wp("268%"),
    minWidth: wp("268%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_35: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_36: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_37: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_1_38: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_39: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("184%")
  },
  View_1_40: {
    width: wp("83%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 216, 217, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1_41: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
