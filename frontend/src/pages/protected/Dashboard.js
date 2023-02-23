import { Box, Flex, Grid, GridItem, Heading, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import personIcon from '../../assets/icons/person-fill.svg'
import { LockIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import InputField, { INPUT } from '../../components/ui/InputField'

export default function Dashboard() {
  const [hover, setHover] = useState(null)
  const data = [
    {
      "id": 2,
      "user_id": 1,
      "title": "Update",
      "username": "Nikolas",
      "website": "www.psillovits.com",
      "notes": "update",
      "created_at": "2023-01-16T22:41:52.000000Z"
    },
    {
      "id": 3,
      "user_id": 1,
      "title": "Update",
      "username": "Nikolas",
      "website": "psillovits",
      "notes": "update",
      "created_at": "2023-01-16T22:41:52.000000Z"
    },
    {
      "id": 4,
      "user_id": 1,
      "title": "Update",
      "username": "Nikolas",
      "website": "psillovits",
      "notes": "update",
      "created_at": "2023-01-16T22:41:52.000000Z"
    },
    {
      "id": 5,
      "user_id": 1,
      "title": "Update",
      "username": "Nikolas",
      "website": "psillovits",
      "notes": "update",
      "created_at": "2023-01-16T22:41:52.000000Z"
    },
    {
      "id": 6,
      "user_id": 1,
      "title": "Update",
      "username": "Nikolas",
      "website": "psillovits",
      "notes": "update",
      "created_at": "2023-01-16T22:41:52.000000Z"
    },
  ]


  return (
    <>
      <Heading as={'h3'} size={'xl'} borderBottom={'1px'}>Dashboard</Heading>
      <Box  py={'4'}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {data.map(item => (
            <GridItem w='100%' bg='blue.500' key={item.id}>
              <Flex justify={'center'} p={'8'} bgColor={'ButtonFace'}>
                <DeleteIcon boxSize={'12'} />
              </Flex>
              <Box
                px={'4'}
                py={'2'}
                bgColor={'blue.400'}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
              >
                <Grid templateColumns={'repeat(2, 1fr)'} color={'white'}>
                  <GridItem rowSpan={1}>
                    <Heading as={'h6'} size={'md'}>{item.title}</Heading>
                    <Heading as={'h6'} size={'sm'}>{item.website}</Heading>
                    <Flex>
                      <Image src={personIcon} color={'white'} />
                      <Text ml={'1'}>{item.username}</Text>
                    </Flex>
                  </GridItem>
                  {hover === item.id && <GridItem rowSpan={1}>
                    <Flex
                      justify={'center'}
                      alignItems={'center'}
                      h={'full'}
                      gap={4}
                    >
                      <EditIcon
                        cursor={'pointer'}
                        boxSize={'6'}
                        _hover={{ color: 'black' }} />
                      <DeleteIcon
                        cursor={'pointer'}
                        boxSize={'6'}
                        _hover={{ color: 'black' }} />
                    </Flex>
                  </GridItem>}
                </Grid>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  )
}
