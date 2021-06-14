import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../../global/constants'

import React from 'react'
import Edit from './components/Edit'
import List from './components/List'

async function fetchData(setEven) {
    const res = await fetch(API_GET_DATA);
    const {data} = await res.json();
    setEven(data);
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({ data })
    })
}


const Home = () => {
    const [newEven, setEven] = useState([]);
    const submittingStatue = useRef(false);


    useEffect(()=>{
        if (!submittingStatue.current)        
            {return;}
        fetchSetData(newEven)
            .then(newEven => submittingStatue.current = false)        
    },[newEven]);

    useEffect(()=>{
        fetchData(setEven)        
    },[]);

    return <div className = "App">
        <Edit setEven = { setEven } submittingStatue={ submittingStatue }/>
        <List listData = { newEven } delEven = { setEven } submittingStatue={ submittingStatue }/>        
        </div>
    

}

export default Home;