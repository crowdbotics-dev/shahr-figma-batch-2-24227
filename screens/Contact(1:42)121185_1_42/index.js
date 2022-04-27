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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca8/60f1/5bead00095766cd6542fa8e6f32d1c4f"
        }}
        style={styles.ImageBackground_1_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a14/af78/275970769ee052cbe324464ed6e86449"
        }}
        style={styles.ImageBackground_1_45}
      />
      <View style={styles.View_1_49}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a925/53a0/a5d2404bc9a933e0aac6eb3e53a13c94"
          }}
          style={styles.ImageBackground_1_50}
        />
      </View>
      <View style={styles.View_1_52}>
        <Text style={styles.Text_1_52}>Contact</Text>
      </View>
      <View style={styles.View_1_53}>
        <Text style={styles.Text_1_53}>
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
      <View style={styles.View_1_54}>
        <Text style={styles.Text_1_54}>contact@eamail.com</Text>
      </View>
      <View style={styles.View_1_57}>
        <Text style={styles.Text_1_57}>+1 11525456465465</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_1_43: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_45: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_49: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_50: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_52: {
    width: wp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_1_52: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_53: {
    width: wp("89%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("31%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1_54: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_1_57: {
    width: wp("30%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1_57: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
