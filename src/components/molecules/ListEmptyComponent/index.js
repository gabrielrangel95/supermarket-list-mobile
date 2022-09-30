import { Text, Box, Button } from '~/components/atoms'
import { useNavigation } from '@react-navigation/native'

export const ListEmptyComponent = () => {
  const navigation = useNavigation()

  const onClickChangeUsername = () => {
    navigation.goBack()
  }

  return (
    <Box w="100%" h={400} align="center" justify="center">
      <Text.Subtitle>Sua lista está vazia.</Text.Subtitle>
      <Text textAlign="center">
        Clique no botão abaixo para adicionar um novo item ou altere o seu
        username.
      </Text>
      <Button
        onClick={onClickChangeUsername}
        marginTop={24}
        size="small"
        variant="outline"
      >
        Alterar username
      </Button>
    </Box>
  )
}
