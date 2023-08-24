import { useState } from 'react';
// import Inventory from '../stores/Inventory.json';

export default function useFetch(baseUrl : string){
  const [loading, setLoading] = useState(true);
  const message = "fetching data from api";
  // let obj = {};

  function get(url:string): Promise<[]>{

    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
      .then((response) => response.json())
      .then(data => {
        if (!data){
          setLoading(false);
          return reject(data);
        }  
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });

    // console.log(url);
    // obj = Inventory;
    // setLoading(false);
    // return obj;  
  }

  function post(url:string, body:object) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        if(!data){
          setLoading(false);
          return reject(data);
        }
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });

  }

  function Delete(url:string) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        if(!data){
          setLoading(false);
          return reject(data);
        }
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });

  }

  return { get, post, Delete, message, loading };
}