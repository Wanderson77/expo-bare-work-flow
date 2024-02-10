import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {

  Icon.getImageSource('user', 20, 'red').then(source =>
      this.setState({ userIcon: source })
    );
    return (
      <View style={styles.container}>
        <Text>Example of Vector Icon</Text>
        <View
          style={{
            marginTop: 16,
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Text>
            <Icon name="rocket" size={'{30}'} color="#900" />
          </Text>
          {/*Icon Component*/}
          <Icon name="rocket" size={30} color="#900" />
        </View>
        <View style={{ marginTop: 16, marginBottom: 16 }}>
          {/*Icon.Button Component*/}
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => alert('Login with Facebook')}>
            Login with Facebook
          </Icon.Button>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
