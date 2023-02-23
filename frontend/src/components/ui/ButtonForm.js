import React from "react"
import { Button } from "@chakra-ui/react"

export default function ButtonForm({type, action, loading, title}) {
    return (
        <Button
            type={type}
            w={'full'}
            colorScheme='facebook'
            onClick={() => action}
            isLoading={loading ? true : false}
            >
            {title}
        </Button>
    )
}

export const BUTTON = {
    BUTTON: 'button',
    SUBMIT: 'submit'
}