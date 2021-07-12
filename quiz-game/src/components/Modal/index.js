import React from 'react'
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
    console.log();
    return (
        <Wrapper>
            <Container>
                <ModalWindow>
                    <Title >Quiz</Title>
                
                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[0].number}: {quizData[0].question}</Question>
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
                
                    <TypeButton />
                    
                </ModalWindow>
            </Container>
        </Wrapper>
      )
}

export default Modal
