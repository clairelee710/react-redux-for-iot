import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switchPage } from '../actions'

const MenuListItem = ({ index, item }) => {
    console.log("MenuListItem");
    console.log(item);
    const currentPage = useSelector(state => state.currentPage) //find data from store.js by key
    const dispatch = useDispatch()

    return (
        <li className={"menu-item-box " + (currentPage === index ? 'active' : '')} onClick={() => dispatch(switchPage(index))}>
            <div className="menu-item">
                <p className="triangle"></p>
                <i className={`icon ${item.icon}`}></i>
                <p className="item-name">{item.page}</p>
            </div>
        </li>
    )
}

export default MenuListItem