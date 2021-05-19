import React from 'react'

interface Props{
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
}

const QuizCard: React.FC<Props> = (
    { question, 
      answers,
      callback,
      userAnswer,
      questionNumber,
      totalQuestion }) =>{

    return(

    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{__html: question }} />
            <div>
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
    </div>
 );
}

export default QuizCard;