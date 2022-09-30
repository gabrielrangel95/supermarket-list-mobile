import PropTypes from 'prop-types'
import { ButtonContainer, ButtonText, ButtonIcon } from './styles'

export const Button = ({ children, onClick, icon, ...props }) => {
  return (
    <ButtonContainer {...props} onPress={onClick}>
      {icon && <ButtonIcon {...props} name={icon} />}
      <ButtonText {...props}>{children}</ButtonText>
    </ButtonContainer>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outline', 'ghost']),
  size: PropTypes.oneOf(['small']),
}
