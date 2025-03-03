
export async function getServerData(text) {
    const number = text.length;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${number}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


export async function getServerConversations() {


    try {

        const randomPost = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPost}/comments`)
        const data = await response.json();

        return data
    } catch (error) {
        throw (error)
    }



}


