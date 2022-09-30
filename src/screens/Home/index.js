import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert } from 'react-native'
import { Button, Input, Text, Box } from '~/components'
import { USERNAME_DB_KEY, saveData } from '~/services'
import { Image } from './styles'

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
    <Box bg="white" p={16} align="center" justify="center">
      <Image resizeMode="contain" />
      <Text.Title mt={16}>
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
    </Box>
  )
}
