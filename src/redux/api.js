
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




const POKEURL = "https://pokeapi.co/api/v2/pokemon/";


export async function movimientos(name) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response) throw new Error('Error en la peticion')

        const data = await response.json();

       
        const movimientos_nombre = await Promise.all(
            data.moves.map(async (move) => {
                const res_movimiento_data = await fetch(move.move.url);
                if (!res_movimiento_data.ok) throw new Error('Error al obtener movimiento');
                
                const movimiento_data = await res_movimiento_data.json();

                const traduccion = movimiento_data.names.find(
                    (name) => name.language.name === 'es'
                );

                return (traduccion) ?  traduccion.name : 'no hay';
            })
        );

        return movimientos_nombre;


        


    } catch (error) {
        throw error
    }


}

movimientos('pikachu').then(data => console.log(data));