import React from 'react';

type MyProps = {
  versions: number;
  onClick: (index: number) => void;
};
type MyState = {};

class History extends React.Component<MyProps, MyState> {
  render() {
    return (
      <ul>
        {[...Array(this.props.versions)].map((e, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                this.props.onClick(i);
              }}
            >
              Move {i}
            </button>
          );
        })}
      </ul>
    );
  }
}

export default History;
