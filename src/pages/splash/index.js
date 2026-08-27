import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Splash({ navigation }) { setTimeout(() => navigation.replace('BemVindo'), 1300); return <View style={styles.container}><Text style={styles.emoji}>🦁</Text><Text style={styles.logo}>Zoo<Text style={styles.accent}>lândia</Text></Text><Text style={styles.subtitle}>A aventura vai começar!</Text></View>; }
