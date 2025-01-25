import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import styles from '@/styles/styles';
import YccCategory from '@/paths/getYccCategories';

const YccGallery = () => {
    const handleItemPress = (item: { id: string; title: string; cover: string }) => {
        router.push({
            pathname: '/ycc',
            params: { itemid: item.id },
        });
    };

    const renderItem = ({ item }: { item: { id: string; title: string; cover: string } }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => handleItemPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle} numberOfLines={1}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.galleryContainer}>
            <FlatList
                data={YccCategory.map((item) => ({
                    id: item.id,
                    title: item.title,
                    cover: item.cover,
                }))}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.galleryGrid}
            />
        </View>
    );
};

export default YccGallery;
