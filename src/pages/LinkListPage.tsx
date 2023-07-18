import React  from 'react';
// import LinkList from "@/data-structures/LinkList";
import { useState } from "react";

const LinkListPage = () => {

    // const [linklist] = useState(new LinkList());
    const [state, setState] = useState(0);
    
    const func = () => {
        setState(state + 1);
        console.log(state);
    }

    return (
        <div>
            <button onClick={func}>Button</button>
        </div>
    )
}

export default LinkListPage;