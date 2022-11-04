import Link from "next/link";

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/`);
    const data = await response.json();
    
    return {
        props: {
            books: data
        }
    }
}

const BookList = ({ books }) => {

    const handleDelete = async (event, bookId) => {
        event.preventDefault();
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${bookId}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                _method: 'DELETE'
            })
        });

        if (response.ok) {
            window.location.href = '/libros';
        } 
    }


    return (
        <div>
            <h1>Libros</h1>
            <ul
                data-cy="book-list"
            >
                {books.map(({ id, title }) => (
                    <>
                        <li key={`book-${id}`}>
                            <Link 
                                href={`/libros/${id}`}
                                data-cy={`link-to-visit-book-${id}`}
                            >
                                {title}
                            </Link>
                            {' - '}
                            <Link 
                                href={`/libros/${id}/editar`}
                                data-cy={`link-to-edit-book-${id}`}
                            >
                                Editar
                            </Link>
                            {' - '}
                            <form 
                                onSubmit={(event) => handleDelete(event, id)}
                                style={{ display: 'inline'}}
                            >
                                <button
                                    data-cy={`link-to-delete-book-${id}`}
                                >
                                    Eliminar
                                </button>
                            </form>
                        </li>
                        <br/>
                    </>
                ))}
            </ul>
            <Link href="/libros/crear">Crear Libro</Link>
        </div>
    );
}

export default BookList;