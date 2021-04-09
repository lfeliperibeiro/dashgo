import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex width="100%" my={6} maxWidth={1480} mx={'auto'} px={6}>
        <Sidebar />
        <Box flex={1} borderRadius={8} bg={'gray.800'} p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size={'lg'} fontWeight={'normal'}>
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} colors={'gray.300'} width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data da cadastro</Th>}

                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                {isWideVersion ? (
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Felipe Ribeiro</Text>
                      <Text fontSize="small" color="gray.300">
                        piporibeiro@gmail.com
                      </Text>
                    </Box>
                  </Td>
                ) : (
                  <Td px={0}>
                    <Box>
                      <Text fontWeight="bold">Felipe Ribeiro</Text>
                      <Text fontSize="small" color="gray.300">
                        piporibeiro@gmail.com
                      </Text>
                    </Box>
                  </Td>
                )}

                {isWideVersion && <Td>07 de Abril, 2021</Td>}

                {isWideVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    >
                      Editar
                    </Button>
                  </Td>
                ) : (
                  <Td p={0}>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="purple"
                      variant={'ghost'}
                      p={0}
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    ></Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
