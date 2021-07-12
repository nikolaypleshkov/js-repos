import React, {useState, useEffect} from 'react'
import TypeButton from '../Buttons'
import { Wrapper,
         Container,
         ModalWindow, 
         Title, 
         Question, 
         QuestionContainer,
         AnswerContainer,
         RadioBtn,
         Answer,
         QuizBox} from './modal-styled'

import { quizData } from '../Quiz/data';


function Modal(){


    return (
        <Wrapper>
            <Container>
                <ModalWindow>
                    <Title >Quiz</Title>
                
                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[0].number}:&nbsp;&nbsp;{quizData[0].question}</Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[0].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[0].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[0].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>
                    <br />

                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[1].number}:&nbsp;&nbsp;{quizData[1].question}</Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[1].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[1].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[1].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>
                    <br />

                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[2].number}:&nbsp;&nbsp;{quizData[2].question}</Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[2].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[2].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio"/> <Answer >{quizData[2].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>

                    <p></p>
                
                    <TypeButton />
                    
                </ModalWindow>
            </Container>
        </Wrapper>
      )
}

export default Modal
