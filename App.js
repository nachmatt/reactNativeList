import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Modal from './src/components/Modal';
import AddItem from './AddItem';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = (event) => {
    setTextItem(event)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem('')
  }
  const onHandleDelete = (item) => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }
  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const renderItem = ({item}) => (
      <View style={styles.renderItemStyle}>
        <Text style={styles.listItemText}>{item}</Text>
        <Button title='EDIT'onPress={() => handleModal(item)}/>
      </View>
  )

  // const renderItem = () => {
  //   return 
  //     <View>
  //       <Text>{data}</Text>
  //     </View>
  // }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <AddItem textItem={textItem} onHandleChangeItem={onHandleChangeItem} addItem={addItem}/>
      </View>

      <View style={styles.listContainer}>
        <FlatList 
          data={list}
          keyExtractor={(item) => item}
          renderItem={renderItem}/>
      </View>
      <Modal 
        modalVisible={modalVisible} 
        itemSelected={itemSelected} 
        setModalVisible={setModalVisible} 
        onHandleDelete={onHandleDelete}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECEC',
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 40,
    fontWeight: '500',
    color: '#525252',
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 30,
  },
  renderItemStyle: {
    height: 60,
    flexDirection:'row',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems:'center',
    color: '#525252',
    shadowColor: '#525252',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0 , height: 2},
    shadowRadius: 3,
    elevation: 1,
  },

});
