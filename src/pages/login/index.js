import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Login({ navigation }) 
{ return <View style={styles.container}>
    <Text style={styles.emoji}>🔐</Text>
    <Text style={styles.title}>Que bom te ver!</Text>
    <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="voce@email.com" />
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="••••••••" secureTextEntry />
        <Button title="Entrar" onPress={() => navigation.replace('Home')} />
        <Text style={styles.help}>Esqueceu a senha? Peça ajuda a um adulto.</Text>
        </View>
         </View>; }
