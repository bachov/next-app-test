import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Products(){
    return (
        <main>
        <h1 className={styles.title}>
        Product Page
        </h1>
        <Link href={`/`}>Back To Home ... </Link>
     
      </main>
    );
}