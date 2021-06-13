import React from 'react'
import Item from './Item'


const List = ({ listData, delEven}) => {
    
    return <div className = "List">
            {
                listData.map((item) => {
                    const { id, note, date, time } = item;
                    return <Item time = { time } note = { note } date = { date } key={id} id={id} delEven = { delEven }/>
                })
            }
            </div>

}

export default List;