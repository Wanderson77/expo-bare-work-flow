import React from 'react';

import {
  View,
  Text
} from 'react-native';

// criar components
function Dog(props) {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

export default function ExCats() {
  return (
    <View>
      <Dog name="Pity" />
      <Dog name="Kate" />
      <Dog name="TufaoBicudo" />
    </View>
  );
}
