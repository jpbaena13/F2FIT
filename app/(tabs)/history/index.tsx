import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';

import { UserDayInfo } from '@/api/API';
import api from '@/api/aws';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HistoryScreen() {
  const [history, setHistory] = React.useState<UserDayInfo[]>();

  useEffect(() => {
    api.dayInfo.all().then(setHistory);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Historial</ThemedText>
      </ThemedView>

      {history ? (
        history.length === 0 ? (
          <ThemedText>No hay historial disponible.</ThemedText>
        ) : (
          history.map((dayInfo) => (
            <Link
              key={dayInfo.id}
              href={{
                // @ts-ignore
                pathname: `/history/${dayInfo.id}`,
                params: { dayInfo: JSON.stringify(dayInfo) }
              }}
              asChild
            >
              <TouchableOpacity>
                <List.Item
                key={dayInfo.date}
                style={styles.borderBottom}
                title={dayInfo.date}
                description={dayInfo.notes ? `${dayInfo.notes.substring(0, 30)}...` : '--'}
                left={props => <List.Icon {...props} icon="clock" />}
              />
              </TouchableOpacity>
            </Link>
          ))
        )
      ) : (
        <ActivityIndicator size="small" style={{ marginTop: 20 }} />
      )}
    </ParallaxScrollView>
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
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  },
});
