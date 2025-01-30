import { Text, View, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import {dataType, DATA} from "@/data/appData";

export default function Index() {
  //create simple function to call when item is selected
  //pass param of the item that was clicked on
  const handleRowPress = (item: dataType) => {
    console.log("Selected " + item.title);
    setSelectedId(item.id);
  };
  const [selectedId, setSelectedId] = useState<string>("1");
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Flatlist!</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id} //receive item, send back id
            //unique element, differentiates each item
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  //styles for each row of flatlist
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    //backgroundColor: "lightblue"
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
