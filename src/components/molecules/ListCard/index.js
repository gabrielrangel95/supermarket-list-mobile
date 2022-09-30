import PropTypes from 'prop-types'
import { Text, Box, Touchable, Icon } from '~/components/atoms'

export const ListCard = ({
  name,
  quantity,
  checked,
  onClickItem,
  onCheckItem,
}) => {
  return (
    <Box
      w={358}
      h={58}
      flexDir="row"
      align="center"
      bg={checked ? 'light' : 'white'}
      borderWidth={1.2}
      borderColor="primary"
      borderRadius={8}
      p={8}
      mb={12}
    >
      <Touchable
        h={24}
        w={24}
        borderRadius={24}
        bg={checked ? 'primary' : 'light'}
        onPress={onCheckItem}
        align="center"
        justify="center"
        borderWidth={2}
        borderColor="primary"
        mr={12}
      >
        {checked && (
          <Icon iconFamily="feather" name="check" size={16} color="white" />
        )}
      </Touchable>
      <Box w={280}>
        <Text.CardTitle color={checked ? 'primary' : 'textColorDark'}>
          {name}
        </Text.CardTitle>
        <Text>{quantity} unidades</Text>
      </Box>
      <Touchable align="center" justify="center" w={24} onPress={onClickItem}>
        <Icon iconFamily="feather" name="chevron-right" />
      </Touchable>
    </Box>
  )
}

ListCard.prototype = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func.isRequired,
  onCheckItem: PropTypes.func.isRequired,
}
