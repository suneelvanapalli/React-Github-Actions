import React from 'react';
import './square.css';
import Box from './box';

type MyProps = {
  value: string;
  onClick: () => void;
};
type MyState = {};

class Square extends React.Component<MyProps, MyState> {
  render() {
    return (
      <Box>
        <button className='square' onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </Box>
    );
  }
}

export default Square;
