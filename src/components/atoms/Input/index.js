import PropTypes from 'prop-types'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { TextInput } from './styles'

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <Box
      w={358}
      h={56}
      p={6}
      borderRadius={8}
      borderWidth={2}
      borderColor="primary"
    >
      <Text.Label>{label}</Text.Label>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </Box>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}
