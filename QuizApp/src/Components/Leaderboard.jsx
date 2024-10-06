import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const Leaderboard = () => {
  const [leaderboard] = useLocalStorage('leaderboard', []); 
  const sortedLeaderboard = [...leaderboard].sort((a, b) => b.score - a.score);

  return (
    <Box className="leaderboard-container" p={5}>
      <Heading as="h1" mb={4}>
        Leaderboard
      </Heading>
      {sortedLeaderboard.length === 0 ? (
        <Text>No results yet. Play the quiz to see your score here!</Text>
      ) : (
        <Table variant="simple">
          <TableCaption placement="top">Scores of all participants</TableCaption>
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedLeaderboard.map((user, index) => (
              <Tr key={index}>
                <Td>{user.username}</Td>
                <Td isNumeric>{user.score}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default Leaderboard;
