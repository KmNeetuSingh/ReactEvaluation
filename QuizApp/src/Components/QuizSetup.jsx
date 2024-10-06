import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuizConfig } from '../redux/quizSlice.jsx';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function QuizSetup() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [amount, setAmount] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startQuiz = () => {
    dispatch(setQuizConfig({ name, category, difficulty, amount }));
    navigate('/quiz');
  };

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center"> SetUp Your Quiz</Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Difficulty</FormLabel>
          <Select
            placeholder="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Number of Questions</FormLabel>
          <NumberInput
            value={amount}
            onChange={(valueString) => setAmount(valueString)}
            min={1}
            max={50}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button onClick={startQuiz} colorScheme="teal" width="full">
          Start Quiz
        </Button>
      </Stack>
    </Box>
  );
}

export default QuizSetup;
