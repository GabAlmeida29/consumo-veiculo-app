import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const handleCalcular = () => {
    const media = parseFloat(km) / parseFloat(litros);
    if (!isNaN(media)) {
      navigation.navigate('Resultado', { media });
    }
  };

  return (
    <KeyboardAvoidingView style={globalStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={globalStyles.title}>Consumo de Combustível</Text>

      <Text style={globalStyles.label}>Quilometragem (Km):</Text>
      <TextInput style={globalStyles.input} keyboardType="numeric" value={km} onChangeText={setKm} />

      <Text style={globalStyles.label}>Litros de Gasolina:</Text>
      <TextInput style={globalStyles.input} keyboardType="numeric" value={litros} onChangeText={setLitros} />

      <TouchableOpacity style={globalStyles.button} onPress={handleCalcular}>
        <Text style={globalStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
