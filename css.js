import 'react-native-gesture-handler';
import {
    StyleSheet,
} from 'react-native';



const stylesApp = StyleSheet.create({
    title: {
        marginTop: 50,
    }
});



const stylesLogIn = StyleSheet.create({
    container: {
        width: 420,
        height: 1000,
        backgroundColor: '#FCD2FF',
    },

    title: {
        left: 50,
    },

    login2: {
        width: 305,
        height: 58,
        left: 55,
        top: 520,
        backgroundColor: 'white',
        borderRadius: 24,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    loginT: {
        color: 'black',
        fontSize: 20,
        lineHeight: 25,
        left: 125,
        bottom: -15,

    },

    loginU: {

    },
    loginP: {

    }

});



const styles = StyleSheet.create({


    container: {
        width: 420,
        height: 1000,
        backgroundColor: '#FCD2FF',
    },

    logo: {
        width: 375,
        height: 472,
        left: 17,
        top: -50
    },

    login: {
        width: 305,
        height: 58,
        left: 55,

        backgroundColor: '#9b4ae6',
        borderRadius: 24,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    loginG: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 25,
        left: 105,
        bottom: -15,

    },

    login2: {
        width: 305,
        height: 58,
        left: 55,
        top: 10,
        backgroundColor: 'white',
        borderRadius: 24,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    loginT: {
        color: 'black',
        fontSize: 20,
        lineHeight: 25,
        left: 125,
        bottom: -15,

    },

    btm: {
        top: 40,
        left: 125,

    },

    btm2: {
        top: 40,
        left: -5,
    }




});

export default styles;