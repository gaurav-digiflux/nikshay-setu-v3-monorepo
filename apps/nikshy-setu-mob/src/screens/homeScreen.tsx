import { Arrow_IC, Compass_IC, History_IC, Mic_IC, ReletedApp1, ReletedApp2, ReletedApp3, adr_IC, botHeyAnimation, diagnostic_care_IC, knowledge_assess_IC, knowledge_base_IC, manage_tb_IC, more_IC, query_res_man_IC, treatment_care_IC } from '@nikshay-setu-v3-monorepo/assets';
import { fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import { horizontalScale, moderateScale, verticalScale } from '@nikshay-setu-v3-monorepo/utils';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../components/TextComponent/gradientText';
import ToolsCard from '../components/cards/toolsCards';
import BottomSheet from '../components/commonCompoents/bottomSheet';
import { Column, Row } from '../components/commonCompoents/row_column';
import ScreenContainer from '../components/defaultPage';

const Dta = [{ name: "Knowledge Base", desc: "For the National TB Elimination Program - NTEP", image: knowledge_base_IC, gradient: ["#383A68", "#6F73CE"] },
{ name: "Manage TB India", desc: "The Union - IIPHG", image: manage_tb_IC, gradient: ["#0C3896", "#5D88E4"] },
{ name: "Query Response Management ", desc: "", image: query_res_man_IC, gradient: ["#0B4E67", "#61C9EF"] },
{ name: "Knowledge Assessments", desc: "", image: knowledge_assess_IC, gradient: ["#4B5F83", "#B1BED4"] }]


export const HomeScreen = () => {
  const navigation = useNavigation();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };


  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };


  return (
    <ScreenContainer appBar>
      <ScrollView>
        <LinearGradient
          colors={['#9C5ED740', '#635AD940', '#E8A0A040']}
          style={styles.gradient}
        >
          <Row style={{ justifyContent: "space-between", alignItems: "center", paddingBottom: verticalScale(20) }}>
            <LottieView
              autoPlay
              source={botHeyAnimation}
              loop={true}
              style={{
                height: verticalScale(120),
                width: horizontalScale(130),
                marginRight: verticalScale(-15)
              }}
            />
            <Column>
              <View>
                <GradientText
                  text={getGreeting()}
                  fontSize={moderateScale(32)}
                  fontWeight={700}
                  locations={{ x: 0, y: verticalScale(30) }}
                  height={verticalScale(40)}
                  isGradientFill
                  gradientColors={["#E8A0A0", "#9C5ED7", "#635AD9"]}
                />
              </View>
              <Text style={[fontStyles.Maison_500_20PX_25LH, { color: "#4D4D4D" }]}>How may I help you today?</Text>
            </Column>
          </Row>
        </LinearGradient>
        <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Row style={{
            marginHorizontal: horizontalScale(20),
            backgroundColor: "white",
            height: verticalScale(60),
            borderRadius: 10,
            marginTop: verticalScale(-20),
            elevation: 40,
            justifyContent: "space-between",
            alignItems: "center",
            padding: moderateScale(7),
            paddingHorizontal: horizontalScale(20)
          }}>
            <Text style={fontStyles.Maison_500_20PX_26LH}>Ask anything..</Text>
            <Row>
              <Mic_IC />
              <History_IC style={{ marginStart: horizontalScale(5) }} onPress={() => {
                console.log('omg click');
                navigation.navigate('QRMScreen')
              }} />
            </Row>
          </Row>
          <View style={{ flex: 1, margin: horizontalScale(5) }}>
            <FlatList
              numColumns={2}
              style={{ flex: 1, marginVertical: verticalScale(10) }}
              keyExtractor={(item) => item?.name}
              data={Dta}
              scrollEnabled={false}
              renderItem={(item) => {
                return (
                  <Pressable onPress={() => {
                    navigation.navigate('QRMScreen')
                  }}
                    style={{ flex: 1 }}>
                    <LinearGradient
                      colors={item.item.gradient}
                      style={{ flex: 1, marginHorizontal: horizontalScale(10), marginVertical: verticalScale(5), borderRadius: 5, padding: moderateScale(5) }}>
                      <Compass_IC style={{ alignSelf: "flex-end", }} />
                      <View style={{ marginHorizontal: horizontalScale(2) }}>
                        <Image source={item.item.image} style={{ height: verticalScale(35), width: horizontalScale(35), marginBottom: verticalScale(5) }} />
                        <Text style={{ ...fontStyles.Maison_500_18PX_21LH, color: "white" }}>{item.item.name}</Text>
                        <Text style={{ ...fontStyles.Maison_500_10PX_13LH, color: "white", marginTop: verticalScale(5) }}>{item.item.desc}</Text>
                      </View>
                    </LinearGradient>
                  </Pressable>)
              }}
            />
            <View style={{ flex: 1, marginHorizontal: horizontalScale(10) }}>
              <Row style={{ alignItems: "flex-start", marginVertical: verticalScale(10) }}>
                <Text style={{ color: "#4D4D4D", ...fontStyles.Maison_500_22PX_29LH }}>Tools</Text>
              </Row>
              <Row style={{ alignItems: "flex-start", }}>
                {[{ image: adr_IC, title: "Case Finding" }, { image: diagnostic_care_IC, title: "some module" }, { image: treatment_care_IC, title: "Ni-kshay" }, { image: more_IC, title: "More" },].map((item, index) => {
                  return (
                    <ToolsCard key={index + "ToolsCard"} ImageSrc={item.image} Title={item.title} />)
                })}
              </Row>
            </View>

            <TouchableOpacity onPress={toggleBottomSheet} style={{ backgroundColor: "#F8FAFF", borderRadius: moderateScale(5), margin: moderateScale(10), elevation: 3, shadowColor: "black", marginVertical: verticalScale(30) }}>
              <Row style={{ justifyContent: "space-between", alignItems: "center", padding: moderateScale(10) }}>
                <Column>
                  <Text style={{ color: "#394F89", ...fontStyles.Maison_500_22PX_29LH, marginBottom: verticalScale(2) }}>Related Applications</Text>
                  <Text style={fontStyles.Maison_500_12PX_15LH}>Applications where you can find more about TB</Text>
                </Column>
                <Arrow_IC />
              </Row>
            </TouchableOpacity>
            <View style={{ flex: 1, marginHorizontal: horizontalScale(10) }}>
              <Row style={{ alignItems: "flex-start", marginVertical: verticalScale(10) }}>
                <Text style={{ color: "#4D4D4D", ...fontStyles.Maison_500_22PX_29LH }}>News Feed</Text>
              </Row>
            </View>
          </View>
        </View>

      </ScrollView>
      <BottomSheet isOpen={bottomSheetOpen} toggleBottomSheet={toggleBottomSheet}>
        <Text style={[fontStyles.Maison_600_20PX_23LH, { marginVertical: moderateScale(10) }]} >Related Applications</Text>
        <FlatList
          numColumns={3}
          // style={{ flex: 1 }}
          // contentContainerStyle={{ alignItems: "flex-start" }}
          keyExtractor={(item) => item?.title}
          data={[
            { image: null, svg: ReletedApp1, title: "Ni-kshay" },
            { svg: ReletedApp2, title: "Prevent TB India" },
            { svg: ReletedApp3, title: "TB Aarogya Sathi" },
            { image: null, svg: ReletedApp1, title: "Ni-kshay" },
            { svg: ReletedApp3, title: "TB Aarogya Sathi" },
            { svg: ReletedApp3, title: "TB Aarogya Sathi" },
          ]}
          scrollEnabled={false}
          renderItem={({ item, index }) => {
            return (
              <ToolsCard key={index + "ToolsCard"} ImageSrc={item.image} Title={item.title} SvgImg={item.svg} />)
          }} />
      </BottomSheet>
    </ScreenContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -10
  },
  gradientText: {
    padding: 10,
    borderRadius: 5,
  },
  text1: {
    fontSize: moderateScale(25),
    fontWeight: '900',
  },
  text2: {
    fontSize: moderateScale(20),
    fontWeight: '500',
  },


});
