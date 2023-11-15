import axios from "axios";

const INSTANCE = axios.create({
    baseURL: "https://boolean-api-server.fly.dev/nazartymiv/",
});

export async function getContact(contactId) {
    const url = `/contact/${contactId}`;

    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllPosts() {
    try {
        const response = await INSTANCE.get("/post");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getComments(postId) {
    const url = `/post/${postId}/comment`;

    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}