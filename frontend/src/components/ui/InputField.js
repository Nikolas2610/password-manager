import React from "react"
import { FormControl, Input, FormErrorMessage, FormLabel, Box, Button, InputRightElement, InputGroup } from '@chakra-ui/react'

export default function InputField({ title, placeholder, value, type, item, onChangeData, errors, rightElementPassword, rightElementAction, showPassword, color = 'black' }) {
    return (
        <Box marginBottom={'3'}>
            <FormControl isInvalid={!!errors}>
                {title && <FormLabel color={color}>{title}</FormLabel>}
                <InputGroup>
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
                        color={'black'}
                    />
                    {rightElementPassword &&
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={rightElementAction}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    }
                </InputGroup>
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