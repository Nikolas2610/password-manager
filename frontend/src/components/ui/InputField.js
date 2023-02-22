import React from "react"

export const InputField = React.forwardRef((props, ref) => (
    <>
        <div className="relative w-full mb-3">
            {props.showTitle && props.showTitle === true ?
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    {props.title}
                </label>
                : null}

            <input
                ref={ref}
                name={props.item}
                type={props.type}
                className={`border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${props.errors ? 'border-red' : ''}`}
                placeholder={props.placeholder}
                defaultValue={props.value}
                onChange={(event) => props.onChangeData({ key: props.item, data: event.target.value })}
            />
        </div>
        {props.errors &&
            props.errors.map((error, index) => (
                <div className="text-red mb-3" key={index}>{error}</div>
            ))
        }
    </>
))