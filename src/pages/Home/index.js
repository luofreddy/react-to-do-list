import { useState } from 'react'

import React from 'react'
import Edit from './components/Edit'
import List from './components/List'



const Home = () => {

    const [newEven, setEven] = useState([]);


    return <div className = "App">
        <Edit setEven = { setEven }/>
        <List listData = { newEven } delEven = { setEven }/>        
        </div>
    

}

export default Home;