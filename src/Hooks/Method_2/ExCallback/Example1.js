import React, { useCallback } from 'react';

/**
 * 知识点：
 *   - 概要理解 useCallback 的意义。
 *   - 每次修改 num, memoizedCallback 才发生了变化，否则不变。避免了重新生成。
 * 
 * 
 * 本例子本来是网上找的例子，但是运行结果不正确。然后我自己修改了。
 * 从网上找的例子，有一些是错误的。
 * 也有的因为版本更新而变为错误的。
 */

let fn = null;

function TestUseCallback({ num, name }) {

  const memoizedCallback = useCallback(
    () => {
      console.log('abc')
      return num1;
    },
    [num],
  );

  console.log('callback 是否相同：', Object.is(fn, memoizedCallback), name);
  console.log('num > ', num, name);

  fn = memoizedCallback;

  return (
    <div>
      <p>TestUseCallback</p>
    </div>
  )
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: num1,
      count: 0,
      name: '123'
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1
        }
      })
    }, 3000);
  }
  handleChangeNum = () => {
    this.setState({
      name: 'def',
      num: num2,
    });
  }
  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.handleChangeNum}>修改传入的Num值</button>
        <TestUseCallback num={num} name={this.state.name} />
      </div>
    );
  }
}

const Example1 = props => <div>
  <h3>Example-1</h3>
  <App />
</div>
export default Example1;