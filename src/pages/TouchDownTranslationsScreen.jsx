import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import TouchDownHeader from '../components/TouchDownHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <Text style={styles.matchTime}>{time}</Text>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TouchDownHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NFL', '03.12 21:00', 'Kansas City Chiefs \n' + 'Buffalo Bills')}
        {renderBroadcast('XFL', '05.12 19:30', 'DC Defenders \n' + 'Houston Roughnecks')}
        {renderBroadcast('CFL', '07.12 18:00', 'Toronto Argonauts \n' + 'Winnipeg Blue Bombers')}
        {renderBroadcast('USFL', '09.12 17:45', 'New Jersey Generals \n' + 'Birmingham Stallions')}
        {renderBroadcast('College F', '11.12 20:15', 'Alabama \n' + 'Georgia')}
        {renderBroadcast('NFL Playoffs', '13.12 22:30', 'San Francisco 49ers \n' + 'Dallas Cowboys')}
        {renderBroadcast('Arena League', '15.12 19:00', 'Orlando Predators \n' + 'Albany Empire')}
        {renderBroadcast('NFL Bowl', '17.12 23:30', 'Philadelphia Eagles \n' + 'Baltimore Ravens')}
        {renderBroadcast('XFL Championship', '19.12 18:45', 'Seattle Sea Dragons \n' + 'St. Louis BattleHawks')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
