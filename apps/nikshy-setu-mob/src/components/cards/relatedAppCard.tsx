import { Arrow_IC } from '@nikshay-setu-v3-monorepo/assets';
import { moderateScale, verticalScale } from '@nikshay-setu-v3-monorepo/utils';
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Column, Row } from '../commonCompoents/row_column';

export const RelatedAppsCard = () => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(moderateScale(70))).current;

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? moderateScale(70) : moderateScale(150), // Change 150 to desired expanded height
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View style={[styles.box, { height: animation }]}>
      <TouchableOpacity onPress={toggleExpand}>
        <Row style={styles.row}>
          <Column>
            <Text style={styles.title}>Related Applications</Text>
            <Text style={styles.subtitle}>Applications where you can find more about TB</Text>
          </Column>
          <Arrow_IC />
        </Row>
        {expanded && <View><Text>Related Applications</Text></View>}

      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F8FAFF",
    borderRadius: moderateScale(5),
    margin: moderateScale(10),
    elevation: 3,
    shadowColor: "black",
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(10),
  },
  title: {
    color: "#394F89",
    fontSize: moderateScale(22),
    fontWeight: "500",
    marginBottom: verticalScale(2),
  },
  subtitle: {
    fontFamily: "Maison-Regular",
  },
});
export default RelatedAppsCard;
