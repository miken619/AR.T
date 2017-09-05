import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Home Page
      </Text>
      {/* <Text onPress={() => Actions.startgame()}>Start Your Scavenger Adventure!</Text>
      <Text onPress={() => Actions.camera()}>Camera</Text> */}
      {/* <Text onPress={() => Actions.joinVideoChallenge()}>Video Challenge</Text>
      <Text onPress={() => Actions.joinGuessPhotoChallenge()}>Guess photo Challenge</Text>
      <Text onPress={() => Actions.joinCameraChallenge()}>Camera Challenge</Text> */}
      <Text onPress={() => Actions.joingame({listtype: 'join'})}>Join</Text>
      <Text onPress={() => Actions.startnewgame({listtype: 'start'})}>Start New Game</Text>
      <Text onPress={() => Actions.creategame()}>Create Game</Text>
      <Text onPress={() => Actions.leaderboard()}>Leaderboard</Text>
      <Text onPress={() => Actions.friends()}>Friends</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default HomePage;