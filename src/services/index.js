export const loadNotesService = async () => {
    const response = await fetch(`${VITE_BACKEND_URL}`);

    const json = await response.json();
    if(!response.ok){
        throw new Error (json.message);
    }
    return json.data;
}