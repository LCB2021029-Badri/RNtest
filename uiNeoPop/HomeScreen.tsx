import { StyleSheet, Text, View,  Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React from 'react';

const DATA = [{
    title: 'clear your upcoming bills to earn coins',
    bank: 'SBI',
    cardNo: 'XXXX 3926',
    dueDate: 'DUE IN 2 DAYS',
    CTA: 'Pay now',
    amount: '26,943',
    icon: require('./assets/mudkip.jpeg'),
    adsView: false,
},
{
    title: 'activate your card to make your first payment and earn coins',
    bank: 'HDFC',
    cardNo: 'XXXX XXXX',
    dueDate: null,
    CTA: 'Activate',
    amount: null,
    icon: require('./assets/mudkip.jpeg'),
    adsView: false,
},
{
    title: 'CRED store is now open for access',
    description: 'browse through our selection of curated products for you ',
    CTA: 'Explore store',
    icon: require('./assets/mudkip.jpeg'),
    adsView: true,
    bgColor: 'skyblue',
},
{
    title: 'your opinion matters',
    description: 'tell us about your CRED experience and we promise to make it better',
    CTA: 'Tell us now',
    icon: require('./assets/mudkip.jpeg'),
    adsView: true,
    bgColor: 'white',
}];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={itemView}
            ListHeaderComponent={headerComponent} />
    </View>
  );
};

export default HomeScreen;

const headerComponent = () => {
    return (
        <View
            style={styles.containerheader}>
            <Text style={styles.textViewBigWhite}>hello, Badri Akkala</Text>
            <Text style={styles.textViewGrey}>here are today's</Text>
            <Text style={styles.textViewGrey}>recommended actions for you</Text>
        </View>
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
                <Image style={{ alignSelf: 'center', height: 100, width: 100, }} source={icon} />
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

            <Text style={{ flex: 0.5, color: 'black', fontSize: 14, fontWeight: 'bold' }}>{title}</Text>

            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.18, }}>
                    <View style={{ height: 40, width: 40, borderRadius: 5, borderColor: 'grey', borderWidth: 0.2, justifyContent: 'center' }}>
                        <Image style={{ alignSelf: 'center', height: 26, width: 26 }} source={icon} />
                    </View>
                </View>
                <View style={{ flex: 0.52, justifyContent:'space-between', }}>
                    <Text style={{ color: 'black', fontSize: 12, lineHeight: 20, fontWeight:'bold' }}>{bank}</Text>
                    <Text style={{ color: 'black', fontSize: 11, lineHeight: 20, }}>{cardNo}</Text>
                    <Text style={{
                        color: 'red', fontSize: 11,
                        letterSpacing: 1.8, lineHeight: 20, fontWeight: 'bold'
                    }}>{dueDate}</Text>

                </View>
                <View style={{ flex: 0.3, justifyContent:'space-between', }}>
                    <Text style={{
                        color: 'black', fontSize: 13, fontWeight: 'bold',
                        lineHeight: 20, alignSelf: 'flex-end',
                    }}>
                        {amount && `₹${amount}`}
                    </Text>
                    <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor: 'black', borderRadius: 20, paddingVertical: 8, paddingHorizontal:15 }}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight:'bold'}}>{CTA}</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
};


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex: 0.87,
        paddingHorizontal: 20,
        backgroundColor: 'grey',
    },
    containerheader:{
        flex: 0.1,
        backgroundColor: 'powderblue',
        marginBottom: 20,
        paddingTop:30,
    },
    containerAdView:{
        marginVertical: 10,
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
        color: 'grey',
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
    textViewWhite:{ color: 'white', fontSize: 12, fontWeight: 'bold'},
    button:{ alignSelf: 'center', backgroundColor: 'black', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15, marginTop: 15 },
    containerCardView:{
        backgroundColor: 'white',
        height: windowHeight/4.3,
        marginVertical: 10,
        borderRadius: 15,
        padding: 25,
    },
});
