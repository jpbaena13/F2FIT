import { StyleSheet } from "react-native";
import { Switch } from 'react-native-paper';

import { Habits } from "@/app/(tabs)";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const translate = {
  exercise: "Ejercicio",
  hydration: "Hidratación",
  sleep: "Sueño",
  nutrition: "Nutrición",
};

type HabitsFormProps = {
  habits: Habits;
  setHabits: (habits: Habits) => void;
};
const HabitsForm = ({ habits, setHabits }: HabitsFormProps) => {
  const handleSwitchChange = (value: boolean, habit: string) => {
    setHabits({ ...habits, [habit]: value });
  };

  return (
    <ThemedView style={styles.verticalContainer}>
      <ThemedText type="title" style={{ marginVertical: 10 }}>
        Hábitos
      </ThemedText>
      {Object.keys(habits).map((habit) => (
        <ThemedView key={habit} style={styles.rowContainer}>
          <ThemedText
            type="subtitle"
            style={{ flex: 1, textTransform: "capitalize" }}
          >
            {translate[habit as keyof typeof translate]}
          </ThemedText>
          <Switch
            value={habits[habit as keyof Habits]}
            onValueChange={(value) => handleSwitchChange(value, habit)}
          />
        </ThemedView>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  verticalContainer: {
    flexDirection: 'column',
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

export default HabitsForm;
