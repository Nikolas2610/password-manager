import React from "react"

export default function ButtonForm(props) {
    return (
        <button
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 bg-primary hover:bg-red"
            type={props.type ? props.type : 'button'}
            onClick={() => props.action}>
            {props.title}
        </button>
    )
}