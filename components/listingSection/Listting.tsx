import React from 'react'

interface listtingPropType{
    title: string;
    btnName: string;
    isDissable: boolean;
    clickBtn: any;
}
export default function Listting(props:listtingPropType) {
    const { title , btnName, isDissable, clickBtn} = props;
    return (
        <>
            <div>Latest House Listting</div>
            <button>Explore Now</button>
        </>
    )
}
