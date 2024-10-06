import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Progress,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

function QuizPage() {
  const quizConfig = useSelector((state) => state.quiz.quizConfig);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useLocalStorage('leaderboard', []);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${quizConfig.amount}&category=${quizConfig.category}&difficulty=${quizConfig.difficulty}&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        startTimer(data.results);
      });
  }, [quizConfig]);

  const startTimer = (questions) => {
    const difficulty = questions[currentQuestion]?.difficulty;
    const time = difficulty === 'hard' ? 10 : difficulty === 'medium' ? 15 : 20;
    setTimeLeft(time);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          nextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const nextQuestion = () => {
    clearInterval(timerRef.current);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      startTimer(questions);
    } else {
      handleQuizSubmission();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      clearInterval(timerRef.current);
      setCurrentQuestion((prev) => prev - 1);
      startTimer(questions);
    }
  };

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
      toast.success('Correct answer!');
    } else {
      toast.error('Wrong answer!');
    }
    nextQuestion();
  };

  const handleQuizSubmission = () => {
    const username = prompt("Enter your username:");
    if (username) {
      const newEntry = { username, score };
      setLeaderboard((prev) => [...prev, newEntry]);
      navigate('/leaderboard');
    } else {
      toast.error("Username cannot be empty!");
    }
  };

  if (questions.length === 0) {
    return <Box textAlign="center" p={5}>Loading...</Box>;
  }

  return (
    <Box p={5}>
      <Heading mb={4}>Quiz Page</Heading>
      <Text mb={4}>Question {currentQuestion + 1} of {questions.length}</Text>
      <Text mb={4}>{questions[currentQuestion].question}</Text>
      <Progress hasStripe value={((currentQuestion + 1) / questions.length) * 100} mb={4} />
      <Stack spacing={3}>
        {questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer).sort().map((answer, index) => (
          <Button key={index} onClick={() => handleAnswer(answer)} colorScheme="teal" variant="solid" width="full">
            {answer}
          </Button>
        ))}
      </Stack>
      <Text mt={4}>Time left: {timeLeft} seconds</Text>
      <Stack direction="row" spacing={4} mt={4}>
        <Button onClick={previousQuestion} disabled={currentQuestion === 0}>
          Previous
        </Button>
        <Button onClick={nextQuestion}>
          Next
        </Button>
      </Stack>
    </Box>
  );
}

export default QuizPage;
