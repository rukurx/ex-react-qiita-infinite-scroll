import axios from 'axios';

let per_page = 0;
export const getPosts = () => {
    per_page += 5;
    const url = `http://qiita.com/api/v2/items?page=1&per_page=${per_page}`;

    return axios.get(url)
        .then( res => {
            const result = res
            return {result}
        })
        .catch( err => {
            return {err}
    });
}
