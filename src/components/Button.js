import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress, variant = 'primary' }) {
  return <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={[styles.button, variant === 'outline' && styles.outline]}><Text style={[styles.text, variant === 'outline' && styles.outlineText]}>{title}</Text></TouchableOpacity>;
}

const styles = StyleSheet.create({ button: { minHeight: 52, backgroundColor: '#245A43', justifyContent: 'center', alignItems: 'center', borderRadius: 16, paddingHorizontal: 18 }, text: { color: '#FFF', fontSize: 16, fontWeight: '800' }, outline: { backgroundColor: '#F1F7ED', borderWidth: 1, borderColor: '#B9D4BD' }, outlineText: { color: '#245A43' } });
