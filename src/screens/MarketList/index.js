import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { USERNAME_DB_KEY } from "../../services/constants";
import { getData } from "../../services/db";
import { colors, px } from "../../theme";
import { ListCard, Button, Loader } from "../../components";
import { getItems } from "../../services/api/requests";

export const MarketListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [marketList, setMarketList] = useState([]);

  const getUsernameList = async () => {
    setLoading(true);
    const result = await getData(USERNAME_DB_KEY);
    if (result?.error) {
      Alert.alert("Falha ao retornar username");
      return;
    }
    setUsername(result);
    const list = await getItems();
    if (list?.error) {
      Alert.alert("Falha ao retornar lista do banco de dados");
      return;
    }
    setMarketList(list);
    setLoading(false);
  };

  const onClickChangeUsername = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getUsernameList();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Olá, {username}!</Text>
        <Text style={styles.description}>Sua lista de compras:</Text>
      </View>
      {loading && <Loader />}
      <FlatList
        data={marketList}
        renderItem={({ item }) => <ListCard {...item} />}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Sua lista está vazia.</Text>
            <Text style={styles.emptyDescription}>
              Clique no botão abaixo para adicionar um novo item ou altere o seu
              username.
            </Text>
            <Button
              onClick={onClickChangeUsername}
              marginTop={24}
              size="small"
              variant="outline"
            >
              Alterar username
            </Button>
          </View>
        )}
      />
      <View style={styles.buttonView}>
        <Button>Adicionar novo item</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: px(24),
  },
  title: {
    fontSize: px(24),
    fontWeight: "bold",
  },
  description: {
    fontSize: px(16),
    marginTop: px(8),
  },
  buttonView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: px(64),
  },
  emptyContainer: {
    height: px(400),
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: px(18),
    fontWeight: "500",
    marginBottom: px(8),
  },
  emptyDescription: {
    textAlign: "center",
  },
});
