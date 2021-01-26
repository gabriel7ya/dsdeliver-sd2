import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';

export default function Loader() {

    return (
      <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 400,
          height: 'auto',
        }}
        source={require('../assets/entregador.json')}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
    </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    fundo: {
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        height: 700,
        flexDirection: 'row',
      },

      circle: {
        backgroundColor: 'blue',
        margin: 3,
        width: 7,
        height: 7,
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center'
      },

      loading: {
        padding: 20,
        height: 12,
        width: 12,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      
  });
