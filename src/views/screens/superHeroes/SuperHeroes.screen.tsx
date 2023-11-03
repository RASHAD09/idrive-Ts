import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@iDRIVE/navigation';
import {useSelector} from 'react-redux';
import {TRootState} from '@iDRIVE/state/store';
import {TMarvelSuperHero} from '@iDRIVE/services';
import styles from './SuperHeroes.styles';

type TSuperHeroesScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'SuperHeroes'
>;

const SuperHeroesScreen = ({route, navigation}: TSuperHeroesScreenProps) => {
  const {selectSuperHero} = route.params;
  const {superheroes} = useSelector((state: TRootState) => state);

  const goBack = () => navigation.goBack();
  const handleSelectHero = (name: string) => {
    selectSuperHero(name);
    goBack();
  };
  const renderHero: ListRenderItem<TMarvelSuperHero> = ({item}) => (
    <TouchableOpacity
      onPress={() => handleSelectHero(item.name)}
      style={styles.heroCard}>
      <Image
        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        style={styles.heroImage}
      />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
  const keyExtractor = (item: TMarvelSuperHero, index: number) =>
    `${item.id},${index}`;
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.header}>
        <Pressable
          onPress={goBack}
          hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}>
          <Text style={styles.buttonText}>back</Text>
        </Pressable>
      </View>
      <FlatList
        data={superheroes}
        renderItem={renderHero}
        keyExtractor={keyExtractor}
        style={styles.background}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default SuperHeroesScreen;
