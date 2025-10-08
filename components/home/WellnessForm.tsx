import moment from 'moment';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type WellnessFormProps = {
  selectedEnergy: number | null;
  selectedEmotional: number | null;
  text: string;
  handleEnergyPress: (value: number) => void;
  handleEmotionalPress: (value: number) => void;
  setText: (text: string) => void;
};
const WellnessForm = ({
  selectedEnergy,
  selectedEmotional,
  text,
  handleEnergyPress,
  handleEmotionalPress,
  setText,
}: WellnessFormProps) => {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienestar Integral</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">
          Hola, cuéntame como te sientes
          hoy {moment(new Date()).format('LL')}.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.verticalContainer}>
        <ThemedText type="subtitle">Energía Física</ThemedText>
        <View style={styles.rowContainer}>
          {[1,2,3,4,5].map((item) => (
            <Button
              key={item}
              mode={selectedEnergy === item ? "contained" : "elevated"}
              onPress={() => handleEnergyPress(item) }
            >
              {item}
            </Button>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.verticalContainer}>
        <ThemedText type="subtitle">Estado emocional</ThemedText>
        <View style={styles.rowContainer}>
          {[1,2,3,4,5].map((item) => (
            <Button
              key={item}
              mode={selectedEmotional === item ? "contained" : "elevated"}
              onPress={() => handleEmotionalPress(item) }
            >
              {item}
            </Button>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={[styles.verticalContainer, { marginTop: 3 }]}>
        <ThemedText type="subtitle">Notas</ThemedText>
        <TextInput
          value={text}
          mode="outlined"
          multiline
          numberOfLines={4}
          maxLength={100}
          onChangeText={text => setText(text)}
        />
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  verticalContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }  
});

export default WellnessForm;
