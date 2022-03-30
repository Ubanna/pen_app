import React, { useRef } from "react";
import {
  View,
  Animated,
  Image,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import styles from "../styles/styles";

const { width, height } = Dimensions.get("screen");

const H_MAX_HEIGHT = height / 1.8;
const H_MIN_HEIGHT = 202;
// const H_MAX_HEIGHT = 190;
// const H_MIN_HEIGHT = 60;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const items = [
  {
    id: 1,
    name: "Retirement Lifestyle",
    color: "red",
  },
  {
    id: 2,
    name: "Budget Benchmark",
    color: "blue",
  },
  {
    id: 3,
    name: "Timeline",
    color: "green",
  },
  {
    id: 4,
    name: "Life Expectancy",
    color: "violet",
  },
  {
    id: 5,
    name: "Profile",
    color: "pink",
  },
  {
    id: 6,
    name: "Current Lifestyle",
  },
  {
    id: 7,
    name: "Career Path",
    color: "yellow",
  },
];

const Dashboard = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    // outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    outputRange: [0, -H_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const titleScale = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE / 2, H_SCROLL_DISTANCE],
    outputRange: [0.8, 0.9, 1],
    extrapolate: "clamp",
  });
  const titleTranslateY = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [0, H_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });
  const titleTranslateX = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [-30, -30],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const imageTranslateY = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [0, 75],
    extrapolate: "clamp",
  });
  const imageScale = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [1, 0.5],
    extrapolate: "clamp",
  });

  //   const viewFlex = scrollOffsetY.interpolate({
  //     inputRange: [0, H_SCROLL_DISTANCE],
  //     outputRange: ['row', 'column'],
  //     extrapolate: "clamp"
  // });

  // console.log('viewFlex:', viewFlex)

  // headerBg = this.scroll.interpolate({
  //   inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT],
  //   outputRange: ["black", 'white'],
  //   extrapolate: "clamp"
  // });

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }]
          //   {
          //     useNativeDriver: true,
          // }
        )}
        scrollEventThrottle={16}
        //   contentOffset={{
        //     y: H_SCROLL_DISTANCE,
        // }}
      >
        <View style={{ paddingTop: H_MAX_HEIGHT }}>
          {/** Page contant goes here **/}

          {/* <View style={{ padding: 20 }}>
            <Text>React Native Collapsible Header</Text>
          </View> */}

          {items.map((item) => (
            <View
              key={item.id}
              style={{
                // padding: 20,
                // height: 85.7,
                height: 70,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                backgroundColor: item.color,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          ))}

          {/* <View style={{ padding: 20, height: 200, backgroundColor: "red" }}>
            <Text>View 1</Text>
          </View>

          <View style={{ padding: 20, height: 200, backgroundColor: "yellow" }}>
            <Text>View 1</Text>
          </View>

          <View style={{ padding: 20, height: 200, backgroundColor: "green" }}>
            <Text>View 1</Text>
          </View> */}
        </View>
      </Animated.ScrollView>

      {/**
       * We put the header at the bottom of
       * our JSX or it will not take priority
       * on Android (for some reason, simply
       * setting zIndex does not work)
       **/}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          // height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          // STYLE
          // borderBottomColor: "#EFEFF4",
          // borderBottomWidth: 2,
          padding: 10,
          // backgroundColor: "gray",
          // others
          // transform: [{scale: titleScale}, {translateY: titleTranslate}],
          height: H_MAX_HEIGHT,
          transform: [{ translateY: headerScrollHeight }],
        }}
      >
        {/* <Image
          source={{ uri: "https://via.placeholder.com/300" }}
          style={{ flex: 1 }}
          resizeMode={"contain"}
        /> */}
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Animated.View
              style={[
                {
                  transform: [
                    { scale: titleScale },
                    { translateY: titleTranslateY },
                    { translateX: titleTranslateX },
                  ],
                },
              ]}
            >
              <Text style={styles.titleText}>Life Plan</Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: imageOpacity,
                transform: [
                  { scale: imageScale },
                  { translateY: imageTranslateY },
                ],
              }}
            >
              <Text style={styles.subTitleText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum text ever since the 1500s
              </Text>
              {/* <Text style={styles.subTitleText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum text ever since the 1500s
              </Text> */}
            </Animated.View>
          </View>

          <View style={[styles.lifeStyleContainer]}>
            <Animated.View
              style={{
                transform: [
                  { scale: titleScale },
                  { translateY: titleTranslateY },
                  { translateX: titleTranslateX },
                ],
              }}
            >
              <Text style={styles.lifeStyleText}>
                Your Desired Retirement lifestyle monthly cost is:
              </Text>
            </Animated.View>

            <Text style={styles.lifeStyleSubText}>$2,779</Text>
          </View>

          <View style={styles.lifeStyleContainer}>
            <Text style={styles.lifeStyleText}>
              Amount required in oyur pension for 30 years
            </Text>
            <Text style={styles.lifeStyleSubText}>$718,925</Text>
          </View>

          {/* <View style={styles.slideContainer}>
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
                Retiring {"\n"} In London
              </Text>
              <Text style={styles.slideItemSubText}>65</Text>
            </View>
          </View> */}

          {/* <View style={styles.fakeDots}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "black",
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
              }}
            />
          </View> */}
        </View>
      </Animated.View>
    </View>
  );
};

export default Dashboard;
