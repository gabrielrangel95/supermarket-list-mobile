import { TouchableContainer } from './styles'

export const Touchable = ({ children, ...props }) => (
  <TouchableContainer {...props}>{children}</TouchableContainer>
)
