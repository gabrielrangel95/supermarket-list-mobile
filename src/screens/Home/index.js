import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image, Alert } from 'react-native'
import { Button, Input, Text } from '~/components'
import { USERNAME_DB_KEY, saveData } from '~/services'
import { px } from '~/theme'
import homeImage from '../../../assets/shopping-bag.png'

export const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')

  const onClickContinue = async () => {
    if (username.length <= 3) {
      Alert.alert('Username deve conter mais do que 3 caracteres')
      return
    }
    // salvar o username
    const result = await saveData(USERNAME_DB_KEY, username)
    if (result?.error) {
      Alert.alert('Erro ao salver username')
    }

    // navegar para proxima pagina
    navigation.navigate('MarketList')
  }

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.homeImage} source={homeImage} />
      <Text.Title style={styles.title}>
        Sua lista de supermercado mais fácil do que nunca
      </Text.Title>
      <Text.Subtitle mt={12}>
        Ajudamos você a organizar sua lista de compras de forma descomplicada.
      </Text.Subtitle>
      <Text.Subtitle mt={36} mb={16} textAlign="left">
        Digite abaixo seu usuário para ter acesso a sua lista de compras:
      </Text.Subtitle>
      <Input
        value={username}
        onChangeText={setUsername}
        label="Username"
        placeholder="Ex: sevencoders"
        autoCapitalize="none"
      />
      <Button onClick={onClickContinue} marginTop={14}>
        Avançar
      </Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: px(16),
  },
  homeImage: {
    height: px(200),
    width: px(200),
  },
})
