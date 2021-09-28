import axios from 'axios';

const baseUrl = 'https://artisaanz.herokuapp.com/product';

export const getAll = async () => {
    const response = await axios.get(baseUrl + '/all');
    return response.data;
};