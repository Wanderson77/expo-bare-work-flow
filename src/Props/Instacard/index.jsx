import React, { useState } from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity  
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function InstaGit({githubUser}) {
  
  const [liked, setLiked] = useState(false);

  return (
    <View>
      <Text>{githubUser}</Text>

      {/* Insta Header */}
      <View style={{ flexDirection: 'row' , padding: 15, alignItems: 'center'}}>
        <Image 
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />
      </View>

      {/* Insta Image */}
      <Image 
        style={{
          width: '100%',
          height: 350,          
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`
        }}
      />      

      {/* Insta Footer */}
      <View style={{ flexDirection: 'row' , padding: 15, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => } >
          { liked && <Ionicons name="ios-heart" size={24} color="red" /> }
          {!liked && <Ionicons name="ios-heart-empty" size={24} color="black" />}              
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default function Instacard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
      [
        'omariosouto',
        'gabrielfroes',
        'wanderson77'
      ].map((githubUser) =>
        <InstaGit key={githubUser} githubUser={githubUser} />
      )}              
      </ScrollView>
    </SafeAreaView>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
