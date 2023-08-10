import { useState } from 'react';
import Inventory from '../stores/Inventory.json';

export default function useFetch(){
  const [loading, setLoading] = useState(true);


  const message = "fetching data from api";
  let obj = {};

  function get(url:string){
    console.log(url);
    obj = Inventory;
    setLoading(false);
    return obj;
  }

  

  return { get, message, loading };
}