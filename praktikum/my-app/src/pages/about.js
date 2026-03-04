import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: 24 }}>
        <h1>About</h1>
        <p>Nama Mahasiswa: Charellino Kalingga S</p>
        <p>NIM: 2341720205</p>
        <p>Program Studi: Tehnik Informatika</p>
      </main>
    </>
  )
}
