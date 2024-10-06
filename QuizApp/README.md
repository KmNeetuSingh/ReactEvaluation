###Quiz App task
Instructions:
Use React to solve this question.
Use Redux for global state management.
You are free to use any CSS solutions as long as it looks good.
The app should be deployed.
##Research...
Problem Statement:
You are tasked with building a quiz application
Your app should have three routes - Quiz Setup (/ - home route) - Quiz Page (/quiz) - Leaderboard (/leaderboard)

#Task 1....
Quiz Setup (/)
Allow users to set up a quiz by providing: - Name - Category (General Knowledge, Sports, Geography) - Difficulty level - Number of questions

Refer to this documentation to retrieve trivia questions: <https://opentdb.com/api_config.php>

Sample API Request : <https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple>
Upon clicking START QUIZ button, navigate the use to to Quiz Page on route /quiz where questions corresponding to the selected category and difficulty should be rendered.

#Task2.......
Quiz Page (/quiz)
Questions should be rendered one at a time, along with the relevant options for each question.
Add a timer to each question based on its difficulty level: 10 seconds for hard questions, 15 seconds for medium, and 20 seconds for easy.
If the timer expires, automatically proceed to the next question. If it's the final question, conclude the quiz. Alternatively, users can manually navigate to the next question by clicking the 'Next' button.
Display the current question number and the total number of questions, such as 'Question 2 of 10,' to indicate quiz progress.
Provide immediate feedback to users for correct and incorrect answers. Use modals or toasters to display this feedback effectively.

Implement Next and Previous buttons to allow users to navigate between questions seamlessly. On the last question, replace the Next button with a Submit button to end the quiz.
After submitting the quiz, display the user's performance metrics, including the number of correct and incorrect answers, total score, and percentage. This can be implemented as a modal or popup.
Create a /leaderboard route to display the results of all users who have participated in the quiz. Ensure the leaderboard is sorted by scores, with the highest-scoring user at the top of the list.
Store user details and leaderboard data locally using localStorage. Create a custom useLocalStorage hook to get and set items in localStorage.

#Task 3....
Leaderboard (/leaderboard)
Create a /leaderboard route to display the results of all users who have participated in the quiz, and add the leaderboard route to the Navbar.
Ensure the leaderboard is sorted by scores, with the highest-scoring user at the top of the list.
Store user details and leaderboard data locally using localStorage. Create a custom useLocalStorage hook to manage getting and setting items in localStorage.

#Task 4....
Pushed the data and deployed it......So let's do it #Keep coding..
quiz-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── QuizSetup.jsx
│   │   ├── QuizPage.jsx
│   │   └── Leaderboard.jsx
│   │
│   ├── redux/
│   │   ├── store.jsx
│   │   └── quizSlice.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── routes/
│     └── AppRoutes.jsx
│
│
└── package.json
###  Happy Coding....
# How to approach the problem....
First  read the questions.
Analyze the problem .
Distribute in a small tasks .
Create a structure .
Create components.
Add into in main file .
Create route and then hook 
for state mangement using redux.
Using localstorage for data Storage.
At last run and debug the code.
Pushed and Deploy the code .


## Keep Learning and Keep Coding..