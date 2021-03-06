import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='Ninjas' />
        <meta name='description' content='See all the Ninjas.' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam soluta expedita
          facilis deserunt tempora delectus reiciendis obcaecati, quidem voluptates ipsa perferendis
          non iste dolorem, repellat ea asperiores neque quaerat.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam soluta expedita
          facilis deserunt tempora delectus reiciendis obcaecati, quidem voluptates ipsa perferendis
          non iste dolorem, repellat ea asperiores neque quaerat.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
