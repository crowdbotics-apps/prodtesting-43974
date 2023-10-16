import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DashboardScreen = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <AntDesign name="user" size={24} color="white" />
        </TouchableOpacity>
        {showDropdown && <View style={styles.dropdown}>
            <TouchableOpacity>
              <Text style={styles.dropdownText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dropdownText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dropdownText}>Logout</Text>
            </TouchableOpacity>
          </View>}
      </View>
      <View style={styles.chartContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.chartImage} />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Sales Table</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>Product</Text>
            <Text style={styles.tableRowText}>Sales</Text>
            <Text style={styles.tableRowText}>Revenue</Text>
            <Text style={styles.tableRowText}>Product</Text>
            <Text style={styles.tableRowText}>Sales</Text>
            <Text style={styles.tableRowText}>Revenue</Text>
            <Text style={styles.tableRowText}>Product</Text>
            <Text style={styles.tableRowText}>Sales</Text>
            <Text style={styles.tableRowText}>Revenue</Text>
            <Text style={styles.tableRowText}>Product</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>Product 1</Text>
            <Text style={styles.tableRowText}>100</Text>
            <Text style={styles.tableRowText}>$10,000</Text>
            <Text style={styles.tableRowText}>Product 1</Text>
            <Text style={styles.tableRowText}>100</Text>
            <Text style={styles.tableRowText}>$10,000</Text>
            <Text style={styles.tableRowText}>Product 1</Text>
            <Text style={styles.tableRowText}>100</Text>
            <Text style={styles.tableRowText}>$10,000</Text>
            <Text style={styles.tableRowText}>Product 1</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>Product 2</Text>
            <Text style={styles.tableRowText}>75</Text>
            <Text style={styles.tableRowText}>$7,500</Text>
            <Text style={styles.tableRowText}>Product 2</Text>
            <Text style={styles.tableRowText}>75</Text>
            <Text style={styles.tableRowText}>$7,500</Text>
            <Text style={styles.tableRowText}>Product 2</Text>
            <Text style={styles.tableRowText}>75</Text>
            <Text style={styles.tableRowText}>$7,500</Text>
            <Text style={styles.tableRowText}>Product 2</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>Product 3</Text>
            <Text style={styles.tableRowText}>50</Text>
            <Text style={styles.tableRowText}>$5,000</Text>
            <Text style={styles.tableRowText}>Product 3</Text>
            <Text style={styles.tableRowText}>50</Text>
            <Text style={styles.tableRowText}>$5,000</Text>
            <Text style={styles.tableRowText}>Product 3</Text>
            <Text style={styles.tableRowText}>50</Text>
            <Text style={styles.tableRowText}>$5,000</Text>
            <Text style={styles.tableRowText}>Product 3</Text>
          </View>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#1E90FF",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  chartContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  chartImage: {
    width: "90%",
    height: 200,
    resizeMode: "contain"
  },
  tableContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  tableHeader: {
    backgroundColor: "#1E90FF",
    height: 40,
    justifyContent: "center",
    paddingLeft: 10
  },
  tableHeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 10
  },
  tableRowText: {
    flex: 1,
    fontSize: 16,
    textAlign: "center"
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  dropdownText: {
    fontSize: 16,
    paddingVertical: 5
  }
});
export default DashboardScreen;