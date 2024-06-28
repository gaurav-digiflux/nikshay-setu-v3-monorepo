import { Arrow_IC, Compass_IC, History_IC, Mic_IC, adr_IC, botHeyAnimation, diagnostic_care_IC, knowledge_assess_IC, knowledge_base_IC, manage_tb_IC, more_IC, query_res_man_IC, treatment_care_IC } from '@nikshay-setu-v3-monorepo/assets';
import { horizontalScale, moderateScale, verticalScale } from '@nikshay-setu-v3-monorepo/utils';
import LottieView from 'lottie-react-native';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../components/TextComponent/gradientText';
import ToolsCard from '../components/cards/toolsCards';
import { Column, Row } from '../components/commonCompoents/row_column';
import ScreenContainer from '../components/defaultPage';

const Dta = [{ name: "Knowledge Base", desc: "For the National TB Elimination Program - NTEP", image: knowledge_base_IC, gradient: ["#383A68", "#6F73CE"] },
{ name: "Manage TB India", desc: "The Union - IIPHG", image: manage_tb_IC, gradient: ["#0C3896", "#5D88E4"] },
{ name: "Query Response Management ", desc: "", image: query_res_man_IC, gradient: ["#0B4E67", "#61C9EF"] },
{ name: "Knowledge Assessments", desc: "", image: knowledge_assess_IC, gradient: ["#4B5F83", "#B1BED4"] }]


export const HomeScreen = () => {
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
              <Text style={styles.text2}>How may I help you today?</Text>
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
            <Text style={{ fontWeight: "500", fontSize: moderateScale(17) }}>Ask anything..</Text>
            <Row>
              <Mic_IC />
              <History_IC style={{ marginStart: horizontalScale(5) }} onPress={() => {
                console.log('omg click');
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
                  <LinearGradient
                    colors={item.item.gradient}
                    style={{ flex: 1, marginHorizontal: horizontalScale(10), marginVertical: verticalScale(5), borderRadius: 5, padding: moderateScale(5) }}>
                    <Compass_IC style={{ alignSelf: "flex-end", }} />
                    <Image source={item.item.image} style={{ height: verticalScale(35), width: horizontalScale(35), marginHorizontal: horizontalScale(10), marginBottom: verticalScale(5) }} />
                    <Text style={{ fontWeight: "500", fontSize: moderateScale(18), color: "white" }}>{item.item.name}</Text>
                    <Text style={{ fontWeight: "500", fontSize: moderateScale(12), color: "white", marginTop: verticalScale(5) }}>{item.item.desc}</Text>
                  </LinearGradient>)
              }}
            />
            <View style={{ flex: 1, marginHorizontal: horizontalScale(10) }}>
              <Row style={{ alignItems: "flex-start", marginVertical: verticalScale(10) }}>
                <Text style={{ color: "#4D4D4D", fontSize: moderateScale(22), fontWeight: "500" }}>Tools</Text>
              </Row>
              <Row style={{ alignItems: "flex-start", }}>
                {[{ image: adr_IC, title: "Case Finding" }, { image: diagnostic_care_IC, title: "some module" }, { image: treatment_care_IC, title: "Ni-kshay" }, { image: more_IC, title: "More" },].map((item, index) => {
                  return (
                    <ToolsCard ImageSrc={item.image} Title={item.title} />)
                })}
              </Row>
            </View>
            <View style={{ backgroundColor: "#F8FAFF", borderRadius: moderateScale(5), margin: moderateScale(10), elevation: 3, shadowColor: "black" }}>
              <Row style={{ justifyContent: "space-between", alignItems: "center", padding: moderateScale(10) }}>
                <Column>
                  <Text style={{ color: "#394F89", fontSize: moderateScale(22), fontWeight: "500", marginBottom: verticalScale(2) }}>Related Applications</Text>
                  <Text style={{ fontFamily: "Maison-Regular" }}>Applications where you can find more about TB</Text>
                </Column>
                <Arrow_IC />
              </Row>
            </View>
          </View>
        </View>
      </ScrollView>
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
