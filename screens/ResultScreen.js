import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

function classificarConsumo(media) {
  if (media > 12) return 'A';
  if (media > 10) return 'B';
  if (media > 8) return 'C';
  if (media > 4) return 'D';
  return 'E';
}

export default function ResultScreen({ route }) {
  const { media } = route.params;
  const navigation = useNavigation();
  const classificacao = classificarConsumo(media);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFBEB' }}>
      <View style={{ padding: 20, paddingTop: 90 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButton}>← Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.resultContainer}>
        <Text style={globalStyles.title}>Resultado</Text>
        <Text style={globalStyles.resultText}>Média: {media.toFixed(2)} Km/L</Text>
        <Text style={globalStyles.classification}>Classificação: {classificacao}</Text>
      </View>
    </View>
  );
}
