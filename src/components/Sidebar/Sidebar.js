import React, { useState } from 'react';
import plusIcon from '../../assets/iconplus50.png';
import './Sidebar.css'

const Sidebar = (props) => {

  const [listopen, setListOpen] = useState(false)
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]
  return (
    <div className='sidebar'>
      <img src={plusIcon} alt='add' onClick={() => setListOpen(!listopen)}/>
      <ul className={`sidebar_list ${listopen && "sidebar_list_active"}`}>
       
        {
          color.map((item, index) => {
            return <li key={index} className='sidebar_list_item' style={{backgroundColor: item}}
                        onClick={() => props.addNote(item)}/>
          })
        }

      </ul>
    </div>
  )
}

export default Sidebar
