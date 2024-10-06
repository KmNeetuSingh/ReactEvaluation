import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" mt="50px">
      <Heading as="h2" size="xl" mb="4">
        404 - Page Not Found
      </Heading>
      <Text fontSize="lg" mb="4">
        The page you're looking for doesn't exist.
      </Text>
      <Link href="/" color="teal.500" fontWeight="bold">
        Go to Home
      </Link>
    </Box>
  );
};

export default NotFound;
