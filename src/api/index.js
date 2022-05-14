import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table2.json',
        method: 'get',
        params: query
    });
};
