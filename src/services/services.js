import axios from 'axios';

const baseUrl = 'https://artisaanz.herokuapp.com';

export const getAllProducts = async () => {
    const response = await axios.get(baseUrl + '/product/all');
    return response.data;
};

export const getMakers = async () => {
    const response = await axios.get(baseUrl + '/seller/all');
    return response.data;
};