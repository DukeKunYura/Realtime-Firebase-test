import sendRequest from '../functions/sendRequest';

export class DB {
    static addPost(text) {
        return new Promise((resolve, reject) => {
            const newPost = { "content": text };
            const data = sendRequest(
                'POST',
                "https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
                newPost
            );
            resolve(data)
        })
    };

    static loadPosts = () => {
        return new Promise(function (resolve, reject) {
            const data = sendRequest(
                'GET',
                "https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
            )
            resolve(data)
        })
    };

    static deletePost = (id) => {
        return new Promise(function (resolve, reject) {
            sendRequest(
                'DELETE',
                `https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
            )
            resolve()
        })
    };

    static updatePost = (id, text) => {
        return new Promise(function (resolve, reject) {
            const patchedPost = { "content": text }
            sendRequest(
                'PATCH',
                `https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`,
                patchedPost
            )
            resolve()
        })
    };
}