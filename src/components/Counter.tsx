// import { Component } from 'react';
// import { connect } from 'react-redux';

// class Counter extends Component {
//   counter: number = 0;

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main>
//         <div>{this.counter}</div>
//         <button onClick={this.incrementHandler}>Increment</button>
//         <button onClick={this.decrementHandler}>Decrement</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment : () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const name = 'test';
export default name;