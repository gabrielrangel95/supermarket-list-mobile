import styled from 'styled-components/native'
import { EvilIcons } from '@expo/vector-icons'

export const handleVariant = variant => {
  if (variant === 'outline') {
    return {
      backgroundColor: 'light',
      borderColor: 'primary',
      textColor: 'primary',
    }
  }

  if (variant === 'ghost') {
    return {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textColor: 'primary',
    }
  }

  return {
    backgroundColor: 'primary',
    borderColor: 'primary',
    textColor: 'white',
  }
}

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme, size }) => theme.px(size === 'small' ? 200 : 358)}px;
  height: ${({ theme }) => theme.px(56)}px;
  border-radius: ${({ theme }) => theme.px(24)}px;
  background-color: ${({ theme, variant }) =>
    theme[handleVariant(variant).backgroundColor]};
  border-width: ${({ theme }) => theme.px(2)}px;
  border-color: ${({ theme, variant }) =>
    theme[handleVariant(variant).borderColor]};
  margin-top: ${({ theme, marginTop }) => theme.px(marginTop || 0)}px; ;
`

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.px(16)}px;
  font-family: ${({ theme }) => theme.demiBold};
  color: ${({ theme, variant }) => theme[handleVariant(variant).textColor]};
`

export const ButtonIcon = styled(EvilIcons).attrs(({ theme }) => ({
  size: theme.px(24),
}))`
  color: ${({ theme, variant }) => theme[handleVariant(variant).textColor]};
`
