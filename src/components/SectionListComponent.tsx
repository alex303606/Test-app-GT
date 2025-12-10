import React, { useCallback } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const keyExtractor = (item: string) => item;

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

type Props = {};

export const SectionListComponent: React.FC<Props> = () => {
  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <View style={styles.itemWrapper}>
        <Text style={styles.item}>{item}</Text>
      </View>
    ),
    [],
  );

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: { title: string } }) => (
      <Text style={styles.title}>{title}</Text>
    ),
    [],
  );

  const renderItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator} />;
  }, []);

  const renderSectionSeparator = useCallback(() => {
    return <View style={styles.sectionSeparator} />;
  }, []);

  const renderListEmptyComponent = useCallback(
    () => (
      <View style={styles.listEmpty}>
        <Text style={styles.text}>{'Добавьте\nзначение'}</Text>
      </View>
    ),
    [],
  );

  return (
    <SectionList
      contentContainerStyle={styles.sectionList}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      sections={[]}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ListEmptyComponent={renderListEmptyComponent}
      SectionSeparatorComponent={renderSectionSeparator}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '400',
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionList: {
    flexGrow: 1,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 14,
  },
  itemWrapper: {
    backgroundColor: 'white',
    height: 64,
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 24,
    elevation: 3,
  },
  itemSeparator: {
    marginBottom: 16,
  },
  sectionSeparator: {
    marginBottom: 24,
  },
});
