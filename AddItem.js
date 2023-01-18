import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddItem = ({textItem, onHandleChangeItem, addItem}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Write your product.' 
                style={styles.addItemInput} 
                onChangeText={onHandleChangeItem}
                value={textItem}/>
            <Button title='ADD' onPress={addItem} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    addItemInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        height: 45,
        shadowColor: '#525252',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 4,
        elevation: 3,
    },
})