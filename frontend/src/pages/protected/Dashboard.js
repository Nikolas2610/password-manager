import { Alert, Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import personIcon from '../../assets/icons/person-fill.svg'
import { LockIcon, EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons'
import ModalForm from '../../components/modal/ModalForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPasswords } from '../../store/passwords/actions/passwords.actions'
import Loading from '../../components/Loading'
import DeleteModal from '../../components/modal/DeleteModal'

export default function Dashboard({ onSubmit, onModal, onDelete, onDeleteModal, onEditModal, onUpdate }) {
  const [hover, setHover] = useState(null);
  const isOpen = useSelector((state) => state.passwords.modal.isOpen);
  const isDeleteOpen = useSelector((state) => state.passwords.delete.isOpen);
  const passwords = useSelector((state) => state.passwords)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPasswords());
  }, [dispatch]);

  return (
    <>
      {passwords.loading && passwords.loading
        ?
        <Loading />
        :
        <>

          <ModalForm
            isOpen={isOpen}
            onSubmit={onSubmit}
            onModal={onModal}
            onUpdate={onUpdate}
          />
          <DeleteModal
            isOpen={isDeleteOpen}
            onDelete={onDelete}
            onModal={onDeleteModal}
          />
          <Box style={{ background: '#293462' }} height={'100vh'} pt={'14'} overflowY={'auto'}>
            <Container maxW={'container.xl'} px={'4'} py={'8'}>
              <Flex justify={'space-between'}>
                <Heading as={'h3'} size={'xl'} borderBottom={'1px'} color={'white'}>Dashboard</Heading>
                <Button leftIcon={<AddIcon />} bgColor={'transparent'} color={'white'} _hover={{ color: 'black', background: 'white' }} variant='outline' onClick={() => onModal(true)}>Add New Password</Button>
              </Flex>

              <Box py={'4'}>
                {passwords.passwords.length === 0
                  ?
                  <Alert>No Passwords</Alert>
                  :

                  <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                    {passwords.passwords.map(item => (
                      <GridItem w='100%' bg='blue.500' key={item.id}>
                        <Flex justify={'center'} p={'8'} bgColor={'ButtonFace'}>
                          <LockIcon boxSize={'12'} />
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
                                  _hover={{ color: 'black' }}
                                  onClick={() => onEditModal(item)}
                                />
                                <DeleteIcon
                                  onClick={() => onDeleteModal(true, item.id)}
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
                }
              </Box>
            </Container>
          </Box>
        </>
      }
    </>
  )
}
