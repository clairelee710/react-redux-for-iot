import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setModeActive } from '../../../actions'

const ModesList = () => {
    const modesData = useSelector(state => state.modesData)
    const listItems = modesData.map((mode) =>
        <ModesListItem key={mode.no} mode={mode} />
    );
    return (
        <div className="mode-list">
            <p className="title">切换情境</p>
            <div id="mode-container" className="mode-container">
                <ul className="flexbox-items-wrapper">
                    {listItems}
                </ul>
            </div>
        </div>
    );
}

export default ModesList

function ModesListItem({ mode }) {
    const dispatch = useDispatch()
    return (
        <li className={`item ${mode.is_active ? "active" : ""}`}  onClick={() => dispatch(setModeActive(mode.no))}>
            <div className="item-box">
                <i className={`icon icon-${mode.icon}`}></i>
                <p className="name">{mode.name}</p>
            </div>
        </li>
    );
}