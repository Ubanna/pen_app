import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%', 
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center'       
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
    },
    altTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 27,
        fontFamily: "Roboto_Bold",
    },
    altTitleText: {
        fontSize: 16,
        fontFamily: "Roboto_Bold",
        bottom: 10,
    },
    subTitleText: {
        fontSize: 12,
        marginTop: 17,
        fontFamily: "Roboto_Regular",
        width: '70%',
        textAlign: 'center',
    },
    lifeStyleContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
    },
    altLifeStyleContainer: {
        // marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    otherLifeStyleContainer: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    otherLifeStyleText: {
        fontSize: 10,
        fontFamily: "Roboto_Regular",
        // width: '50%',
    },
    otherLifeStyleSubText: {
        fontSize: 10,
        fontFamily: "Roboto_Bold",
    },
    lifeStyleText: {
        fontSize: 13,
        fontFamily: "Roboto_Regular",
        width: '50%',
    },
    lifeStyleSubText: {
        fontSize: 30,
        fontFamily: "Roboto_Bold",
    },
    altLifeStyleText: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: "Roboto_Regular",
        width: '50%',
    },
    altLifeStyleSubText: {
        fontSize: 30,
        fontFamily: "Roboto_Bold",
    },
    slideContainer: {
       display: 'flex', 
       flexDirection: 'row', 
       justifyContent: 'space-between', 
       marginTop: 20,
    },
    slideItemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: '30%',
        alignItems: 'center',
        padding: 7,
    },
    slideItemText: {
        fontSize: 10,
        fontFamily: "Roboto_Regular",
        textAlign: 'center',
        marginTop: 3
    },
    slideItemSubText: {
        fontSize: 23,
        fontFamily: "Roboto_Bold",
        fontWeight: 'bold',
        marginTop: 3,
    },
    fakeDots: {
        marginTop: 20,
        width: '25%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default styles;