import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function BemVindo({ navigation }) 
{ return <View style={styles.container}>
    <Text style={styles.eyebrow}>BEM-VINDO AO</Text>
    <Text style={styles.logo}>Zoo<Text style={styles.accent}>lândia</Text>
    </Text><View style={styles.scene}><Text>🦁  🦒  🐘</Text>
    <Text style={styles.trees}>🌴  🌿  🌴</Text>
    </View>
    <Text style={styles.copy}>Um mundo de descobertas,{`\n`}brincadeiras e amigos animais.</Text>
    <Button title="Começar aventura  →" onPress={() => navigation.navigate('Cadastro')} />
        <Button title="Já tenho uma conta" variant="outline" onPress={() => navigation.navigate('Login')} />
            
        </View>; }
