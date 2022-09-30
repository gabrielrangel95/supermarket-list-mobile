import styled from 'styled-components/native'

export const TouchableContainer = styled.TouchableOpacity`
  display: 'flex';
  height: ${({ h, theme }) => (h ? `${theme.px(h)}px` : '100%')};
  width: ${({ w, theme }) => (w ? `${theme.px(w)}px` : '100%')};
  flex-direction: ${({ flexDir }) => flexDir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  border-width: ${({ theme, borderWidth }) => theme.px(borderWidth || 0)}px;
  border-color: ${({ theme, borderColor }) =>
    theme[borderColor || 'transparent']};
  border-radius: ${({ theme, borderRadius }) => theme.px(borderRadius || 0)}px;
  padding: ${({ p, theme }) => theme.px(p || 0)}px;
  background-color: ${({ theme, bg }) => theme[bg || 'transparent']};
  margin-top: ${({ theme, mt }) => theme.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.px(mb || 0)}px;
  margin-right: ${({ theme, mr }) => theme.px(mr || 0)}px;
  margin-left: ${({ theme, ml }) => theme.px(ml || 0)}px;
`
