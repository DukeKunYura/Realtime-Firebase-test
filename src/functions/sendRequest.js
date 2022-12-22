/**
 * Отправка CRUD fetch запросов
 */
export default async function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    if (method === 'POST') { body = JSON.stringify(body) };
    const response = await fetch(url, {
        method: method,
        body: body,
        headers: headers
    });
    if (method === 'POST' || method === 'DELETE') {
        const data = await response.json();
        return data
    };

    const data = await response.json();
    const posts = Object.keys(data).map(key => ({ ...data[key], id: key }));
    return posts
}