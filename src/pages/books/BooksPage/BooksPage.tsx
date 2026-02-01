import { Link } from 'react-router-dom';
import CardBook from '../../../components/books/CardBook/CardBook';
import styles from './books-page.module.css';
import { FiPlus } from 'react-icons/fi';
// import { FiPlus } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

export default function BooksPage() {

    const books = [
        {
            titulo: "As Aventuras de nao sei quem lá",
            autor: "Joaozinho Teste",
            categoria: "Ação",
            paginas_lidas: 115,
            percentual_concluido: 100
        },
        {
            titulo: "Um Romance aleatorio",
            autor: "Joaozinho Teste 2",
            categoria: "Romance",
            paginas_lidas: 50,
            percentual_concluido: 100
        },
    ]

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