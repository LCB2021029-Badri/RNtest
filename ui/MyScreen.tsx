import { StyleSheet, Text, View, FlatList } from 'react-native';
import React ,{useState} from 'react';
import type {PropsWithChildren} from 'react';

const DATA = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const MyScreen = () => {
  const {id, setId} = useState(1);
  const {name, setName} = useState();
  return(
    <View style={styles.container}>

      <MyFlatView/>

    </View>
  );
};

// add Input Text and update the flatviews items when new text is added

const MyFlatView = () => {
  return(
    <View>
      <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()} // "(item)" is the data item
      renderItem={({item}) => <Item name={item.name} count={item.id} />} // "(item)" is prop, but "({item})" is the data item
      />
    </View>
  );
};

const Item = ({ name, count }: ItemProp) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.count}>Count: {count}</Text>
  </View>
);

type ItemProp = {
  name: string;
  count: number
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'skyblue',
  },
  item: {
    marginTop:4,
    marginHorizontal:4,
    padding:4,
    backgroundColor: 'pink',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MyScreen;
