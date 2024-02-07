export const loadAllNotesService = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`);

    const json = await response.json();
    if(!response.ok){
        throw new Error (json.message);
    }
    return json.data;
}