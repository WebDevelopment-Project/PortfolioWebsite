import * as React from "react";
import { View, Text, StatusBar, Button, Image, Dimensions,ImageBackground } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { openBrowserAsync } from 'expo-web-browser';
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";

//import background from '../assets/images/background1.png';

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
};

const Colors = {
  theme: "#0E3A62",
  themeLight: "#104779",
  themeDark: '#1E3A53',
  white: "#fff",
  greyish: "#a4a4a4"
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-php",
  "language-python",
  "language-java",
  "language-c",
  "language-typescript",
  "microsoft-office",
  "microsoft-visual-studio-code",
  "android-studio"
];

const skillWithIcon = [
  {
    name: "Java",
    icon: "language-java"
  },
  {
    name: "Android Studio",
    icon: "android-studio"
  },
  {
    name: "React Native",
    icon: "react"
  },
  {
    name: "HTML",
    icon: "language-html5"
  },
  {
    name: "CSS",
    icon: "language-css3"
  },
  {
    name: "JavaScript",
    icon: "language-javascript"
  },
  {
    name: "PHP",
    icon: "language-php"
  },
  {
    name: "Python",
    icon: "language-python"
  },
  {
    name: "C",
    icon: "language-c"
  },
  {
    name: "TypeScript",
    icon: "language-typescript"
  },
  {
    name: "MS Office",
    icon: "microsoft-office"
  },
  {
    name: "VS Code",
    icon: "microsoft-visual-studio-code"
  }
]

export default function App(props: any){
  return(
    <ScrollView horizontal >
      <ScrollView style = {{ flex: 1 }} >

        <ImageBackground 
          style = {{ flex: 1, justifyContent: 'space-evenly', opacity: 20 }}
          source = { require('./assets/images/background5.jpg')}
          //source = {{ uri: 'https://as2.ftcdn.net/v2/jpg/02/12/65/93/1000_F_212659341_3teZ8qGtRuBx2zVfzOjoIrEJv4q7WuuQ.jpg' }}
        > 
      
        <StatusBar 
        translucent = { false }
        barStyle = "dark-content"
        backgroundColor = { Colors.theme } 
        />

        <View 
          style = {{ 
            backgroundColor: Colors.theme,
            width: Layout.width * 0.989,
            paddingBottom: Layout.height*0.05, 
            borderBottomLeftRadius: Layout.width*0.03,
            borderBottomRightRadius: Layout.width*0.03,
            borderTopLeftRadius: Layout.width*0.03,
            borderTopRightRadius: Layout.width*0.03
          }}
        >
          
          <View>

              <Text 
                style = {{ 
                  fontSize: 40, 
                  color: Colors.white, 
                  fontFamily: "Lucida Console", 
                  marginStart:550,
                  marginTop: 50 
                }}
              >
                JENOSHA VISAKARASA
              </Text>

              <Text 
                style = {{ 
                  color: Colors.greyish, 
                  fontSize: 25, 
                  fontFamily: "Courier New",
                  marginStart: 230,
                  marginTop: 8
                }}
              >
                BSc(Hons) Undergraduate at University of Colombo Faculty of Science
              </Text>

          </View>

          <View 
            style = {{ 
              flexDirection: "row",
              marginStart: 682,
              paddingHorizontal: 32,
              marginVertical: 20,
              marginHorizontal: 15
            }}
          >

            <MaterialCommunityIcons 
              name = "facebook"
              size = {30}
              style = {{ color: Colors.white, marginEnd: 10 }}
              onPress={() => Linking.openURL('https://www.facebook.com/jenosha.visakarasa?mibextid=9R9pXO')}
            />

            <MaterialCommunityIcons 
              name = "instagram"
              size = {30}
              style = {{ color: Colors.white, marginEnd: 10 }}
              onPress={() => Linking.openURL('https://www.instagram.com/jenoshavisakarasa/')}
            />

            <MaterialCommunityIcons 
              name = "linkedin"
              size = {30}
              style = {{ color: Colors.white }}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/jenosha-visakarasa-a542ba217')}
            />
      
          </View>

          <View 
            style = {{
              flexDirection: "row",
              paddingHorizontal: 40,
              marginVertical: 15,
              //alignItems: "center",
              justifyContent: "flex-start"
            }}
          >

            <Image 
              source = { require("./assets/images/jenosha.png")}
              style = {{ width: 280, height: 350, borderRadius: 25, marginRight: 20 }}
            />

            <View style = {{ marginTop: 40, marginStart: 20 }}>

              <Text style = {{ fontSize: 25, color: Colors.white, fontFamily: "Lucida Console" }}>
                CONTACT 
              </Text>

              <View style = {{ flexDirection: "row", marginTop: 20, marginBottom: 5 }}>
                
                <MaterialCommunityIcons 
                  name="phone" 
                  size={15} 
                  color={Colors.greyish}
                  style = {{marginEnd: 10, marginTop: 2 }}
                />

                <Text style = {{ color: Colors.greyish, fontSize: 20, fontFamily: "Courier New"}}>
                  +94 74 2637 563
                </Text>

              </View>

              <View style = {{ flexDirection: "row", marginBottom: 7 }}>
                
                <MaterialCommunityIcons 
                  name="email" 
                  size={15} 
                  color={Colors.greyish}
                  style = {{marginEnd: 10, marginTop: 3 }} 
                />

                <Text style = {{ color: Colors.greyish, fontSize: 20, fontFamily: "Courier New"}}>
                  jenoshavisakarasa11@gmail.com 
                </Text>

              </View>

              <View style = {{ flexDirection: "row", marginBottom: 5 }}>
                
                <MaterialCommunityIcons 
                  name="home" 
                  size={15} 
                  color={Colors.greyish}
                  style = {{marginEnd: 10, marginTop: 3 }} 
                />

                <Text style = {{ color: Colors.greyish, fontSize: 20, fontFamily: "Courier New"}}>
                  No 18, Kulappiddy Road, Aanaicooddai, Jaffna 
                </Text>
                
              </View>

            </View>

          </View>

        </View>

        <View
          style = {{
            backgroundColor: Colors.white,
            marginHorizontal: 500,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
            marginTop: -Layout.height*0.27,
            width: 500
          }}>

          <View
            style = {{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
              marginTop: 3
            }}
          >

            <Text 
              style ={{ 
                fontSize: 20, 
                fontFamily: "Helvetica", 
                marginBottom: 5, 
                color: Colors.themeDark,
                fontWeight: "600" 
              }}
            >
              Bio
            </Text>

            <AntDesign name="user" size={20} color={Colors.themeDark} style = {{ fontWeight: "bold"}} />

          </View>

          <View>

            <Text style = {{ color: Colors.themeLight, fontSize: 15, alignContent: "center" }}>
            A friendly, motivated, personable and
            adoptable undergraduate pursuing a
            BSc ( Hons ) in Electronics and Information
            Technology at University of Colombo, seeking
            a position in software engineering. I am eager
            to contribute my skills and knowledge to
            achieve the objectives of the organization
            while enhancing my abilities 
            </Text>

          </View>

        </View>

        <View
          style = {{
            backgroundColor: Colors.theme,
            marginHorizontal: 400,
            padding: 30,
            borderRadius: 20,
            elevation: 18,
            marginBottom: 16,
            width: 700,
            alignContent: "center"
          }}>

          <View
            style = {{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
              marginTop: 3
            }}
          >

            <Text 
              style ={{ 
                color: Colors.white, 
                fontSize: 20, 
                fontFamily: "Helvetica", 
                marginBottom: 2,
                fontWeight: "550" 
              }}
            >
              Technical Skills
            </Text>

            <MaterialCommunityIcons name="pen" size={20} style = {{ color: Colors.white, marginTop: 5 }}/>

          </View>

          <ScrollView horizontal>
            { skillWithIcon.map( skill => (
              <View
                key = {skill.name}
                style = {{
                  backgroundColor: Colors.white,
                  marginBottom: 16,
                  marginHorizontal: 8,
                  padding: 20,
                  borderRadius: 16,
                  alignItems: "center",
                  width: Layout.width * 0.15
                }}>
                <Text style = {{ fontSize: 20, color: Colors.themeDark, fontWeight: "600" }}>
                  { skill.name }
                </Text>
                <MaterialCommunityIcons 
                  name = { skill.icon } 
                  size={ 100 } 
                  style = {{ color: Colors.themeLight, marginVertical: 40 }} />
              </View>
            ))}

          </ScrollView>

        </View>

        <View
          style = {{
            backgroundColor: Colors.theme,
            marginHorizontal: 500,
            padding: 40,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
            width: 500
          }}>

          <View
            style = {{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
              marginTop: 3
            }}
          >

            <Text 
              style ={{ 
                color: Colors.white, 
                fontSize: 20, 
                fontFamily: "Helvetica", 
                marginBottom: 5,
                fontWeight: "600" 
              }}
            >
              Projects
            </Text>

            <MaterialCommunityIcons name="notebook" size={20} style = {{ color: Colors.white, marginTop: 5 }}/>

          </View>

          <View 
            style = {{
              backgroundColor: Colors.white,
              //marginHorizontal: 500,
              padding: 40,
              borderRadius: 20,
              elevation: 8,
              //marginBottom: 10,
              //width: 400
            }}
          >

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18 
              }}
            >
              1. Personal Website Design   
            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15,
                marginBottom: 8
              }}
            >
              {'            '}HTML / CSS 
            </Text>

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18,
                flexDirection: "row"
              }}
            >
              2. Bicycle Rental Mobile App   

              <Text
                style = {{
                  color: Colors.themeLight,
                  fontFamily: "Courier New",
                  fontSize: 15,
                  fontWeight: "600"
                }}
                onPress={() => Linking.openURL('https://github.com/jeno11/BicycleRentel')}
              >
                {'  '}Git Link 
              </Text>
            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15,
                marginBottom: 8
              }}
            >
              {'            '}Android Studio 
            </Text>

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18 
              }}
            >
              3. Flappy Bird Game Design   

              <Text
                style = {{
                  color: Colors.themeLight,
                  fontFamily: "Courier New",
                  fontSize: 15,
                  fontWeight: "600"
                }}
                onPress={() => Linking.openURL('https://github.com/jeno11/FlappyBird.java')}
              >
                {'  '}Git Link 
              </Text>

            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15,
                marginBottom: 8
              }}
            >
              {'            '}Jave ( IntelliJ IDEA ) 
            </Text>

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18 
              }}
            >
              4. Machine Learning Project   
            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15,
                marginBottom: 8
              }}
            >
              {'            '}Python ( Google Colab ) 
            </Text>

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18 
              }}
            >
              5. Personal Website Design 

              <Text
                style = {{
                  color: Colors.themeLight,
                  fontFamily: "Courier New",
                  fontSize: 15,
                  fontWeight: "600"
                }}
                onPress={() => Linking.openURL('https://github.com/WebDevelopment-Project/PortfolioWebsite')}
              >
                {'  '}Git Link 
              </Text>
                
            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15,
                marginBottom: 8
              }}
            >
              {'            '}React Native 
            </Text>

            <Text 
              style = {{ 
                color: Colors.themeDark, 
                fontFamily: "Georgia",
                fontSize: 18 
              }}
            >
              6. IoT Based Projects   
            </Text>
            <Text
              style = {{
                color: Colors.themeLight,
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontSize: 15
              }}
            >
              {'            '}Arduino IDE 
            </Text>
                
          </View>

        </View>

        </ImageBackground>

      </ScrollView>
      
    </ScrollView>
  );
}