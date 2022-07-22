import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { trpc } from '@/utils/trpc';
import Board from 'components/Board';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['hello', {text: 'Matt'}])
  if(!hello.data) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* {hello.data.greeting} */}
      </div>
      <Board />
    </div>
  )
}

export default Home
