import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';

const MyCustomTextWith = (props) => {
  return (
    <Text>
      Your First Name is {props.firstname}!
      and Last name is {props.secondname}
    </Text>
  );
};

const MyCustomText = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}>
        {/*Use of our custom component MyCustomTextWith*/}
        <MyCustomTextWith
          firstname="Wanderson"
          secondname="Aldo"
        />
        {/*We are setting the props dynamically from the main UI
           where we want to use it. We candynamically set the value
           using props from master every time*/}
        <MyCustomTextWith
          firstname="Kurt"
          secondname="Cobain"
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCustomText;