import { Image } from 'expo-image';
import { useEffect, useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

import api from '@/api/aws';
import HabitsForm from '@/components/home/HabitsForm';
import WellnessForm from '@/components/home/WellnessForm';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { getFormattedDate } from '@/constants/functions';

export type Habits = {
  exercise: boolean;
  hydration: boolean;
  sleep: boolean;
  nutrition: boolean;
};

const defaultHabits: Habits = {
  exercise: false,
  hydration: false,
  sleep: false,
  nutrition: false,
};

export default function HomeScreen() {
  const [dayInfoId, setDayInfoId] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<number | null>(null);
  const [selectedEmotional, setSelectedEmotional] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [habits, setHabits] = useState<Habits>(defaultHabits);
  const [step, setSteps] = useState<number>(0);
  const [snackbarText, setSnackbarText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const today = useMemo(() => new Date(), []);

  const saveDayInfo = async () => {
    try {
      setLoading(true);

      if (dayInfoId) {
        await api.dayInfo.update({
          id: dayInfoId,
          date: getFormattedDate(today, 'yyyy-MM-dd'),
          energyLevel: selectedEnergy as number,
          emotionalState: selectedEmotional as number,
          notes: text,
          habits,
        });
      } else {
        const data = await api.dayInfo.create({
          date: getFormattedDate(today, 'yyyy-MM-dd'),
          energyLevel: selectedEnergy as number,
          emotionalState: selectedEmotional as number,
          notes: text,
          habits,
        });

        setDayInfoId(data.id);
        setSelectedEnergy(data.energyLevel);
        setSelectedEmotional(data.emotionalState);
        setText(data.notes);
        setHabits(data.habits ? data.habits : defaultHabits);
      }

      setSnackbarText("El registro de hoy se guardó exitosamente");
      setLoading(false);
    } catch (error) {
      setSnackbarText("Error al guardar la información. Inténtalo de nuevo.");
    }
  };

  const handleEnergyPress = (value: number) => {
    setSelectedEnergy(value);
    setSnackbarText(null);
  };

  const handleEmotionalPress = (value: number) => {
    setSelectedEmotional(value);
    setSnackbarText(null);
  };

  const handleHomePress = async () => {
    if (step === 0) {
      if (!selectedEnergy || !selectedEmotional) {
        setSnackbarText("Por favor, selecciona ambos valores");
        return;
      }
      setSteps(1);
    } else if (step === 1) {
      saveDayInfo();
    }
  };

  useEffect(() => {
    api.dayInfo.filterByDate(getFormattedDate(today, 'yyyy-MM-dd')).then((data) => {
      if (data) {
        setDayInfoId(data.id);
        setSelectedEnergy(data.energyLevel);
        setSelectedEmotional(data.emotionalState);
        setText(data.notes);
        setHabits(data.habits ? data.habits : defaultHabits);
        setSnackbarText("Ya existe un registro para hoy. Puedes actualizarlo.");
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }
      >
        {step === 0
          && <WellnessForm
            today={today}
            selectedEnergy={selectedEnergy}
            selectedEmotional={selectedEmotional}
            text={text}
            handleEnergyPress={handleEnergyPress}
            handleEmotionalPress={handleEmotionalPress}
            setText={setText}
          />
        }

        {step === 1 && <HabitsForm habits={habits} setHabits={setHabits} />}

        <ThemedView style={{ marginTop: 20 }}>
          <Button
            loading={loading}
            mode="contained-tonal"
            onPress={handleHomePress}
          >
            {step === 0 ? "Siguiente" : "Guardar"}
          </Button>
          {step === 1
            && <Button mode="text" onPress={() => setSteps(0)}>
              Atrás
            </Button>
          }
        </ThemedView>
      </ParallaxScrollView>
      <Snackbar
        visible={!!snackbarText}
        onDismiss={() => setSnackbarText(null)}
      >
        {snackbarText}
      </Snackbar>
    </KeyboardAvoidingView>
  );
}

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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
