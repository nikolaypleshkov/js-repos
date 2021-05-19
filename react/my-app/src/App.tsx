import React, { useState } from 'react';
import './App.css';
import QuizCard from './components/QuizCard';
import { fetchQuizAPI } from './API';
import { QuestionState ,Difficulty } from './API'

interface AnswersObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswersObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizAPI(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver){
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if(correct) setScore(prev => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () =>{
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }
    else{
      setNumber(nextQuestion);
    }
  }
    return (
      <div className="App">
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>
          Start
        </button>
        ): null}
       {!gameOver ?  <p className="score">Score:</p> : null}
        {loading && <p>Loading Questions</p>}
        {!loading && !gameOver &&(
         <QuizCard 
          questionNumber={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        /> )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          NextQuestion
        </button>): null}
        </div>
  );
}

export default App;
