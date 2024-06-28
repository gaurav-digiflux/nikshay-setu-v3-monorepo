import { App_Lang_blue_IC, Application_Interaction_IC, Arrow_IC, Leaderboard_IC, Learn_case_findings_IC, Logout_IC, Ntep_info_IC, Patient_manage_tool, Referral_health_IC, Resource_materials_IC, SideBarBTN_IC } from '@nikshay-setu-v3-monorepo/assets';
import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Row } from './row_column';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Drawer = ({ isOpen, onClose }) => {
    const translateX = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

    const handleGesture = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    );

    const handleStateChange = event => {
        if (event.nativeEvent.state === State.END) {
            if (event.nativeEvent.translationX > SCREEN_WIDTH / 2) {
                onClose();
            } else {
                Animated.spring(translateX, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        }
    };

    React.useEffect(() => {
        if (isOpen) {
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(translateX, {
                toValue: -SCREEN_WIDTH,
                useNativeDriver: true,
            }).start();
        }
    }, [isOpen]);
    // ,
    // Ntep_info_IC,
    // Resource_materials_IC,
    // Referral_health_IC,
    // Application_Interaction_IC,
    // Knowled_ass_IC,
    // App_Lang_blue_IC,
    // Logout_IC,
    // Leaderboard_IC,
    return (
        <PanGestureHandler
            onGestureEvent={handleGesture}
            onHandlerStateChange={handleStateChange}
        >
            <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
                <Row style={{ alignItems: "center" }}>
                    <SideBarBTN_IC width={40} height={40} onPress={() => {
                        Animated.spring(translateX, {
                            toValue: -SCREEN_WIDTH,
                            useNativeDriver: true,
                        }).start();
                    }} />
                    <Text style={{ fontSize: 27, marginStart: 5, fontWeight: "700", color: "#394F89" }}>Ni-kshay SETU</Text>
                </Row>
                <View style={{ backgroundColor: "gray", height: 1, marginVertical: 10 }} />
                <View style={{ backgroundColor: "#ffff", padding: 5, borderRadius: 10, marginTop: 10 }}>
                    {[
                        { icon: <Learn_case_findings_IC />, name: "Learn about Case Findings" },
                        { icon: <Patient_manage_tool />, name: "Patient Management Tool" },
                        { icon: <Ntep_info_IC />, name: "NTEP Intervention" },
                        { icon: <Resource_materials_IC />, name: "Resource Materials" },
                        { icon: <Referral_health_IC />, name: "Referral Health Facility" },
                        { icon: <Application_Interaction_IC />, name: "Application Interaction" },
                    ].map((item, index) => {
                        return (
                            <Row style={{ alignItems: "center", justifyContent: "space-between", }}>
                                <Row style={{ alignItems: "center", }}>
                                    {item.icon}
                                    <Text style={styles.drawerItem}>{item.name}</Text>
                                </Row>
                                <Arrow_IC />
                            </Row>
                        )
                    })}
                </View>
                <View style={{ backgroundColor: "#ffff", padding: 5, borderRadius: 10, marginTop: 20 }}>
                    {[
                        { icon: <Leaderboard_IC />, name: "Leaderboard" },
                    ].map((item, index) => {
                        return (
                            <Row style={{ alignItems: "center", justifyContent: "space-between", }}>
                                <Row style={{ alignItems: "center", }}>
                                    {item.icon}
                                    <Text style={styles.drawerItem}>{item.name}</Text>
                                </Row>
                                <Arrow_IC />
                            </Row>
                        )
                    })}

                </View>
                <View style={{ backgroundColor: "#ffff", padding: 5, borderRadius: 10, marginTop: 20 }}>
                    {[
                        { icon: <App_Lang_blue_IC />, name: "Application Language" },
                        { icon: <Logout_IC />, name: "Sign Out" },
                    ].map((item, index) => {
                        return (
                            <Row style={{ alignItems: "center", justifyContent: "space-between", }}>
                                <Row style={{ alignItems: "center", }}>
                                    {item.icon}
                                    <Text style={styles.drawerItem}>{item.name}</Text>
                                </Row>
                                <Arrow_IC />
                            </Row>
                        )
                    })}
                </View>
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        width: SCREEN_WIDTH * 0.75,
        height: '100%',
        backgroundColor: '#F8FAFF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        paddingHorizontal: 10,
    },
    drawerItem: {
        fontSize: 15,
        padding: 15,
        fontWeight: "500",
        alignItems: "center"
    },
});
