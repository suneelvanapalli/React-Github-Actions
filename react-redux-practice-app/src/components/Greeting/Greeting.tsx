import { useState } from 'react';

const Greeting: React.FC = () => {
  const [hasClicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <div>
      <p>Hello world!</p>
      {!hasClicked && <p>not clicked yet</p>}
      {hasClicked && <p>clicked</p>}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Greeting;
