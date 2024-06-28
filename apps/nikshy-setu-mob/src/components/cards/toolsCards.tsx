import { fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import { verticalScale } from '@nikshay-setu-v3-monorepo/utils';
import React, { ReactNode } from 'react';
import { Image, ImageSourcePropType, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';



interface ToolsCardContainerProps {
    children: ReactNode;
}

const ToolsCardContainer: React.FC<ToolsCardContainerProps> = ({ children }) => (
    <View
        style={[
            styles.container,
            styles.iosShadow,
            { backgroundColor: '#ffffff' },
        ]}
    >
        {children}
    </View>
);
const ToolsCardImage: React.FC<{ ImageSrc?: ImageSourcePropType }> = ({ ImageSrc }) => (
    ImageSrc ? <Image source={ImageSrc} style={styles.img} /> : null
);

const ToolsCardTitle: React.FC<{ Title: string }> = ({ Title }) => (
    <Text style={{ textAlign: "center", marginTop: verticalScale(5), ...fontStyles.Maison_500_12PX_15LH }}>{Title}</Text>
);

const ToolsCardSvgImage: React.FC<{ SvgImg?: React.FC<SvgProps> }> = ({ SvgImg }) => (
    SvgImg ? <SvgImg height={40} width={40} /> : null
);
interface ToolsCardProps {
    ImageSrc?: ImageSourcePropType | null;
    Title: string;
    SvgImg?: React.FC<SvgProps>;
}

const ToolsCard: React.FC<ToolsCardProps> = ({ ImageSrc, Title, SvgImg }) => {
    return (
        <Pressable
            style={{
                alignContent: 'center',
                alignSelf: 'center',
                justifyContent: "center",
                flex: 1,
            }}
        >
            <ToolsCardContainer>
                {ImageSrc ? <ToolsCardImage ImageSrc={ImageSrc} /> : <ToolsCardSvgImage SvgImg={SvgImg} />}
            </ToolsCardContainer>
            <ToolsCardTitle Title={Title} />
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
