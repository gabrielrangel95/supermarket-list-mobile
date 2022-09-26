import styled from 'styled-components/native'

export const BaseText = styled.Text`
  width: ${({ theme, width }) => (width ? `${theme.px(width)}px` : 'auto')};
  font-size: ${({ theme, fontSize }) => theme.px(fontSize || 14)}px;
  color: ${({ theme, color }) => theme[color || 'textColorDark']};
  font-family: ${({ theme, fontFamily }) => theme[fontFamily || 'regular']};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin-top: ${({ theme, mt }) => theme.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.px(mb || 0)}px;
`
