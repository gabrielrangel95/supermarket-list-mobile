import { TextInput, View, StyleSheet } from 'react-native'
import { Text } from '~/components/atoms/Text'
import { colors, px } from '~/theme'

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text.Label>{label}</Text.Label>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: px(358),
    height: px(56),
    borderColor: colors.primary,
    borderWidth: px(2),
    borderStyle: 'solid',
    borderRadius: px(8),
    padding: px(6),
  },

  textInput: {
    fontSize: px(16),
    marginTop: px(4),
  },
})
