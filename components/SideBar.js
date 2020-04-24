import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons, Feather } from "@expo/vector-icons";


const signOut = (props) => {
  alert("LOGOUT.");
}


export default SideBar = props => (
  <ScrollView style={ styles.scrollView } contentContainerStyle={ styles.scrollViewContent }>
    <ImageBackground source={ require("../assets/img/background.jpg") } style={ styles.imageBackground }>
      <Image source={ require("../assets/img/profile_img.png") } style={ styles.profile } />
      <Text style={ styles.name }>UserName</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={ styles.friends }>69 Friends</Text>
        <Ionicons name="md-people" size={ 16 } color="rgba(255, 255, 255, 0.8)" />
      </View>
    </ImageBackground>

    <View style={ styles.container } forceInset={{ top: "always", horizontal: "never" }}>
      <DrawerNavigatorItems { ...props } />
    </View>

    <TouchableOpacity onPress={ () => signOut(props) }>
      <View style={ styles.item }>
        <View style={ styles.iconContainer }>
          <Feather name="log-out" size={ 24 } />
        </View>
        <Text style={ styles.label }>Logout</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#dedede",
  },
  scrollViewContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageBackground: {
    width: undefined,
    padding: 16,
    paddingTop: 48,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF"
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
  },
  friends: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginRight: 4
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
});
