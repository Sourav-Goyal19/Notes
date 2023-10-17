import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import './Sidebar.css';

export const Sidebar = ({AddNote}) => {
    const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='sidebar'>
            <AiFillPlusCircle size={44} cursor={'pointer'} onClick={()=>setIsOpen(!isOpen)} />
            <ul className={`color-container ${isOpen ? 'color-container_active':''}`}>
                {
                    color.map((color, index) => {
                        return (
                            <li key={index} onClick={()=>AddNote(color)} className='color' style={{ backgroundColor: color }} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
