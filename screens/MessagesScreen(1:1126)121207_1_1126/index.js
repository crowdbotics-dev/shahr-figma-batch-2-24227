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
      <View style={styles.View_1_1127}>
        <Text style={styles.Text_1_1127}>Messages</Text>
      </View>
      <View style={styles.View_1_1128}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58d7/c068/59ff0cb32ebcf254c0086b3064230d59"
          }}
          style={styles.ImageBackground_1_1129}
        />
      </View>
      <View style={styles.View_1_1131}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0932/d83d/44882a3ad125d86964ea09f425c23112"
          }}
          style={styles.ImageBackground_1_1132}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/f2ae/2d15d38a3daf2d155e6794cff530ca0c"
          }}
          style={styles.TouchableOpacity_1_1133}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_1204"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/b6e0/bc122df6c2aec71830e47f82525d4785"
          }}
          style={styles.ImageBackground_1_1134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f0/8778/8765a9006fa04500590de3b214109992"
          }}
          style={styles.ImageBackground_1_1135}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_1_1136}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_1204"))
          }
        >
          <Text style={styles.Text_1_1136}>
            Quisque blandit arcu quis turpis tincidunt facilisis…
          </Text>
        </TouchableOpacity>
        <View style={styles.View_1_1137}>
          <Text style={styles.Text_1_1137}>15 min</Text>
        </View>
        <View style={styles.View_1_1138} />
        <View style={styles.View_1_1139}>
          <Text style={styles.Text_1_1139}>1</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/b6e0/bc122df6c2aec71830e47f82525d4785"
          }}
          style={styles.ImageBackground_1_1140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f0/8778/8765a9006fa04500590de3b214109992"
          }}
          style={styles.ImageBackground_1_1141}
        />
        <View style={styles.View_1_1142}>
          <Text style={styles.Text_1_1142}>
            Sed ligula erat, dignissim sit at amet dictum id, iaculis…{" "}
          </Text>
        </View>
        <View style={styles.View_1_1143}>
          <Text style={styles.Text_1_1143}>32 min</Text>
        </View>
        <View style={styles.View_1_1144} />
        <View style={styles.View_1_1145}>
          <Text style={styles.Text_1_1145}>2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/b6e0/bc122df6c2aec71830e47f82525d4785"
          }}
          style={styles.ImageBackground_1_1146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f0/8778/8765a9006fa04500590de3b214109992"
          }}
          style={styles.ImageBackground_1_1147}
        />
        <View style={styles.View_1_1148}>
          <Text style={styles.Text_1_1148}>
            Duis eget nibh tincidunt odio id venenatis ornare quis…
          </Text>
        </View>
        <View style={styles.View_1_1149}>
          <Text style={styles.Text_1_1149}>1 hour</Text>
        </View>
        <View style={styles.View_1_1150}>
          <Text style={styles.Text_1_1150}>
            Curabitur elementum orci vitae turpis vulputate…
          </Text>
        </View>
        <View style={styles.View_1_1151}>
          <Text style={styles.Text_1_1151}>5 hour</Text>
        </View>
        <View style={styles.View_1_1152}>
          <Text style={styles.Text_1_1152}>
            Donec ut lorem tristique dui sit faucibus tincidunt….
          </Text>
        </View>
        <View style={styles.View_1_1153}>
          <Text style={styles.Text_1_1153}>Mon</Text>
        </View>
        <View style={styles.View_1_1154}>
          <Text style={styles.Text_1_1154}>
            Cras felis dui, facilisis sit amet dolor ac, tincidunt…
          </Text>
        </View>
        <View style={styles.View_1_1155}>
          <Text style={styles.Text_1_1155}>Tue</Text>
        </View>
        <View style={styles.View_1_1156}>
          <Text style={styles.Text_1_1156}>
            Cras felis dui, facilisis sit amet dolor ac, tincidunt…
          </Text>
        </View>
        <View style={styles.View_1_1157}>
          <Text style={styles.Text_1_1157}>Tue</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc66/7937/6d64c88c10bb42c7d464f811e40ee187"
          }}
          style={styles.ImageBackground_1_1163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d19/d392/5f03733b12f85c299e155559ee9ae5fb"
          }}
          style={styles.ImageBackground_1_1164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb5/1112/a0b9e355902d847a75fca94984f3dadd"
          }}
          style={styles.ImageBackground_1_1165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0932/d83d/44882a3ad125d86964ea09f425c23112"
          }}
          style={styles.ImageBackground_1_1166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d19/d392/5f03733b12f85c299e155559ee9ae5fb"
          }}
          style={styles.ImageBackground_1_1167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/f2ae/2d15d38a3daf2d155e6794cff530ca0c"
          }}
          style={styles.ImageBackground_1_1168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/b6e0/bc122df6c2aec71830e47f82525d4785"
          }}
          style={styles.ImageBackground_1_1169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f0/8778/8765a9006fa04500590de3b214109992"
          }}
          style={styles.ImageBackground_1_1170}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_1_1171}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_1204"))
          }
        >
          <Text style={styles.Text_1_1171}>Cody Fisher</Text>
        </TouchableOpacity>
        <View style={styles.View_1_1172}>
          <Text style={styles.Text_1_1172}>Johnny Watson</Text>
        </View>
        <View style={styles.View_1_1173}>
          <Text style={styles.Text_1_1173}>Jenny Wilson</Text>
        </View>
        <View style={styles.View_1_1174}>
          <Text style={styles.Text_1_1174}>Ralph Edwards</Text>
        </View>
        <View style={styles.View_1_1175}>
          <Text style={styles.Text_1_1175}>Guy Hawkins</Text>
        </View>
        <View style={styles.View_1_1176}>
          <Text style={styles.Text_1_1176}>Morris Henry</Text>
        </View>
        <View style={styles.View_1_1177}>
          <Text style={styles.Text_1_1177}>Irma Flores</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d07b/5075/28fb895b072d2ceb66ee79d8c87b8382"
          }}
          style={styles.ImageBackground_1_1178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/cc2e/c09141f6a1340ea1bc840f629948ecc2"
          }}
          style={styles.ImageBackground_1_1190}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_1191}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_102"))
        }
      >
        <View style={styles.View_I1_1191_151_330}>
          <Text style={styles.Text_I1_1191_151_330}>Search</Text>
        </View>
        <View style={styles.View_I1_1191_151_331}>
          <Text style={styles.Text_I1_1191_151_331}>Enter</Text>
        </View>
        <View style={styles.View_I1_1191_151_332} />
        <View style={styles.View_I1_1191_151_333}>
          <Text style={styles.Text_I1_1191_151_333}>|En enter|</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429a/2cbc/1b962c221a1c4ce7c1f5cee31ee9d6c4"
        }}
        style={styles.ImageBackground_1_1192}
      />
      <View style={styles.View_1_1194}>
        <View style={styles.View_1_1195} />
        <View style={styles.View_1_1196} />
        <View style={styles.View_1_1197}>
          <Text style={styles.Text_1_1197}>Email</Text>
        </View>
        <View style={styles.View_1_1198}>
          <Text style={styles.Text_1_1198}>SMS</Text>
        </View>
      </View>
      <View style={styles.View_1_1199}>
        <View style={styles.View_1_1200} />
        <View style={styles.View_1_1201} />
        <View style={styles.View_1_1202}>
          <Text style={styles.Text_1_1202}>Delete selected</Text>
        </View>
        <View style={styles.View_1_1203}>
          <Text style={styles.Text_1_1203}>Select all</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_1_1127: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_1127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1128: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1129: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1131: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1132: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  TouchableOpacity_1_1133: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_1_1134: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1135: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  TouchableOpacity_1_1136: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1136: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1137: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1137: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1138: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1139: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1_1139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1140: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1141: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_1142: {
    width: wp("51%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1142: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1143: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_1143: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1144: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1145: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_1145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1146: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1147: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_1148: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1148: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1149: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_1_1149: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1150: {
    width: wp("51%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1150: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1151: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_1_1151: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1152: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1152: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1153: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_1_1153: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1154: {
    width: wp("51%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1154: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1155: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1_1155: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1156: {
    width: wp("51%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_1156: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1157: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_1_1157: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_1158: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%")
  },
  ImageBackground_1_1159: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  ImageBackground_1_1160: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%")
  },
  ImageBackground_1_1161: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%")
  },
  ImageBackground_1_1162: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("57%")
  },
  ImageBackground_1_1163: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("69%")
  },
  ImageBackground_1_1164: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_1_1165: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  ImageBackground_1_1166: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47%")
  },
  ImageBackground_1_1167: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%")
  },
  ImageBackground_1_1168: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  ImageBackground_1_1169: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1170: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  TouchableOpacity_1_1171: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1_1171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1172: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_1172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1173: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_1_1173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1174: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_1_1174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1175: {
    flexGrow: 1,
    width: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_1_1175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1176: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1_1176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_1177: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_1_1177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1_1178: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_1_1182: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1183: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1184: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1185: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1186: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1187: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1188: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1189: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1190: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  TouchableOpacity_1_1191: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1191_151_330: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1191_151_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1191_151_331: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_1191_151_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1191_151_332: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  View_I1_1191_151_333: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_1191_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_1_1194: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%")
  },
  View_1_1195: {
    width: wp("61%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1196: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1197: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1197: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1198: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1199: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%")
  },
  View_1_1200: {
    width: wp("61%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1201: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1202: {
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1202: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1203: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
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
