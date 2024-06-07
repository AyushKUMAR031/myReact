import { useState } from "react";
import Data from "./data";
import './acc.css';

//single selection 
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    {/*
    selected: This is a state variable that holds the current selection. Initially, it is set to null, meaning nothing is selected.
    setSelected: This is a function to update the selected state.
    useState(null): Initializes the selected state to null.
    */}
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
        console.log(getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
            {/*
            splice method: This is a built-in JavaScript method used to add or remove elements from an array.
            The syntax is array.splice(start, deleteCount, item1, item2, ...).
            */}
        }
        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    return <div className="wrapper">
        <center>
        <h1>Accordian</h1>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi-Selection</button>
            <div className="accordian">
                {
                    Data && Data.length > 0 ?
                        Data.map(dataItem => <div className="item">
                            <div onClick={enableMultiSelection ?
                                () => handleMultipleSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)}
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* 1st Way to display */}
                            {
                                enableMultiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                                    : selected === dataItem.id &&
                                    (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                            }

                            {/* 2nd Way to display */}
                            {/* 
                            { selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
                            } 
                        */}
                        </div>)
                        : (
                            <div>No Data Found</div>
                        )
                }
            </div>
        </center>
    </div>
}