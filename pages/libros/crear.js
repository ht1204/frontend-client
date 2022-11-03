import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BookCreate = () => {
    const router = useRouter();
    const [bookTitle, setBookTitle] = useState('');
    const [errors, setErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: bookTitle
            })
        });

        if (response.ok) {
            setErrors([]);
            setBookTitle('');
            return router.push('/libros');
        } 

        const data = await response.json();
        setErrors(data.errors);
        setSubmitting(false);
    }

    return (
        <>
            <h1>
                Crear Libros
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) => setBookTitle(event.target.value)}
                    value={bookTitle}
                    disabled={submitting}
                    type="text"
                    data-cy="input-book-title"
                />
                <button
                    disabled={submitting}
                    data-cy="btn-submit-book"
                >
                    {submitting ? 'Enviando...' : 'Enviar'}
                </button>
                <br />
                {errors.title && (
                    <span style={{
                        color: 'red',
                        display: 'block'    
                    }}>
                        {errors.title}
                    </span>
                )}
            </form>
            <br />
            <Link href="/libros/">Lista de Libros</Link>
        </>
    );
}

export default BookCreate;