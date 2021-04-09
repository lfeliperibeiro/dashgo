import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Felipe Ribeiro</Text>
          <Text color={'gray.300'} fontSize={'small'}>
            piporibeiro@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Felipe Ribeiro"
        src="https://github.com/lfeliperibeiro.png"
      />
    </Flex>
  );
}
