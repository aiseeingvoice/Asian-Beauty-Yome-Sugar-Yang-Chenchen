import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import SlideshowYcc from '@/components/SlideshowYcc';
import { getImagesByCategory } from '@/paths/getYccImagesPath';

const YccScreen = () => {
    const params = useLocalSearchParams();
    const yccCatId = Array.isArray(params.itemid) ? params.itemid[0] : params.itemid;

    const images = getImagesByCategory(yccCatId);

    return <SlideshowYcc images={images} />;
};

export default YccScreen;
