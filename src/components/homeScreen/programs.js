const Programs = () =>{
    return(
        <View style={styles.content}>
        <ImageBackground
          source={require("../../../assets/s2.jpg")}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
        >
          <View style={{ height: 200 }} />
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ margin: 10 }}>Klab start up</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <TouchableOpacity style={{ right: 10 }}>
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("join");
                }}
                style={{
                  width: 50,
                  height: 25,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 25,
                }}
              >
                <Text style={{ color: "white" }}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ margin: 10 }}>
              kLab Rwanda is hosting an info session to present to the
              entrepreneurs about alibaba's ecosystem and training programs
              that they have in place. The participants can be tech
              entrepreneurs. they are not only focusing on ecommerce...
              <TouchableOpacity>
                <Text>Read More</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ImageBackground
          source={require("../../../assets/s1.jpg")}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
        >
          <View style={{ height: 200 }} />
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ margin: 10 }}>Klab Events</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <TouchableOpacity style={{ right: 10 }}>
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 50,
                  height: 25,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 25,
                }}
              >
                <Text style={{ color: "white" }}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ margin: 10 }}>
              kLab Rwanda is hosting an info session to present to the
              entrepreneurs about alibaba's ecosystem and training programs
              that they have in place. The participants can be tech
              entrepreneurs. they are not only focusing on ecommerce...
              <TouchableOpacity>
                <Text>Read More</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ImageBackground
          source={require("../../../assets/s3.jpg")}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
        >
          <View style={{ height: 200 }} />
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ margin: 10 }}>Future Coders</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <TouchableOpacity style={{ right: 10 }}>
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("join");
                }}
                style={{
                  width: 50,
                  height: 25,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 25,
                }}
              >
                <Text style={{ color: "white" }}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ margin: 10 }}>
              kLab Rwanda is hosting an info session to present to the
              entrepreneurs about alibaba's ecosystem and training programs
              that they have in place. The participants can be tech
              entrepreneurs. they are not only focusing on ecommerce...
              <TouchableOpacity>
                <Text>Read More</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ImageBackground
          source={require("../../../assets/s4.jpg")}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
        >
          <View style={{ height: 200 }} />
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ margin: 10 }}>Tech Up Skill</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <TouchableOpacity style={{ right: 10 }}>
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 50,
                  height: 25,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 25,
                }}
              >
                <Text style={{ color: "white" }}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ margin: 10 }}>
              kLab Rwanda is hosting an info session to present to the
              entrepreneurs about alibaba's ecosystem and training programs
              that they have in place. The participants can be tech
              entrepreneurs. they are not only focusing on ecommerce...
              <TouchableOpacity>
                <Text>Read More</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    );
};

export default Programs;