import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { colors, px } from '~/theme'

const handleVariant = variant => {
  if (variant === 'outline') {
    return {
      backgroundColor: colors.light,
      borderColor: colors.primary,
      textColor: colors.primary,
    }
  }

  if (variant === 'ghost') {
    return {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textColor: colors.primary,
    }
  }

  return {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    textColor: colors.white,
  }
}

export const Button = ({
  children,
  marginTop,
  onClick,
  variant,
  size,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.buttonContainer,
        marginTop: marginTop || 0,
        backgroundColor: handleVariant(variant).backgroundColor,
        borderColor: handleVariant(variant).borderColor,
        width: size === 'small' ? px(200) : px(358),
      }}
    >
      {icon && (
        <EvilIcons
          name={icon}
          size={px(24)}
          color={handleVariant(variant).textColor}
        />
      )}
      <Text
        style={{
          ...styles.buttonText,
          color: handleVariant(variant).textColor,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: px(358),
    height: px(56),
    borderRadius: px(24),
    borderColor: colors.primary,
    borderWidth: px(2),
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: 'bold',
    color: colors.white,
  },
})
