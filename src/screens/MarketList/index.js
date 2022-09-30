import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { getItems, updateItem } from '~/services'

import {
  ListCard,
  Button,
  Loader,
  FormModal,
  ListHeaderComponent,
  ListEmptyComponent,
} from '~/components'
import { ScreenContainer, List, ButtonContainer } from './styles'

export const MarketListScreen = () => {
  const [selectedItem, setSelectItem] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [marketList, setMarketList] = useState([])

  const getUsernameList = async () => {
    setLoading(true)

    const list = await getItems()
    if (list?.error) {
      Alert.alert('Falha ao retornar lista do banco de dados')
      return
    }
    setMarketList(list)
    setLoading(false)
  }

  useEffect(() => {
    if (modalVisible === false) {
      getUsernameList()
    }
  }, [modalVisible])

  const onClickItem = item => {
    setSelectItem(item)
    setModalVisible(true)
  }

  const onCloseModal = async () => {
    setSelectItem(null)
    setModalVisible(false)
  }

  const onCheckItem = async item => {
    const result = await updateItem(item._id, {
      ...item,
      checked: !item.checked,
    })
    if (result?.error) {
      Alert.alert('Falha ao atualizar item.', 'Por favor, tente novamente')
      return
    }

    getUsernameList()
  }

  return (
    <ScreenContainer>
      {loading && <Loader />}
      <List
        showsVerticalScrollIndicator={false}
        data={marketList}
        renderItem={({ item }) => (
          <ListCard
            onCheckItem={() => onCheckItem(item)}
            onClickItem={() => onClickItem(item)}
            {...item}
          />
        )}
        keyExtractor={item => item._id}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
      />
      <ButtonContainer>
        <Button onClick={() => setModalVisible(true)}>
          Adicionar novo item
        </Button>
      </ButtonContainer>
      <FormModal
        visible={modalVisible}
        selectedItem={selectedItem}
        onClose={onCloseModal}
      />
    </ScreenContainer>
  )
}
