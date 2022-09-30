import PropTypes from 'prop-types'
import { EvilIcons, Feather } from '@expo/vector-icons'
import { colors, px } from '~/theme'

export const Icon = ({ name, color, size, iconFamily }) => {
  if (iconFamily === 'feather') {
    return (
      <Feather
        name={name}
        color={colors[color || 'primary']}
        size={px(size || 24)}
      />
    )
  }

  return (
    <EvilIcons
      name={name}
      color={colors[color || 'primary']}
      size={px(size || 24)}
    />
  )
}

Icon.prototype = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  iconFamily: PropTypes.oneOf(['feather']),
}
