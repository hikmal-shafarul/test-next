import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

function another({ response }) {

  const [name,setName] = useState('Generate')


  function clickHandler() {
    console.log('tombol ditekan')
    setName('Button')
  }

  function deleteHandler(id){
    console.log('tes')
  }

  return (
    <>
      <div className={styles.main}>
        <p>Hello from another page!</p>
        <Link href="/">Go back</Link>
        <p>asda</p>

        <div className={styles.item}>
          {response.map((item) => {
            return <p key={item.id} onClick={() => {deleteHandler(item.name)}}>{item.name}</p>;
          })}
        </div>
        <button
          style={{
            margin: "1rem 0",
            border: "none",
            backgroundColor: "coral",
            padding: "8px 4px",
            color: "white",
          }}
          onClick={() => clickHandler()}
        >
          {name}
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const request = await axios.get("https://jsonplaceholder.typicode.com/users");
  const response = await request.data;

  return {
    props: {
      response,
    },
  };
}

export default another;
