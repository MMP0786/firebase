import React from 'react'
import {app} from './firebase'
import {query,getFirestore, collection, addDoc, doc, getDoc, where, updateDoc, deleteDoc} from "firebase/firestore"
import { async } from '@firebase/util';
// import { async } from '@firebase/util';

export default function Database() {
    const firestore = getFirestore(app);

 const addData = ()=>{
    addDoc(collection(firestore, "cities/raNCtvh3CXFW5LeXAAaC/more"), {
        live: "musharraf",
        from: 21
    })
 }

 const addData1 = async() =>{
    // const data = doc(firestore, "cities", "raNCtvh3CXFW5LeXAAaC")
    // const res = await getDoc(data);

    // console.log(res)

    const dataRef = collection(firestore, "cities")

    const q = query (dataRef, where("age", "==" ,21))

 }
 const addData2 = async()=>{
    const dataRef = doc(firestore, "cities", 'raNCtvh3CXFW5LeXAAaC');

    const res = deleteDoc(dataRef)
    // const res = updateDoc(dataRef,{
    //     name: "Musharraf Panwar"
    // })

 }

  return (
    <div>Database
        <p>
            <button onClick={addData}>add data</button>
            <button onClick={addData1}>set data</button>
            <button onClick={addData2}>Update data</button>
        </p>
    </div>
  )
}
