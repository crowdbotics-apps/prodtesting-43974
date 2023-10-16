import { FlatList } from "react-native";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6Copy = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.bufAonnv}></View><Text style={styles.DmtCwrgY}>Lorem ipsum…</Text><ActivityIndicator style={styles.SFURmliC}></ActivityIndicator><CheckBox style={styles.BArJbfBu} title="Checkbox Title"></CheckBox><FlatList style={styles.swklBkhu} renderItem={({
        item
      }) => <View style={styles.TwkkoPcz}></View>} ItemSeparatorComponent={() => <View style={styles.QgBIrOmn} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bufAonnv: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  DmtCwrgY: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontFamily: "Lato"
  },
  SFURmliC: {
    width: 50,
    height: 50
  },
  BArJbfBu: {
    width: 183,
    height: 69
  },
  swklBkhu: {
    position: "absolute",
    width: 100,
    height: 150
  },
  TwkkoPcz: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  QgBIrOmn: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled6Copy;