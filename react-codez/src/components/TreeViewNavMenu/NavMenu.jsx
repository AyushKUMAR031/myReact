import MenuList from "./menu-List";
import sheet from "./style.module.css";


export default function TreeNavMenu({ Menus = [] }) {
    return (
        <>
            <h1>Tree Navigation Menu</h1>
            <div className={sheet.mainContainer}>
                <MenuList list={Menus} />
            </div>
        </>
    )
}