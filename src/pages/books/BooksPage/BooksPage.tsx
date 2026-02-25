import { Link } from 'react-router-dom';
import CardBook from '../../../components/books/CardBook/CardBook';
import styles from './books-page.module.css';
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { fetchBooks, type Book } from '../../../services/books_service';
// import { FiPlus } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await fetchBooks();

                const formattedBooks: Book[] = data.results.map((book) => ({
                    titulo: book.title,
                    autor: book.author,
                    categoria: book.category,
                    paginas_lidas: book.total_pages_read,
                    percentual_concluido: book.percent_finished,
                }));

                setBooks(formattedBooks);
            } catch (error) {
                console.error("Erro ao buscar livros:", error);
            }
        };

        loadBooks();
    }, []);

    return (
        <div className={styles.container}>

            <div className={styles.pageHeader}>
                <h1>Books</h1>

                <Link to="/books/create" className={styles.btnPrimary}>
                    <FiPlus />
                    New Book
                </Link>
            </div>

            <input
                type="text"
                placeholder="Pesquise o livro"
                className={styles.inputSearch}
            />

            <div className={styles.filtros}>
                <ul>
                    <li>Ação</li>
                    <li>Aventura</li>
                    <li>Sci-Fi</li>
                    <li>Terror</li>
                    <li>Romance</li>
                </ul>
            </div>

            {/* LISTA */}
            {books.map((book) => (
                <CardBook
                    key={book.titulo}
                    title={book.titulo}
                    author={book.autor}
                    category={book.categoria}
                    pagesRead={book.paginas_lidas}
                    percentageCompleted={book.percentual_concluido}
                />
            ))}

        </div>
    )
}