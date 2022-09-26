import { BaseText } from './styled'

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
