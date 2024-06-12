import { useState } from "react";
import MenuList from "./menu-List";
import sheet from "./style.module.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function MenuItem({ item }) {

    const [displayCurrentChild, setCurrentChild] = useState({});

    function handleToggleChildren(getlabel) {
        setCurrentChild({
            ...displayCurrentChild,
            [getlabel]: !displayCurrentChild[getlabel]
        })
    }

    return (
        <li>
            <div className={sheet.ItemContainer}>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                displayCurrentChild[item.label] ? <FaToggleOn color="#fff" size={25} /> : <FaToggleOff color="#fff" size={25} />
                            }
                        </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}