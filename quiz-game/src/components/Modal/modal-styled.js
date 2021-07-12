import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: black;
`

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  z-index: 100;
  transition: all 0.6s ease;

`

export const ModalWindow = styled.div`
  background: rgba(255,55,95,0.2);
  width: 420px;
  height: 490px;
  border-radius: 0.5rem;
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);

`

export const Title = styled.div`
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 30px;

`

export const QuestionContainer = styled.div`
    margin-right: 240px;

`
export const Question = styled.div`
  color: #fff;
`

export const RadioBtn = styled.input`
  cursor: pointer;
`

export const Answer = styled.span`
  font-size: 14px;
  margin-left: 25px;
  color: #fff;
  
`

export const AnswerContainer = styled.div`
 position: absolute;
 margin-left: 45px;
 margin-top: 5px;

`

export const QuizBox = styled.div`
  position: relative;
  padding: 3px;

`