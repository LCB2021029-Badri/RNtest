import { StyleSheet, Text, View,  Image, TouchableOpacity, FlatList, Dimensions, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';

const DATA = [{
    title: 'clear your upcoming bills to earn coins',
    bank: 'SBI',
    cardNo: 'XXXX XXXX XXXX 3926',
    dueDate: 'DUE IN 2 DAYS',
    CTA: 'Pay now',
    amount: '26,943',
    icon: require('./assets/mudkip.jpeg'),
    adsView: false,
},
{
    title: 'activate your card to make your first payment and earn coins',
    bank: 'HDFC',
    cardNo: 'XXXX XXXX XXXX 9658',
    dueDate: 'DUE IN 7 DAYS',
    CTA: 'Activate',
    amount: '15,298',
    icon: require('./assets/mudkip.jpeg'),
    adsView: false,
},
{
    title: 'CRED store is now open for access',
    description: 'browse through our selection of curated products for you ',
    CTA: 'Explore store',
    icon: require('./assets/mudkip.jpeg'),
    adsView: true,
    bgColor: '#6234cd',
},
{
    title: 'clear your upcoming bills to earn coins',
    bank: 'SBI',
    cardNo: 'XXXX XXXX XXXX 3926',
    dueDate: 'DUE IN 2 DAYS',
    CTA: 'Pay now',
    amount: '26,943',
    icon: require('./assets/mudkip.jpeg'),
    adsView: false,
},
{
    title: 'your opinion matters',
    description: 'tell us about your CRED experience and we promise to make it better',
    CTA: 'Tell us now',
    icon: require('./assets/mudkip.jpeg'),
    adsView: true,
    bgColor: '#6234cd',
}];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1f2326'}}>
    <View style={styles.container}>

        <StatusBar  backgroundColor={'#1b1f21'} barStyle='light-content' />
        <TopView/>
        <FlatList
            style={{flex:0.87}}
            data={DATA}
            renderItem={itemView}
            ListHeaderComponent={headerComponent}
            showsVerticalScrollIndicator={false} />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const TopView = () => {
    return(
        <View style={styles.containerTopView}>

            <View style={{ flex: 0.2, paddingLeft: 15, paddingVertical: 2, justifyContent: 'center' }}>
                <TouchableOpacity style={{ alignSelf: 'flex-start', justifyContent: 'center' }}>
                    <Image style={{ height: 46, width: 46, borderRadius: 23 }} source={require('./assets/mudkip.jpeg')} />
                    <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center', paddingTop:6}}>profile</Text>
                </TouchableOpacity>
            </View>

            <ScrollView 
                style={{flex:0.8}}
                horizontal
                contentContainerStyle={{
                    flexDirection: 'row', padding: 2,
                }}
                showsHorizontalScrollIndicator={false}>
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
                <StoryIcon icon={require('./assets/mudkip.jpeg')} text='story 1' />
            </ScrollView>

        </View>
    );
};

const headerComponent = () => {
    return (
        <View
            style={styles.containerheader}>
            <Text style={styles.textViewBigWhite}>Hello, Badri Akkala</Text>
            <Text style={styles.textViewGrey}>here are today's</Text>
            <Text style={styles.textViewGrey}>recommended actions for you</Text>
        </View>
    );
};

const StoryIcon = ({ icon, text }: { icon: any, text: string }) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginVertical:2, marginHorizontal:6 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 46, 
                    width: 46, borderRadius: 23, borderWidth: 1.5, borderColor: 'red' }}>
                <Image style={{ height: 34, width: 34, borderRadius: 17, alignSelf: 'center' }} source={icon} />
            </View>
            <Text style={{ color: 'white', fontSize: 12, paddingTop: 6 }}>{text}</Text>
        </TouchableOpacity>

    );
};

const itemView = ({item}:{ item:any}) => {
    return item.adsView ? <AdView {...item} /> : <CardView {...item} />;
 };

const AdView = ({
    title,
    description,
    CTA,
    icon,
    bgColor,
}: {
    title: string;
    description: string;
    CTA: string;
    icon: any;
    bgColor: string;
}) => {
    return(
        <View style={[styles.containerAdView, {backgroundColor:bgColor}]}>

            <View style={{ flex: 0.6, justifyContent: 'space-between' }}>
                <Text style={styles.textViewBlackTitle}>{title}</Text>
                <Text style={styles.textViewBlack}>{description}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textViewWhite}>{CTA}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.4, }}>
                <Image style={{ alignSelf: 'center', height: 100, width: 100 }} source={icon} />
            </View>

        </View>
    );
};

const CardView = ({
    title,
    bank,
    cardNo,
    dueDate,
    CTA,
    amount,
    icon,
}: { 
    title: string;
    bank: string;
    cardNo: string;
    dueDate: string;
    CTA: string;
    amount: string;
    icon: any;
}) => {
    return(
        <View style={styles.containerCardView}>

            <Text style={styles.textViewCardViewTitle}>{title}</Text>

            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.18, }}>
                    <View style={{ height: 40, width: 40, borderRadius: 5, borderColor: 'grey', borderWidth: 0.2, justifyContent: 'center' }}>
                        <Image style={{ alignSelf: 'center', height: 26, width: 26 }} source={icon} />
                    </View>
                </View>
                <View style={{ flex: 0.52, justifyContent:'space-between'}}>
                    <Text style={styles.textViewBank}>{bank}</Text>
                    <Text style={styles.textViewCardNo}>{cardNo}</Text>
                    <Text style={styles.textViewDureDate}>{dueDate}</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent:'space-between', }}>
                    <Text style={styles.textViewAmount}>{amount && `₹${amount}`}</Text>
                    <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor: 'black', borderRadius: 20, paddingVertical: 8, paddingHorizontal:15 }}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight:'bold'}}>{CTA}</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1f2326',
    },
    containerheader:{
        flex: 0.1,
        backgroundColor: '#1f2326',
        marginBottom: 16,
        marginHorizontal:16,
        paddingTop:30,
    },
    containerAdView:{
        marginVertical: 10,
        marginHorizontal:16,
        borderRadius: 15,
        padding: 25,
        flexDirection: 'row',
    },
    textViewBigWhite:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textViewGrey:{
        color: '#7f8386',
        fontSize: 12,
    },
    textViewBlackTitle:{
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    textViewBlack:{
        color: 'black',
        fontSize: 12,
        lineHeight: 18,
        marginTop: 5,
    },
    textViewWhite:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    button:{
        alignSelf: 'flex-start',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
    },
    containerCardView:{
        backgroundColor: 'white',
        height: height / 4.3, //fixed
        marginVertical: 10,
        marginHorizontal:16,
        borderRadius: 15,
        padding: 25,
    },
    textViewCardViewTitle:{ flex: 0.5, color: 'black', fontSize: 14, fontWeight: 'bold' },
    textViewDureDate:{
        color: 'red', fontSize: 11,
        letterSpacing: 1.8, lineHeight: 20, fontWeight: 'bold',
    },
    textViewCardNo:{ color: 'black', fontSize: 11, lineHeight: 20, },
    textViewBank:{ color: 'black', fontSize: 12, lineHeight: 20, fontWeight:'bold' },
    textViewAmount:{
        color: 'black', fontSize: 13, fontWeight: 'bold',
        lineHeight: 20, alignSelf: 'flex-end',
    },
    containerTopView:{
        width: width, backgroundColor: '#1b1f21', flexDirection: 'row', flex: 0.13, paddingBottom:5,
    },

});
