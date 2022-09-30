import styled from 'styled-components/native'

export const Modal = styled.Modal`
  flex: 1;
`

export const CloseContainer = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${({ theme }) => theme.px(24)}px;
`

export const QuantityButton = styled.TouchableOpacity`
  display: flex;
  height: ${({ theme }) => theme.px(32)}px;
  width: ${({ theme }) => theme.px(32)}px;
  border-radius: ${({ theme }) => theme.px(16)}px;
  align-items: center;
  justify-content: center;
  border-width: ${({ theme }) => theme.px(1)}px;
  background-color: ${({ theme }) => theme.light};
  border-color: ${({ theme }) => theme.primary};
`
