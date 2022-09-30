import { BoxContainer } from './styles'

export const Box = ({ children, ...props }) => (
  <BoxContainer {...props}>{children}</BoxContainer>
)
