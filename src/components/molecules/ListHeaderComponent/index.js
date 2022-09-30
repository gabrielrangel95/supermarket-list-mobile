import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Box, Text } from '~/components/atoms'
import { getData, USERNAME_DB_KEY } from '~/services'

export const ListHeaderComponent = () => {
  const [username, setUsername] = useState('')

  const getUsername = async () => {
    const result = await getData(USERNAME_DB_KEY)
    if (result?.error) {
      Alert.alert('Falha ao retornar username')
      return
    }
    setUsername(result)
  }

  useEffect(() => {
    getUsername()
  }, [])

  return (
    <Box mt={24} w={358} align="flex-start" justify="flex-start" h={90}>
      <Text.Title>Olá, {username}!</Text.Title>
      <Text.Subtitle mt={8}>Sua lista de compras:</Text.Subtitle>
    </Box>
  )
}
