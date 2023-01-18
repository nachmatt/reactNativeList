import { StyleSheet, Text, View, Button, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = ({modalVisible, itemSelected, setModalVisible, onHandleDelete}) => {
    return (
        <NewModal 
        animationType='fade'
        transparent={true}
        visible={modalVisible}>
            <View style={styles.modalContainer }>
            <View style={styles.modalStyle}>
                <Text style={styles.modalText}> {itemSelected} </Text>
                <Button title='DISMISS' onPress={() => setModalVisible(false)}/> 
                <Button title='DELETE' onPress={() => onHandleDelete(itemSelected)}/>
            </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    modalStyle: {
        justifyContent: 'center',
        alignItems: 'center', 
        height: 200,
        width: '60%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#525252',
        shadowOpacity: 0.5,
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 6,
        elevation: 6,
    },
    modalText: {
        fontSize: 30,
    }
})