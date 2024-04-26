import axios from 'axios';
import { ref } from 'vue';

const photo_page = ref(1);
const collection_page = ref(1);
const loading = ref(false);

const unsplahApi = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0BH3Tq106X_lfBW1ghdKt1OOL8yJR_WhelL8Ovji5CE'
    }
});

const getRandomPhotos = async () => {
    const { data } = await unsplahApi.get('/photos/random', { params: { count: '5' } });

    const urls = data.map(item => item.urls.regular);

    return urls;
};

const getCollections = async () => {
    const { data } = await unsplahApi.get('/collections', { params: { per_page: '4' } });

    const newData = data.map(item => ({
        title: item.title,
        total_photos: item.total_photos,
        links: {
            self: item.links.self,
            html: item.links.html
        },
        user: {
            username: item.user.username
        },
        cover_photo: {
            urls: {
                regular: item.cover_photo.urls.regular,
                small: item.cover_photo.urls.small
            }
        }
    }));

    return newData;
};

const getPhotos = async (term = null) => {

    console.log('Search by: ', term);
    loading.value = true;

    let data = [];

    if (term === null) {

        data = await listPhotos();

    } else {
        data = await searchPhotosByTerm(term);
    }


    const newData = data.map(item => ({
        description: item.description,
        urls: {
            regular: item.urls.regular,
            full: item.urls.full
        },
        links: {
            download: item.links.download,
            html: item.links.html
        },
        likes: item.likes,
        user: {
            name: item.user.name,
            profile_image: {
                small: item.user.profile_image.small
            }
        }
    }));

    console.log('Data Photos: ', newData);

    photo_page.value++;
    loading.value = false;

    return chunkArrayData(newData, 4);
};

const getListCollections = async (term = null) => {

    let data = [];

    if (term === null) {

        data = await listCollections();

    } else {
        data = await searchCollectionByTerm(term);
    }

    const newData = data.map(item => ({
        title: item.title,
        total_photos: item.total_photos,
        links: {
            html: item.links.html
        },
        preview_photos: item.preview_photos.map(photo => photo.urls.regular)
    }));

    collection_page.value++;

    return newData;
};

const searchPhotosByTerm = async (term) => {

    loading.value = true;

    const { data } = await unsplahApi.get('/search/photos', { params: { per_page: '16', page: photo_page.value, query: term } });

    console.log('seaching result: ', data.results)
    return data.results;

};

const listPhotos = async () => {

    const { data } = await unsplahApi.get('/photos', { params: { per_page: '16', page: photo_page.value } });

    return data;
};

const listCollections = async () => {
    const { data } = await unsplahApi.get('/collections', { params: { per_page: '16', page: collection_page.value } });

    console.log('seaching collections result: ', data);

    return data;
};

const searchCollectionByTerm = async (term) => {

    const { data } = await unsplahApi.get('/search/collections', { params: { per_page: '16', page: collection_page.value, query: term } });

    return data.results;
};

const chunkArrayData = (data, size) => {
    const chunkedArray = [];
    for (let i = 0; i < data.length; i += size) {
        chunkedArray.push(data.slice(i, i + size));
    }
    return chunkedArray;
};

export const api = { getRandomPhotos, getCollections, getPhotos, loading, getListCollections }
