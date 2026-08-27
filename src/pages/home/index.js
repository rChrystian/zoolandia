import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const territories = [
  ['Territorio01', 'Savana', '🦁', '#F5B544'], ['Territorio02', 'Floresta', '🦜', '#48AD6B'], ['Territorio03', 'Oceano', '🐬', '#5277D9'],
  ['Territorio04', 'Geleira', '🐧', '#62B9E6'], ['Territorio05', 'Deserto', '🦎', '#DA9343'], ['Territorio06', 'Pantanal', '🐊', '#76B766'],
];

export default function Home({ navigation }) 
{ return <ScrollView contentContainerStyle={styles.page}>
  <Text style={styles.greeting}>Olá, explorador! 👋</Text>
  <Text style={styles.title}>Para onde vamos?</Text>
  <Text style={styles.subtitle}>Escolha um território para começar.</Text>
  <View style={styles.grid}>{territories.map(([screen, title, emoji, color]) => 
  <TouchableOpacity key={screen} activeOpacity={0.85} style={[styles.card, { backgroundColor: color }]} onPress={() => navigation.navigate(screen)}>
    <Text style={styles.emoji}>{emoji}</Text><Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>Explorar agora</Text></TouchableOpacity>)}</View>
    <View style={styles.tip}>
      <Text style={styles.tipText}>💡 Toque nos territórios e descubra curiosidades sobre os animais.</Text>
    </View></ScrollView>; }
