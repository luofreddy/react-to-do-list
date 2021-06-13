import { useState } from 'react';
import React from 'react';
import { v4 } from 'uuid';



const Edit = ( { setEven} ) => {

    const [note, setNote] = useState("");
    const noteChange = (e) =>{
        setNote(e.target.value);
    }
    const [date, setDate] = useState("");
    const dateChange = (e) =>{
        setDate(e.target.value);
    }
    const [time, setTime] = useState("");
    const timeChange = (e) =>{
        setTime(e.target.value);
    }

    const addEven = ( ) =>{
        setEven(function(prevData){
            return [...prevData,{
                id: v4(),
                note,
                date,
                time,
            }]
        });
        
    }

    return <div className = "container">
        <h1 className = "title">備忘錄</h1>
        <p className = "input_item">備忘事項</p>
        <input value = { note } onChange = {noteChange}></input>
        <p className = "input_item">日期</p>
        <input type = "Date" value = { date } onChange = {dateChange}></input>
        <p className = "input_item">時間</p>
        <input type = "Time" value = { time } onChange = {timeChange}></input>        
        <button className = "add" onClick = {addEven}>新增</button>



    </div>
}
export default Edit ;