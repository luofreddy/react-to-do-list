import React from 'react'
import Item from './Item'


const List = ({ listData, delEven, submittingStatue }) => {
    
    return <div className = "List">
            {
                listData.map((item) => {
                    const { id, note, date, time } = item;
                    return <Item 
                        time = { time } 
                        note = { note } 
                        date = { date } 
                        key={id} 
                        id={id} 
                        delEven = { delEven } 
                        submittingStatue={ submittingStatue}/>
                })
            }
            </div>

}

export default List;