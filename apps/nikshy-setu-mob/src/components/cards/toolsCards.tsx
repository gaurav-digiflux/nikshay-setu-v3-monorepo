import { moderateScale, verticalScale } from '@nikshay-setu-v3-monorepo/utils';
import React from 'react';
import { Image, ImageSourcePropType, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

interface ToolsCardProps {
    ImageSrc: ImageSourcePropType;
    Title: string
}

const ToolsCard: React.FC<ToolsCardProps> = ({ ImageSrc, Title }) => {
    return (
        <Pressable
            style={{
                alignContent: 'center',
                alignSelf: 'center',
                justifyContent: "center",
                flex: 1,
            }}
        >
            <View
                style={[
                    styles.container,
                    styles.iosShadow,
                    { backgroundColor: '#ffffff' },
                ]}
            >
                <Image source={ImageSrc} style={styles.img} />
            </View>
            <Text style={{ textAlign: "center", fontWeight: "500", fontSize: moderateScale(12), marginTop: verticalScale(5) }}>{Title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 100,
        margin: 5,
        alignContent: "center",
        alignSelf: "center",
        flex: 1,
        elevation: 5,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
    },
    iosShadow: {
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
    },
    img: {
        height: 40,
        width: 40,
    },
});

export default ToolsCard;
