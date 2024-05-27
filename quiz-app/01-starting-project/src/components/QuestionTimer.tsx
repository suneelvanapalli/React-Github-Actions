import { useEffect, useState } from 'react';

interface Props {
  timeout: number;
  onTimeOutComplete: any;
}

const QuestionTimer = (props: Props) => {
  const [remainingTime, setRemainingtime] = useState(props.timeout);

  useEffect(() => {
    setTimeout(props.onTimeOutComplete, props.timeout);
  }, [props.timeout, props.onTimeOutComplete]);

  useEffect(() => {
    setInterval(() => {
      setRemainingtime((prevState) => prevState - 100);
    }, 100);
  }, []);

  return (
    <progress
      id='progress'
      max={props.timeout}
      value={remainingTime}
    ></progress>
  );
};

export default QuestionTimer;
