import { TextInput, View } from 'react-native'
import {Container, headerStyles} from './headerStyle'

import {Ionicons} from '@expo/vector-icons'


export function Header(){
    return (
      <View style={headerStyles.Container}>
            <Ionicons name='person-circle' size={30}/>

            <TextInput style={headerStyles.TextInput}
            placeholder='Pesquisar'
            onChangeText={(texto) => setPesquisa(texto) }/>

            <Ionicons name="chatbox-ellipses" size={30}/>
      </View>
    )
}
