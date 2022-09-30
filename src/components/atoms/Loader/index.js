import { ActivityIndicator } from 'react-native'
import { Box } from '~/components/atoms/Box'
import { colors } from '~/theme'

export const Loader = () => (
  <Box align="center" justify="center">
    <ActivityIndicator size="large" color={colors.primary} />
  </Box>
)
