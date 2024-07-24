import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function Mydata() {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    try {
      const url = "http://192.168.29.98:3000/users";
      const result = await fetch(url);
      const json = await result.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text>API call</Text>
      {data.length > 0 ? (
        data.map((person, i) => (
          <Text key={i}>name: {person.name}</Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default Mydata;
