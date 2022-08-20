import { useState } from "react";
import Select from 'react-select';

const options = [
    {value:"" , label:"All"},
    {value:"Completed" , label:"Completed"},
    {value:"Uncompleted" , label:"Uncompleted"},
]

const NavBar = ({ unCompletedTodos,onChange,selectedOption}) => {
    
    // console.log(selectedOption);

    

    if (!unCompletedTodos) return <h2>set your today todos</h2>
    return (
        <header className="navBar">
            <span>{unCompletedTodos}</span> <h2>are not completed</h2>
            <Select className="select" value={selectedOption} onChange={onChange} options={options}/>
        </header>
    );
}

export default NavBar;