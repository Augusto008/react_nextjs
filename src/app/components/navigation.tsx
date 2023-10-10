'use client'
import { BaseSyntheticEvent, Fragment, useState } from 'react';

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function Menu({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleClick = (event: BaseSyntheticEvent, item: string, index: number) => { console.log("tag name: " + event.target.tagName); onSelectItem(item); setSelectedIndex(index); };
    const getList = () => {
        return items.length === 0 ? <li>No item found</li> : items.map((item, index) => (<li className={selectedIndex === index && "list-group-item active" || "list-group-item"} key={item} onClick={(event) => handleClick(event, item, index)} > {item} </li>));
    }
    return (
        <Fragment>
            <h3>{heading}</h3>
            <ul className="list-group"> 
                {getList()}
            </ul>
        </Fragment>
    );
} 

export default Menu;