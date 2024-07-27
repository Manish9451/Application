import { View, Text, Button } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const UpdateAndDelete = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = "http://192.168.29.98:3000/users";
    try {
      let response = await fetch(url);
      let result = await response.json();
      console.log("Data fetched successfully:", result); // Debugging log
      if (result) {
        setData(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser=async(id)=>{

    const url = "http://192.168.29.98:3000/users";
    let result=await fetch(`${url}/${id}`,{
        method:"delete"
    });
    result=await result.json();
    if(result){
        console.warn("User Deleted");
        getAPIData();
    }

  }

  useEffect(() => {
    getAPIData();
  }, []);

  return (

      <View style={styles.container}>

           <View style={styles.dataWrapper}> 
            <View style={{ flex: 1, }}>
              <Text style={{color:'green'}}>Name</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text>Age</Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text>Operations</Text>
            </View>
          </View>
      {data.length ? (
        data.map((item) => (
          <View style={styles.dataWrapper} key={item.id}>
            <View style={{ flex: 1 }}>
              <Text>{item.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>{item.age}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Button onPress={()=> deleteUser(item.id)}>
                Delete
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Button onPress={() => console.log('Update pressed', item.id)}>
                Update
              </Button>
            </View>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 8,
  },
});

export default UpdateAndDelete;
