import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

  
  function Products() {
    const [data, setData] = useState(undefined);
  
    const getAPIData = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const result = await fetch(url);
        const json = await result.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getAPIData();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {data ? (
            data.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.loadingText}>Loading...</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    scrollView: {
      padding: 10,
    },
    itemContainer: {
      backgroundColor: '#fff',
      marginBottom: 20,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#7b7b7b',
      shadowColor: '#7e7b75',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      color: '#666',
    },
    loadingText: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
    },
  });
  export default Products;