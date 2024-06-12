import MenuItem from "./menu-Item";
import sheet from "./style.module.css";

export default function MenuList({ list = [] }) {
    return (
        <ul className={sheet.ListContainer}>
            {
                list && list.length ?
                    list.map(listItem => <MenuItem key={listItem.label} item={listItem} />)
                    : null
            }
        </ul>
    )
}