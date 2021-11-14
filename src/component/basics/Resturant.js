import React from 'react'
import "./Style.css"
import Menu from "./Menu"
import MenuCard from './MenuCard'

const Resturant = () => {

    const [MenuData, setMenuData] = React.useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((currentElement)=>{
            return currentElement.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <>
        
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__items" onClick={()=>filterItem("Breakfast")} >Breakfast</button>
                <button className="btn-group__items" onClick={()=>filterItem("Lunch")}>Lunch</button>
                <button className="btn-group__items" onClick={()=>filterItem("Dessert")}>dessert</button>
                <button className="btn-group__items" onClick={()=>setMenuData(Menu)}>All</button>
            </div>
        </nav>
            <MenuCard MenuData={MenuData}/>
        </>
    )
}

export default Resturant
