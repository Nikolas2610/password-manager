import React from "react"

export default function InputField(props) {
    return (
        <div className="relative w-full mb-3">
            {props.showTitle ? props.showTitle : true &&
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    {props.title}
                </label>
            }

            <input
                type={props.type}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(event) => props.onChangeData({ key: props.item, data: event.target.value })}
            />
        </div>
    )
}