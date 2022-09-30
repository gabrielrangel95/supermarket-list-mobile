import styled from 'styled-components/native'

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.white};
`
export const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: ${({ theme }) => theme.px(64)}px;
`

export const List = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.px(90),
  },
}))``
