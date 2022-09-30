import { BaseText } from './styled'
import PropTypes from 'prop-types'

export const Text = ({ children, ...props }) => (
  <BaseText {...props}>{children}</BaseText>
)

Text.Title = ({ children, ...props }) => (
  <BaseText fontSize={24} fontFamily="bold" textAlign="center" {...props}>
    {children}
  </BaseText>
)

Text.Subtitle = ({ children, ...props }) => (
  <BaseText fontSize={16} fontFamily="regular" textAlign="center" {...props}>
    {children}
  </BaseText>
)

Text.CardTitle = ({ children, ...props }) => (
  <BaseText fontSize={16} fontFamily="medium" {...props}>
    {children}
  </BaseText>
)

Text.ModalTitle = ({ children, ...props }) => (
  <BaseText fontSize={20} fontFamily="medium" {...props}>
    {children}
  </BaseText>
)

Text.Label = ({ children, ...props }) => (
  <BaseText fontSize={12} fontFamily="medium" {...props}>
    {children}
  </BaseText>
)

Text.propTypes = {
  fontSize: PropTypes.number,
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold', 'demiBold']),
  width: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}
