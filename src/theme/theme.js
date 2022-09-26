import { colors } from './colors'
import { px } from './metrics'

const fonts = {
  bold: 'AvenirNext-Bold',
  demiBold: 'AvenirNext-DemiBold',
  medium: 'AvenirNext-Medium',
  regular: 'AvenirNext-Regular',
}

export const theme = {
  ...colors,
  px,
  ...fonts,
}
