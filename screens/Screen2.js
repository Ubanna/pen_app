import React from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/styles";

const { height } = Dimensions.get("screen");

const H_MAX_HEIGHT = height / 4.5;

const items = [
  {
    id: 1,
    name: "Retirement Lifestyle",
    color: "#D0D0D0",
  },
  {
    id: 2,
    name: "Budget Benchmark",
    color: "#C0C0C0",
  },
  {
    id: 3,
    name: "Timeline",
    color: "#A9A9A9",
  },
  {
    id: 4,
    name: "Life Expectancy",
    color: "#989898",
  },
  {
    id: 5,
    name: "Profile",
    color: "#808080",
  },
  {
    id: 6,
    name: "Current Lifestyle",
    color: '#707070',
  },
  {
    id: 7,
    name: "Career Path",
    color: "#606060",
  },
];

const Screen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            paddingTop: H_MAX_HEIGHT,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item) => (
            <View
              key={item.id}
              style={{
                padding: 10,
                height: 85.7,
                borderWidth: 1,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                backgroundColor: item.color,
                marginTop: item.id === 1 ? null : -16
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Roboto_Regular",
                  top: 7,
                  left: 15,
                }}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          padding: 10,
          backgroundColor: "#fff",
          height: H_MAX_HEIGHT,
        }}
      >
        <View style={styles.container}>
          <View style={styles.altTitleContainer}>
            <Text style={styles.altTitleText}>Life Plan</Text>
          </View>

          <View style={[styles.altLifeStyleContainer]}>
            <Text style={styles.altLifeStyleText}>
              Your Desired Retirement lifestyle monthly cost is:
            </Text>
            <Text style={styles.altLifeStyleSubText}>&#163;2,779</Text>
          </View>

          <View style={styles.otherLifeStyleContainer}>
            <Text style={styles.otherLifeStyleText}>
              Require 30 year pension fund:
            </Text>
            <Text style={styles.otherLifeStyleSubText}>{' '} &#163;718,925</Text>
          </View>

          <View style={styles.fakeDots}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#787878",
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#BEBEBE",
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#BEBEBE",
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#BEBEBE",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen2;