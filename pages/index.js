import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import AddButton from '@/components/AddButton'
import { useState } from 'react'
import Add from '@/components/Add'


export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <>
      <Head>
        <title>BMEN</title>
        <meta name="description" content="Best pizza shop in the town" />
        <meta name="keywords" content="Pizza queen, pizza, burger, cheese, fast food, tasty, spicy, hot, delicious, awesome, 7 inch, 12 inch, 13 inch, 14 inch, tomato, sauce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  )
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const response = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: response.data,
      admin,
    }
  }
};