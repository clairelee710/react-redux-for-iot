import React from 'react'
import { useSelector } from 'react-redux'
import MenuListItem from './MenuItems'

export const Menu = () => {

    const menus = useSelector(state => state.menus) //find data from store.js by key

    console.log("Menu");
    console.log(menus);

    const renderedListItems = menus.map((item, index) => {
        return <MenuListItem key={index} index={index} item={item} />
    })

    return (
        <footer className="fixed-bar bottom">
          <div id="menu-container" className="page-menu">
            <ul className="menu-wrapper">
              {renderedListItems}
            </ul>
          </div>
      </footer>
    );
};