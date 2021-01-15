import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation'


const NavLink = ({ target, label, navigation: { navigate } }) => {
    return (
        <TouchableOpacity onPress={() => { navigate(target) }}>
            <Text style={style.link} h5>{label}</Text>
        </TouchableOpacity>)
}

const style = StyleSheet.create({
    link: {
        alignSelf: 'center',
        color: '#1DA1F2',
        paddingTop: 15
    }
})

export default withNavigation(NavLink)