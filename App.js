import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const movieURL = 'https://reactnative.dev/movies.json';

const App = () => {
  const [data, setData] = useState([]);
  const [showYear, setShowYear] = useState('2');

  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.movies);
      })
      .catch((error) => alert(error))
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Top 5 Melhores Filmes</Text>
        <View style={{borderBottomWidth: 1, marginBottom: 12}}></View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{paddingBottom: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.movieText}>
                  {item.id}. {item.title}
                </Text>
                <Text style={[styles.movieText,{display: showYear == item.id ? 'flex' : 'none'}]}
                  >, {item.releaseYear}</Text>
                </View>
              <TouchableOpacity
                style={[styles.button,{display: showYear == item.id ? 'none' : 'flex'}]}
                onPress={() => setShowYear(item.id)}>
                <Text>Ver Ano de Lançamento</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text style={styles.description}>Nuno Gomes - a38368</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },

  movieText: {
    fontSize: 26,
    fontWeight: '200',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },

  hidde: {
    display: 'none'
  },
  show: {
    display: 'flex'
  }
});

export default App;
