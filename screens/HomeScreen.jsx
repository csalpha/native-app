import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import { SearchBar } from "react-native-screens";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5 flex-col'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className='font-bold text-xl'>
            {" "}
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          {/* <SearchIcon color='#00CCBB' size={20} /> */}
          <TextInput placeholder='Search...' keyboardType='default' />
        </View>
        {/* <AdjustmentsIcon size={35} color='#00CCBB' /> */}
      </View>

      {/* Body */}
      <ScrollView
        className='bg-gray-100 flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description="everyone's enjoying these juicy discounts!"
        />
        {/* Offers near you */}
        <FeaturedRow
          id='12345'
          title='Offers near you'
          description='Why not support your local restaurant tonight'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
