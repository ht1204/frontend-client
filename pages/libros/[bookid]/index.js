import Link from "next/link";

export async function getStaticProps(context) {
    const { bookid } = context.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${bookid}`);
    const data = await response.json();
    
    return {
        props: {
            book: data
        }
    }
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/`);
    const data = await response.json();

    return {
        paths: data.map(book => ({
            params: {
                bookid: String(book.id)
            }
        })),
        fallback: false
    }
}


const BookDetail = ({ book }) => {
    const { title } = book;
    return (
        <>
            <h1>{ title }</h1>
            <Link href="/libros">Listado de Libros</Link>
        </>
    );
}

export default BookDetail;