import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const Homescreen = () => {
  const insights = [
    { id: "1", title: "Scanned", count: 483, icon: "📷", color: "#E3F2FD" },
    { id: "2", title: "Counterfeits", count: 32, icon: "⚠️", color: "#FFEBEE" },
    { id: "3", title: "Success", count: 8, icon: "✅", color: "#E8F5E9" },
    { id: "4", title: "Directory", count: 26, icon: "📅", color: "#E3F2FD" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>User</Text>
        </View>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.gridContainer}>
        {insights.map((item) => (
          <View key={item.id} style={[styles.card, { backgroundColor: item.color }]}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCount}>{item.count}</Text>
          </View>

        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "#666",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cardIcon: {
    fontSize: 30,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  cardCount: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});

export default Homescreen;
