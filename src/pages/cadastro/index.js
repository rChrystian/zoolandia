import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Cadastro({ navigation }) 
{ const [name, setName] = useState(''); return <View style={styles.container}>
    <Text style={styles.emoji}>🦊</Text>
    <Text style={styles.title}>Olá, explorador!</Text>
    <Text style={styles.subtitle}>Vamos preparar sua mochila para a aventura.</Text>
    <View style={styles.card}><Text style={styles.label}>Como podemos te chamar?</Text>
    <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Seu nome" placeholderTextColor="#92A29B" />
    <Text style={styles.label}>Qual sua idade?</Text><View style={styles.ages}>{[4,5,6,7,8].map(age => <Text key={age} style={styles.age}>{age}</Text>)}</View>
    <Button title="Entrar no zoológico" onPress={() => navigation.replace('Home')} />
</View>
</View>; }
