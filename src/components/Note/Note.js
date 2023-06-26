import React from 'react';
import './Note.css';
import deleteIcon from '../../assets/iconsdelete64.png';

let timer = 500, timeout

const Note = (props) => {

    const formateDate = (value) => {
        if(!value) return;

        const date = new Date(value);
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ]

        let hrs = date.getHours();
        let ampm = hrs>12 ? "PM" : "AM";
        hrs = hrs < 10 ? ("0" + hrs) : hrs;
        hrs = hrs>12 ? (hrs = 24 - hrs) : hrs;

        let min = date.getMinutes();
        min = min<10? ("0"+ min) : min;

        let day = date.getDate();
        const month=monthNames[date.getMonth()]

        return `${hrs}:${min} ${ampm} ${day} ${month}`
    }

    const debounce = (func) => {
        clearTimeout(timeout)
        timeout = setTimeout(func, timer);
    }

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id))
    }


 
  return (
    <div className='note' style={{backgroundColor: props.note.color}}>

        <textarea className='note_text custom-scroll' defaultValue={props.note.text} onChange={(event) => updateText(event.target.value, props.note.id)}/>

        <div className='note_footer'>
            <p>{formateDate(props.note.time)}</p>
            <img src={deleteIcon} alt='delete' onClick={() => props.deleteNote(props.note.id)}/>
        </div>
       
      
    </div>
  );
}

export default Note
