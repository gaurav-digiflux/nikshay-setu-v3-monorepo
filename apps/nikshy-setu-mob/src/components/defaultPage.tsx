import { Arrow_IC, Bell_IC, Languages_IC, SideBarBTN_IC } from '@nikshay-setu-v3-monorepo/assets';
import { fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import { themeProps } from '@nikshay-setu-v3-monorepo/types';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Drawer } from './commonCompoents/drawer';
import { Row } from './commonCompoents/row_column';

interface ScreenContainerProps {
  children?: React.ReactNode;
  statusBarColor?: string;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
  style?: ViewStyle;
  appBar?: boolean
  backBtn?: boolean
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  statusBarColor,
  statusBarStyle = 'light-content',
  style,
  appBar,
  backBtn
}) => {
  const { colors } = useTheme() as unknown as themeProps;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarColor || colors.white}
      />
      {appBar && <Row style={{ backgroundColor: "white", height: 50, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
        <Row style={{ alignItems: "center" }}>
          <SideBarBTN_IC width={40} height={40} onPress={() => {
            setDrawerOpen(!drawerOpen)
          }} />
          <Text style={{ ...fontStyles.Maison_700_28PX_33LH, marginStart: 5, color: "#394F89" }}>Ni-kshay SETU</Text>
        </Row>
        <Row>
          <Languages_IC width={40} height={40} />
          <Bell_IC width={40} height={40} />
        </Row>
      </Row>}
      {backBtn &&
        <Row style={{ backgroundColor: "white", height: 50, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
          <TouchableOpacity style={{ alignItems: "center", flexDirection: "row" }} onPress={() => { navigation.goBack() }}>
            <Arrow_IC width={25} height={25} rotation={180} />
            <Text style={{ ...fontStyles.Maison_500_22PX_29LH, marginStart: 5, color: "#394F89" }}>Back</Text>
          </TouchableOpacity>
        </Row>}
      <SafeAreaView
        style={[
          style,
          {
            flex: 1,
            backgroundColor: colors.white,
          },
        ]}
      >
        {children}
      </SafeAreaView>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </React.Fragment>
  );
};

export default ScreenContainer;
