import React from 'react';
import './box.css';
import { PropsWithChildren } from 'react'


type MyProps = {
};
type MyState = {};

class Box extends React.Component<PropsWithChildren<MyProps>, MyState> {
  render() {
    return (
      <span className='box'>
        {this.props.children}
      </span>
    );
  }
}

export default Box;
