import React, {useState, useEffect, Component} from 'react'
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
import { Button, Text } from '../Buttons/button-styled';

class Radio extends Component{
    constructor(){
        super();

        this.state = {
        name: 'no'
    }; 
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
     onValueChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

     onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
    }

}


function Modal(){
    const [count, setCount] = useState(0);
    
    useEffect(() => {

    });

    const radio = new Radio();

    return (
        <Wrapper>
            <Container>
                <ModalWindow>
                    <Title >Quiz</Title> 
                     <form action="#" onSubmit={radio.onSubmit}>
                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[0].number}:&nbsp;&nbsp;{quizData[0].question}</Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio" value="a" checked={radio.state.name === 'a'} onChange={radio.onValueChange} /> <Answer >{quizData[0].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="b" checked={radio.state.name === 'b'} onChange={radio.onValueChange} /> <Answer >{quizData[0].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="c" checked={radio.state.name === 'c'} onChange={radio.onValueChange} /> <Answer >{quizData[0].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>
                    <br />

                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[1].number}:&nbsp;&nbsp;{quizData[1].question}</Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio" value="a" checked={radio.state.name === 'a'} onChange={radio.onValueChange} /> <Answer >{quizData[1].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="b" checked={radio.state.name === 'b'} onChange={radio.onValueChange} /> <Answer >{quizData[1].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="c" checked={radio.state.name === 'c'} onChange={radio.onValueChange} /> <Answer >{quizData[1].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>
                    <br />

                    <QuizBox>
                    <QuestionContainer>
                     <Question>{quizData[2].number}:&nbsp;&nbsp;{quizData[2].question} </Question>
                    </QuestionContainer>
                    <AnswerContainer>
                     <RadioBtn type="radio" value="a" checked={radio.state.name === 'a'} onChange={radio.onValueChange}  /> <Answer >{quizData[2].answers.a}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="b" checked={radio.state.name === 'b'} onChange={radio.onValueChange} /> <Answer >{quizData[2].answers.b}</Answer>
                    </AnswerContainer>
                    <br />
                    <AnswerContainer>
                     <RadioBtn type="radio" value="c" checked={radio.state.name === 'c'} onChange={radio.onValueChange} /> <Answer >{quizData[2].answers.c}</Answer>
                    </AnswerContainer>
                    <br />
                    </QuizBox>

                    <p></p>
                
                    <Button onClick={() => setCount(count+1)} >
                        <Text>Next</Text>
                    </Button>
                     </form>

                    
                </ModalWindow>
            </Container>
        </Wrapper>
      )
}

export default Modal
