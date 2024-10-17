// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image
} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Python',
    img: './assets/python.png',
    skill: '3 years of investigations'
  },
  {
    id: 2,
    name: 'Java Script',
    img: './assets/js.png',
    skill: '2 years of investigations'
  },
  {
    id: 3,
    name: 'React Native',
    img: './assets/reactnative.png',
    skill: '1 month of investigations'
  }
]

function Item({ data }) {
  const { name, img, skill } = data;
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={img}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.text}>{skill}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const stopRefreshing = () => {
    setIsRefreshing(false);
  }
  const refreshItems = () => {
    setIsRefreshing(true);
    setTimeout(stopRefreshing, 1000);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refreshItems}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
    color: 'yellow',
    marginTop: 8,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
