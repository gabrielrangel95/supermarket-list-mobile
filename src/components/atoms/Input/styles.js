import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.px(16)}px;
  margin-top: ${({ theme }) => theme.px(4)}px;
  font-family: ${({ theme }) => theme.regular};
`
