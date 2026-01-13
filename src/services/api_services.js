export const getPersonajes = async (dispatch) => {

    const response = await fetch(`https://thesimpsonsapi.com/api/characters`);

    if (!response.ok) {
        console.log('personajes no encontrados');
        return;
    }

    const data = await response.json();
    console.log(data.results)

    dispatch({ type: 'get_personajes', payload: data.results})
}