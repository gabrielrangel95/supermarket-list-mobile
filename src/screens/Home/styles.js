import styled from 'styled-components/native'
import homeImage from '../../../assets/shopping-bag.png'

export const Image = styled.Image.attrs({
  source: homeImage,
  resizeMode: 'contain',
})`
  height: ${({ theme }) => theme.px(200)}px;
  width: ${({ theme }) => theme.px(200)}px;
`
