import styled from 'styled-components/native'

export const BoxContainer = styled.View`
  display: 'flex';
  height: ${({ h, theme }) =>
    h ? (typeof h === 'number' ? `${theme.px(h)}px` : h) : '100%'};
  width: ${({ w, theme }) =>
    w ? (typeof w === 'number' ? `${theme.px(w)}px` : w) : '100%'};
  flex-direction: ${({ flexDir }) => flexDir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  border-width: ${({ theme, borderWidth }) => theme.px(borderWidth || 0)}px;
  border-bottom-width: ${({ theme, borderWidth, borderBottomWidth }) =>
    theme.px(borderWidth ? borderWidth : borderBottomWidth || 0)}px;
  border-color: ${({ theme, borderColor }) =>
    theme[borderColor || 'transparent']};
  border-radius: ${({ theme, borderRadius }) => theme.px(borderRadius || 0)}px;
  border-top-left-radius: ${({ theme, borderRadius, btlr }) =>
    theme.px(borderRadius ? borderRadius : btlr || 0)}px;
  border-top-right-radius: ${({ theme, borderRadius, btrr }) =>
    theme.px(borderRadius ? borderRadius : btrr || 0)}px;
  padding: ${({ p, theme }) => theme.px(p || 0)}px;
  padding-right: ${({ pr, p, theme }) => theme.px(p ? p : pr || 0)}px;
  padding-left: ${({ pl, p, theme }) => theme.px(p ? p : pl || 0)}px;
  background-color: ${({ theme, bg }) => theme[bg || 'transparent']};
  margin-top: ${({ theme, mt }) => theme.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.px(mb || 0)}px;
  margin-right: ${({ theme, mr }) => theme.px(mr || 0)}px;
  margin-left: ${({ theme, ml }) => theme.px(ml || 0)}px;
`
