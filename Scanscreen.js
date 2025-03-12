import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.scanContainer}>
        <Image
          source={{ uri: "https://media.discordapp.net/attachments/1080376174733176883/1349267853932757003/z6399047419606_dedac5d653ef7a149052b68ed3a9edad.jpg?ex=67d27b1c&is=67d1299c&hm=fef46d702d115edf07518963be40d759a63c33414ae5b41ec4f9beb208438f21&=&format=webp&width=430&height=930" }}
          style={styles.bottleImage}
        />
      </View>

      <View style={styles.scanFrame} />

      <View style={styles.productCard}>
        <Image
          source={{ uri: "https://media.discordapp.net/attachments/1080376174733176883/1349267853932757003/z6399047419606_dedac5d653ef7a149052b68ed3a9edad.jpg?ex=67d27b1c&is=67d1299c&hm=fef46d702d115edf07518963be40d759a63c33414ae5b41ec4f9beb208438f21&=&format=webp&width=430&height=930" }}
          style={styles.productImage}
        />
        <View>
          <Text style={styles.productOwner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 8,
  },
  scanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottleImage: {
    width: 200,
    height: 400,
    resizeMode: "contain",
  },
  scanFrame: {
    position: "absolute",
    top: "30%",
    left: "10%",
    width: "80%",
    height: "40%",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    opacity: 0.6,
  },
  productCard: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "light orange",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  productOwner: {
    fontSize: 12,
    color: "#888",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    marginLeft: "auto",
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 20,
  },
});

export default ScanScreen;
