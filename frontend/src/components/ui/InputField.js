import React from "react"
import { FormControl, Input, FormErrorMessage, FormLabel, Box } from '@chakra-ui/react'

export default function InputField({ title, placeholder, value, type, item, onChangeData, errors }) {
    return (
        <Box marginBottom={'3'}>
            <FormControl isInvalid={!!errors}>
                {title && <FormLabel color={'white'}>{title}</FormLabel>}
                <Input
                    variant='outline'
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={(event) => onChangeData({
                        key: item,
                        data: event.target.value
                    })}
                    errorBorderColor='red.300'
                    bgColor={'white'}
                    type={type}
                    marginBottom={'2'}
                    focusBorderColor={'blue.400'}
                />
                {errors &&
                    errors.map((error, index) => (
                        <FormErrorMessage key={`${item}-${index}`}>{error}</FormErrorMessage>
                    ))}
            </FormControl>
        </Box>
    )
}

export const INPUT = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email'
}