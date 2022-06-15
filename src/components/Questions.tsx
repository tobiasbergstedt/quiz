import { useState, useEffect } from 'react'
import './Questions.css'

// interface Question {
//   question: string,
//   id: string,
//   category: string,
//   difficulty: string,
//   correctAnswer: string,
//   incorrectAnswers: [
//     incorrect1: string,
//     incorrect2: string,
//     incorrect3: string
//   ]
// }

interface Question {
  question: string,
  correctAnswer: string,
  incorrectAnswers: [string]
}

const Questions = () => {
  const [answers, setAnswers] = useState<null | string[]>(null)
  const [randomQuestion, setRandomQuestion] = useState<any>(null)
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false)

let questions = [
  {question: `What is the name of Harry Potters' owl?`, correctAnswer: `Hedwig`, incorrectAnswers: [`Peggy`, `Anne`, `Fleur`]},
  {question: `What is the name of Harry Potters' love?`, correctAnswer: `Ginny Weasley`, incorrectAnswers: [`Hermione Granger`, `Mafelda Hopkirk`, `Rita Skeeter`]},
  {question: `What is the name of Harry Potters' mentor?`, correctAnswer: `Dumbledore`, incorrectAnswers: [`Draco`, `Fleur`, `Ron`]},
  {question: `What is the name of Harry Potters' mum?`, correctAnswer: `Lily`, incorrectAnswers: [`Martha`, `Cho`, `Vanessa`]}
]

useEffect(() => {
  let randomIndex = Math.floor(Math.random() * questions.length)
  let randomQuestion = questions[randomIndex]
  let answers = [randomQuestion.correctAnswer, randomQuestion.incorrectAnswers[0], randomQuestion.incorrectAnswers[1], randomQuestion.incorrectAnswers[2]]
  questions.splice(randomIndex)

  for (let i = answers.length - 1; i > 0;  i--) {
    let j = Math.floor(Math.random() * i)
    let k = answers[i]
    answers[i] = answers[j]
    answers[j] = k
  }
  setAnswers(answers)
  setRandomQuestion(randomQuestion)
}, [questionAnswered])




  // const [data, setData] = useState<null | Question[]>(null)

  // useEffect(() => {
  //   async function getData() {
  //     const response: Response = await fetch('https://the-trivia-api.com/api/questions')
  //     const apiData: any = await response.json()
  //     setData(apiData as Question[])
  //   }
  //   getData()
  // },[])

  // useEffect(() => {
  //   let nextQuestion = (event: any) => {
  //     if(event.target.textContent === randomQuestion.correctAnswer) {
  //       console.log(event.target.textContent, ' är rätt!')
  //       let myRandomIndex = Math.floor(Math.random() * questions.length)
  //       randomQuestion = questions[myRandomIndex]
  //       // questions.splice(myRandomIndex)
  //       console.log(randomQuestion);

  //     } else {
  //       console.log(event.target.textContent, ' är fel...')
  //     }
  //   }
  //   nextQuestion(event)
  // }, [questionAnswered])

  return (
    <div className='full-quiz'>
        {/* {data ? data.map(question => (
          <li key={question.id} className='single-question'>
            <h3>{question.question}</h3>
            <ul>
              <li>{question.correctAnswer}</li>
              <li>{question.incorrectAnswers[0]}</li>
              <li>{question.incorrectAnswers[1]}</li>
              <li>{question.incorrectAnswers[2]}</li>
            </ul>
          </li>
        )) : <li>No data yet.</li>} */}
        <div className='single-question'>
          <h3>{randomQuestion !== null ? randomQuestion.question: 'No data'}</h3>
          <div className='answers-grid'>
            <div className='answer' onClick={() => setQuestionAnswered(!questionAnswered)}><p className='answer-content'>{answers !== null ? answers[0] : 'No data'}</p></div>
            <div className='answer' onClick={() => setQuestionAnswered(!questionAnswered)}><p className='answer-content'>{answers !== null ? answers[1] : 'No data'}</p></div>
            <div className='answer' onClick={() => setQuestionAnswered(!questionAnswered)}><p className='answer-content'>{answers !== null ? answers[2] : 'No data'}</p></div>
            <div className='answer' onClick={() => setQuestionAnswered(!questionAnswered)}><p className='answer-content'>{answers !== null ? answers[3] : 'No data'}</p></div>
            <p>{randomQuestion !== null ? randomQuestion.correctAnswer: 'No data'}</p>
          </div>
        </div>
    </div>
  )
}

export default Questions
