import React, { useEffect, useState } from 'react'

const UsedFetch = (url , options={}) => {

const [data, setData] = useState(null);
const [pending, setPending] = useState(false);
const [error, setError] = useState(null);

async function fetchData(){
  try{

    const res = await fetch(url , {...options})
    if(!res.ok) throw new Error(res.statusText);

    const result = await res.json()

    setData(result)
    setError(null)
    setPending(false)
  }catch(e){
    setError(`${e} . Some Error Ocuured`);
    setPending(false)
  }
}

useEffect(()=>{
 fetchData()
},[url])

  return (
    {data , error , pending}
  )
}

export default UsedFetch