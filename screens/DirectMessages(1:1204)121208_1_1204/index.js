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
      <View style={styles.View_1_1205} />
      <View style={styles.View_1_1206}>
        <Text style={styles.Text_1_1206}>Direct messages</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_1207}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_1126"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58d7/c068/59ff0cb32ebcf254c0086b3064230d59"
          }}
          style={styles.ImageBackground_1_1208}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0932/d83d/44882a3ad125d86964ea09f425c23112"
        }}
        style={styles.ImageBackground_1_1210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/f2ae/2d15d38a3daf2d155e6794cff530ca0c"
        }}
        style={styles.ImageBackground_1_1211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246e/6208/c5f8ad2d0d692ab9dbcb9a1d829632fa"
        }}
        style={styles.ImageBackground_1_1212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/808e/7fe3/bf3ce7b520ddc4611a2b23a655f4d5d1"
        }}
        style={styles.ImageBackground_1_1213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246e/6208/c5f8ad2d0d692ab9dbcb9a1d829632fa"
        }}
        style={styles.ImageBackground_1_1214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/808e/7fe3/bf3ce7b520ddc4611a2b23a655f4d5d1"
        }}
        style={styles.ImageBackground_1_1215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c3/0305/e7b5180569a79fcc22a9fad26665541d"
        }}
        style={styles.ImageBackground_1_1216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c3/0305/e7b5180569a79fcc22a9fad26665541d"
        }}
        style={styles.ImageBackground_1_1217}
      />
      <View style={styles.View_1_1218}>
        <View style={styles.View_1_1219}>
          <Text style={styles.Text_1_1219}>Username</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f63/3089/8b307366f9901127b69414af355b8425"
          }}
          style={styles.ImageBackground_1_1220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a7/203e/9d5550a0f1e5d6d1d640f81d34a23f11"
          }}
          style={styles.ImageBackground_1_1221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a393/0e1b/c118b4c53e621e689a96890686fb5fbd"
          }}
          style={styles.ImageBackground_1_1222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d8e/d957/c0ce3cc3da5b63290b10a0ca52f87d7f"
          }}
          style={styles.ImageBackground_1_1223}
        />
      </View>
      <View style={styles.View_1_1224} />
      <View style={styles.View_1_1225}>
        <Text style={styles.Text_1_1225}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in.
        </Text>
      </View>
      <View style={styles.View_1_1226}>
        <Text style={styles.Text_1_1226}>01:15 PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/f2ae/2d15d38a3daf2d155e6794cff530ca0c"
        }}
        style={styles.ImageBackground_1_1227}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246e/6208/c5f8ad2d0d692ab9dbcb9a1d829632fa"
        }}
        style={styles.ImageBackground_1_1228}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/808e/7fe3/bf3ce7b520ddc4611a2b23a655f4d5d1"
        }}
        style={styles.ImageBackground_1_1229}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c3/0305/e7b5180569a79fcc22a9fad26665541d"
        }}
        style={styles.ImageBackground_1_1230}
      />
      <View style={styles.View_1_1231} />
      <View style={styles.View_1_1232}>
        <Text style={styles.Text_1_1232}>Lorem ipsum dolor sit </Text>
      </View>
      <View style={styles.View_1_1233}>
        <Text style={styles.Text_1_1233}>01:15 PM</Text>
      </View>
      <View style={styles.View_1_1234} />
      <View style={styles.View_1_1235}>
        <Text style={styles.Text_1_1235}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.View_1_1236}>
        <Text style={styles.Text_1_1236}>01:15 PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0932/d83d/44882a3ad125d86964ea09f425c23112"
        }}
        style={styles.ImageBackground_1_1237}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa0/7abb/c0d49428243c01395a7e4353f4f79f72"
        }}
        style={styles.ImageBackground_1_1238}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/808e/7fe3/bf3ce7b520ddc4611a2b23a655f4d5d1"
        }}
        style={styles.ImageBackground_1_1239}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c3/0305/e7b5180569a79fcc22a9fad26665541d"
        }}
        style={styles.ImageBackground_1_1240}
      />
      <View style={styles.View_1_1241} />
      <View style={styles.View_1_1242}>
        <Text style={styles.Text_1_1242}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.View_1_1243}>
        <Text style={styles.Text_1_1243}>01:15 PM</Text>
      </View>
      <View style={styles.View_1_1244}>
        <View style={styles.View_1_1245}>
          <View style={styles.View_1_1246} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de78/749a/8db67bde675fc65912d467e16beb5cf2"
            }}
            style={styles.ImageBackground_1_1247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/030e/2543/379b41cda7af5ad25717b453828ca420"
            }}
            style={styles.ImageBackground_1_1249}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/096a/42e0/6521ecf5964bc6cbbae7f52ed0e71a2c"
          }}
          style={styles.ImageBackground_1_1250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8032/fc2c/51d61728b08401dd4edbb01d9feba829"
          }}
          style={styles.ImageBackground_1_1252}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f02/7e2b/1a6e53f3bd6c807880861eddc1beeabe"
        }}
        style={styles.ImageBackground_1_1255}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45b/078e/e0aabd363f77ce50fa6e20771923bd82"
        }}
        style={styles.ImageBackground_1_1257}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_1259}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_102"))
        }
      >
        <View style={styles.View_I1_1259_151_331}>
          <Text style={styles.Text_I1_1259_151_331}>Enter</Text>
        </View>
        <View style={styles.View_I1_1259_151_333}>
          <Text style={styles.Text_I1_1259_151_333}>|En enter|</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_1_1205: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1206: {
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_1206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  TouchableOpacity_1_1207: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1208: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1210: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("62%")
  },
  ImageBackground_1_1211: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("41%")
  },
  ImageBackground_1_1212: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1213: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1214: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_1_1215: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_1_1216: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1217: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    resizeMode: "cover"
  },
  View_1_1218: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("17%")
  },
  View_1_1219: {
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_1220: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1221: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1222: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1223: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  View_1_1224: {
    width: wp("61%"),
    height: hp("15%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(252, 241, 214, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1225: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_1_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1_1226: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_1_1226: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_1227: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("98%")
  },
  ImageBackground_1_1228: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1229: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1230: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  View_1_1231: {
    width: wp("61%"),
    height: hp("6%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(252, 241, 214, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1232: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_1_1232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1_1233: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_1_1233: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1234: {
    width: wp("61%"),
    height: hp("11%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(249, 216, 217, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1235: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_1_1235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1_1236: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_1_1236: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_1237: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("80%")
  },
  ImageBackground_1_1238: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_1_1239: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_1_1240: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    resizeMode: "cover"
  },
  View_1_1241: {
    width: wp("61%"),
    height: hp("11%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(249, 216, 217, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1242: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_1_1242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1_1243: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_1_1243: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1244: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("114%")
  },
  View_1_1245: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1246: {
    width: wp("61%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1_1247: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_1_1249: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_1_1250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  ImageBackground_1_1252: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_1_1255: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_1_1257: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_1_1259: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1259_151_331: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_1259_151_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1259_151_333: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_1259_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
