import { ButtonContainer, ButtonText, ButtonIcon } from './styles'

export const Button = ({ children, onClick, icon, ...props }) => {
  return (
    <ButtonContainer {...props} onPress={onClick}>
      {icon && <ButtonIcon {...props} name={icon} />}
      <ButtonText {...props}>{children}</ButtonText>
    </ButtonContainer>
  )
}
