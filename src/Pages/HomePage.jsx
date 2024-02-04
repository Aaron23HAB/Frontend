import useNotes from "../Hooks/useNotes"

export const HomePage = () => {
    const {notes, loading, error} = useNotes();

        if(loading) return <p>cargando notas...</p>
        if(error) return <p>{error}</p>

        console.log(notes);
    return (
    <section>
        <h1>Latest Notes</h1>
        <p> Aqui van las notas</p>
    </section>
    );
}