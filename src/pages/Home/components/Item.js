import React from 'react'


const Item = ( { id, note, date, time, delEven, submittingStatue }) => {
    
    const delItem = () =>{
        submittingStatue.current = true;
        delEven(function(prev){
            return prev.filter(item => item.id !== id);
        })
    }

    return <div className = "item">
        <div>
            <p> {note} </p>
            <p>{date} {time}</p>
        </div>
        <button className = "remove" onClick = { delItem }>刪除</button>
    </div>

}

export default Item;