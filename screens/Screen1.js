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

const H_MAX_HEIGHT = height / 1.8;

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
];

const Screen1 = () => {
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
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Life Plan</Text>

            <Text style={styles.subTitleText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum text ever since the 1500s
            </Text>
          </View>

          <View style={[styles.lifeStyleContainer]}>
            <Text style={styles.lifeStyleText}>
              Your Desired Retirement lifestyle monthly cost is:
            </Text>
            <Text style={styles.lifeStyleSubText}>&#163;2,779</Text>
          </View>

          <View style={styles.lifeStyleContainer}>
            <Text style={styles.lifeStyleText}>
              Amount required in your pension for 30 years
            </Text>
            <Text style={styles.lifeStyleSubText}>&#163;718,925</Text>
          </View>

          <View style={styles.slideContainer}>
            <View style={styles.slideItemContainer}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 12.5,
                  borderWidth: 1,
                  marginTop: 5,
                }}
              />
              <Text style={styles.slideItemText}>
                Your {"\n"} Retirement Age
              </Text>
              <Text style={styles.slideItemSubText}>65</Text>
            </View>

            <View style={styles.slideItemContainer}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 12.5,
                  borderWidth: 1,
                }}
              />
              <Text style={styles.slideItemText}>
                Retiring {"\n"} With Spouse
              </Text>
              <Entypo name="check" size={33} color="#000" style={{ top: 5 }} />
            </View>

            <View style={styles.slideItemContainer}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 12.5,
                  borderWidth: 1,
                }}
              />
              <Text style={styles.slideItemText}>
                Retiring {"\n"} In London
              </Text>
              <Entypo name="check" size={33} color="#000" style={{ top: 5 }} />
            </View>
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

export default Screen1;
