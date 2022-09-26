import { useState, useEffect } from 'react'
import { Modal, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from '~/components/atoms/Text'
import { EvilIcons } from '@expo/vector-icons'
import { Button } from '../Button'
import { Input } from '../Input'
import { colors, px } from '~/theme'
import { addItem, updateItem, deleteItem } from '~/services'

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
    <Modal
      style={styles.modalContainer}
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackgroundView}>
        <View style={styles.modalContentContainer}>
          <View style={styles.headerContainer}>
            <Text.ModalTitle>
              {selectedItem ? 'Editar item' : 'Adicionar novo item'}
            </Text.ModalTitle>
            <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
              <EvilIcons name="close" size={px(24)} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Input
            value={name}
            onChangeText={setName}
            label="Nome"
            placeholder="Ex: Arroz"
          />
          <Text.Label mt={12} mb={12} width={358}>
            Quantidade
          </Text.Label>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={onIncreaseQuantity}
              style={styles.quantityButton}
            >
              <EvilIcons
                name="chevron-up"
                size={px(32)}
                color={colors.primary}
              />
            </TouchableOpacity>
            <Text fontFamily="bold" fontSize={56}>
              {quantity}
            </Text>
            <TouchableOpacity
              disabled={quantity === 1}
              onPress={onDecreaseQuantity}
              style={styles.quantityButton}
            >
              <EvilIcons
                name="chevron-down"
                size={px(32)}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Button marginTop={px(24)} onClick={onSave}>
            {selectedItem ? 'Atualizar' : 'Adicionar'}
          </Button>
          {selectedItem && (
            <Button
              onClick={onDelete}
              marginTop={px(16)}
              variant="outline"
              icon="trash"
            >
              Excluir item
            </Button>
          )}
          <Button marginTop={px(16)} variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalBackgroundView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.darkTransparent,
  },
  modalContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: px(502),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: px(16),
    borderTopRightRadius: px(16),
  },
  headerContainer: {
    display: 'flex',
    height: px(60),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: px(1),
    borderBottomColor: colors.grey,
    marginBottom: px(24),
  },
  closeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    right: px(24),
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: px(358),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: px(48),
  },
  quantityButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: px(32),
    height: px(32),
    borderRadius: px(16),
    backgroundColor: colors.light,
    borderWidth: px(1),
    borderColor: colors.primary,
  },
})
