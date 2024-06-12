import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

export default function Question({
  questionText,
  answers,
  activeQuestionIndex,
  answerState,
  selectedAnswer,
  onSelectAnswer,
  onNullAnswerSelection,
}) {
  return (
    <div id='question'>
      <QuestionTimer
        timeout={10000}
        onTimeOutComplete={onNullAnswerSelection}
      ></QuestionTimer>
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      ></Answers>
    </div>
  );
}
