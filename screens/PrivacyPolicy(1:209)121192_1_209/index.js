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
      <View style={styles.View_1_210}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a925/53a0/a5d2404bc9a933e0aac6eb3e53a13c94"
          }}
          style={styles.ImageBackground_1_211}
        />
      </View>
      <View style={styles.View_1_213}>
        <Text style={styles.Text_1_213}>Privacy policy</Text>
      </View>
      <View style={styles.View_1_218}>
        <Text style={styles.Text_1_218}>Last updated: dd/mm/yyyy</Text>
      </View>
      <View style={styles.View_1_219}>
        <Text style={styles.Text_1_219}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          tincidunt etiam ultrices accumsan. Amet, varius eget vel nibh. Proin
          vel faucibus quis quam metus, egestas at ut libero. Enim, nisi sed non
          in fermentum commodo lorem volutpat tincidunt. At tortor nibh amet
          pellentesque. Gravida egestas volutpat, aliquam nibh ornare aliquet
          sem integer sed. Purus, eros blandit sit cras orci faucibus et. Etiam
          nisi, pellentesque ut platea in quam pharetra. Semper ornare mollis
          lorem tellus. Velit semper suspendisse elementum pharetra. Leo a
          faucibus mauris sed mus tincidunt gravida. Congue justo faucibus
          condimentum dui praesent pharetra. Et turpis nisl, a sapien vitae
          lectus non. Euismod risus purus lacus amet. Odio sagittis amet,
          laoreet ipsum sit leo amet ut. Facilisis semper faucibus sed eros. Non
          nibh faucibus aliquam sodales ut quis. Platea odio morbi fermentum
          suspendisse. Sed id urna erat amet nec nunc duis. Duis diam suscipit
          arcu egestas faucibus donec quam. Feugiat nunc, in non velit id felis.
          Purus in sodales tempus, ultrices viverra nunc id donec in. Viverra
          enim diam nec tincidunt nisl integer. Sapien non, fames nascetur vel
          id tellus viverra. Facilisi vitae elementum, habitant tincidunt
          sapien. Ac vitae vestibulum pellentesque mauris aliquam varius
          pulvinar. Nulla facilisis eget adipiscing turpis neque consequat.
          Posuere sed leo elit, dictumst tristique enim tristique ullamcorper
          nulla. Lacus nunc amet dictumst lacus, posuere tellus, in viverra.
          Ultrices est amet ligula nunc volutpat. Id aliquam duis sed suscipit
          duis. Varius pretium sed enim vel dolor adipiscing lectus. Tristique
          commodo id odio feugiat tortor odio vitae. Nulla ligula eget mi auctor
          in duis elementum sagittis.
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_1_210: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_211: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_213: {
    width: wp("33%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_1_213: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_218: {
    width: wp("81%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_218: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_219: {
    width: wp("81%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_219: {
    color: "rgba(0, 0, 0, 1)",
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
