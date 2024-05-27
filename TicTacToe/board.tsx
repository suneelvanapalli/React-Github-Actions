import React from 'react';
import Square from './square';
import History from './history';

type MyProps = {
  value: string;
};
type MyState = {
  squares: string[];
  isXPlaying: boolean;
  history: Array<string[]>;
};

class Board extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      isXPlaying: true,
      history: [],
    };
  }
  render() {
    return (
      <div>
        <div>
          <Square
            value={this.state.squares[0]}
            onClick={() => {
              this.handleClick(0);
            }}
          ></Square>
          <Square
            value={this.state.squares[1]}
            onClick={() => {
              this.handleClick(1);
            }}
          ></Square>
          <Square
            value={this.state.squares[2]}
            onClick={() => {
              this.handleClick(2);
            }}
          ></Square>
        </div>
        <div>
          <Square
            value={this.state.squares[3]}
            onClick={() => {
              this.handleClick(3);
            }}
          ></Square>
          <Square
            value={this.state.squares[4]}
            onClick={() => {
              this.handleClick(4);
            }}
          ></Square>
          <Square
            value={this.state.squares[5]}
            onClick={() => {
              this.handleClick(5);
            }}
          ></Square>
        </div>
        <div>
          <Square
            value={this.state.squares[6]}
            onClick={() => {
              this.handleClick(6);
            }}
          ></Square>
          <Square
            value={this.state.squares[7]}
            onClick={() => {
              this.handleClick(7);
            }}
          ></Square>
          <Square
            value={this.state.squares[8]}
            onClick={() => {
              this.handleClick(8);
            }}
          ></Square>
        </div>
        <History
          versions={this.state.history.length}
          onClick={(i: number) => {
            this.handleHistoryVersionClick(i);
          }}
        ></History>
      </div>
    );
  }

  handleHistoryVersionClick(index: number) {
    let previousMove = this.state.history[index];
    this.setState({ squares: previousMove.slice() });
  }

  handleClick(i: number) {
    let nextSquares = this.state.squares.slice();
    // set the value only when the cell/box isn't clicked already
    if (nextSquares[i] === '') {
      nextSquares[i] = this.state.isXPlaying ? 'X' : 'O';
      // this is to set the previous state in the history
      this.setState({ history: [...this.state.history, this.state.squares] });
      this.setState({ squares: nextSquares });
      this.togglePlayerTurn();
    }
  }

  togglePlayerTurn() {
    this.setState({ isXPlaying: !this.state.isXPlaying });
  }

  calculateWinner() {}
}

export default Board;
