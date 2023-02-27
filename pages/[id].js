import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


function id({response}) {

  return (
   <>
    <p>{response.name}</p>
   </>
  )
}

export async function getStaticPaths(){
  const request = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
  const res = await request.data;

  const paths = res.map(function (item) {
    return {
      params: {
        id:item.id.toString()
      }
    }
  })

  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps(context){
  const id = context.params.id

    const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await request.data;

    return {
        props: {
          response,
        },
      };
}

export default id