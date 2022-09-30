import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Button, Input, Icon, Text, Box } from '~/components/atoms'
import { addItem, updateItem, deleteItem } from '~/services'
import { Modal, CloseContainer, QuantityButton } from './styles'

export const FormModal = ({ visible, onClose, selectedItem }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const closeModal = () => {
    setName('')
    setQuantity(1)
    onClose()
  }

  const onIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const onDecreaseQuantity = () => {
    setQuantity(quantity - 1)
  }

  const onDelete = async () => {
    const result = await deleteItem(selectedItem?._id)
    if (result?.error) {
      Alert.alert('Error ao excluir item.', 'Por favor, tente novamente.')
      return
    }
    closeModal()
  }

  const onSave = async () => {
    if (name.length <= 3) {
      Alert.alert('Nome do item deve conter mais do que 3 caracteres')
      return
    }

    const result = (await selectedItem)
      ? updateItem(selectedItem._id, {
          name,
          quantity,
          checked: selectedItem.checked,
        })
      : addItem({
          name,
          quantity,
        })

    if (result?.error) {
      Alert.alert('Erro ao salvar item, por favor, tente novamente')
      return
    }

    closeModal()
  }

  useEffect(() => {
    if (selectedItem && selectedItem?._id) {
      setName(selectedItem.name)
      setQuantity(selectedItem.quantity)
    } else {
      setName('')
      setQuantity(1)
    }
  }, [selectedItem])

  return (
    <Modal transparent={true} visible={visible} onRequestClose={closeModal}>
      <Box align="center" justify="flex-end" bg="darkTransparent">
        <Box align="center" h={502} bg="white" btlr={16} btrr={16}>
          <Box
            h={60}
            flexDir="row"
            align="center"
            justify="center"
            borderColor="grey"
            borderBottomWidth={1}
            mb={24}
          >
            <Text.ModalTitle>
              {selectedItem ? 'Editar item' : 'Adicionar novo item'}
            </Text.ModalTitle>
            <CloseContainer onPress={onClose}>
              <Icon name="close" />
            </CloseContainer>
          </Box>
          <Input
            value={name}
            onChangeText={setName}
            label="Nome"
            placeholder="Ex: Arroz"
          />
          <Text.Label mt={12} mb={12} width={358}>
            Quantidade
          </Text.Label>
          <Box
            h={64}
            w={358}
            flexDir="row"
            align="center"
            justify="space-between"
          >
            <QuantityButton onPress={onIncreaseQuantity}>
              <Icon name="chevron-up" size={32} />
            </QuantityButton>
            <Text fontFamily="bold" fontSize={56}>
              {quantity}
            </Text>
            <QuantityButton
              disabled={quantity === 1}
              onPress={onDecreaseQuantity}
            >
              <Icon name="chevron-down" size={32} />
            </QuantityButton>
          </Box>
          <Button marginTop={24} onClick={onSave}>
            {selectedItem ? 'Atualizar' : 'Adicionar'}
          </Button>
          {selectedItem && (
            <Button
              onClick={onDelete}
              marginTop={16}
              variant="outline"
              icon="trash"
            >
              Excluir item
            </Button>
          )}
          <Button marginTop={16} variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

FormModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
}
