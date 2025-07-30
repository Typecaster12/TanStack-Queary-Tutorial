import axios from "axios";

// https://jsonplaceholder.typicode.com/todos/
const Api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const Api2 = axios.create({
    baseURL: "https://www.themealdb.com",
})
//get method;
//if we use axios with tanStack for data fetching then
//we can do this is import this function in our file where we need data;
/*
export const getPostData = () => {
    try {
        return Api.get(`/posts`);
    } catch (error) {
        console.log(error);
    }
}
*/

//or can do this also;
//now import this function in file where we need data;
export const postsData = async () => {
    const res = await Api.get('/posts');
    return res.status === 200 ? res.data : [];
}

export const getFoodData = async() => {
    const res = await Api2.get('/api/json/v1/1/filter.php?i=chicken_breast');
    return res.status === 200 ? res.data.meals : [];
}