import styles from './card-book.module.css';

type CardBookProps = {
    title: string;
    author: string;
    category: string;
    pagesRead: number;
    percentageCompleted: number;
}

const CardBook = ({ title, author, category, pagesRead, percentageCompleted }: CardBookProps) => {
    return (
        <div className={styles.card__livros} key={title}>
            <div className={styles.container__livros_lidos}>
                <h4>{title}</h4>
                <p>{author}</p>
                <p>{category}</p>
                <p>{pagesRead}</p>
                <p>{percentageCompleted}%</p>
            </div>

            <div className={styles.acoes}>
                <button>Abrir detalhes</button>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </div>

    )
}

export default CardBook;