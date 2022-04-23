import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
import TodoList from './TodoList'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    console.log(accounts);
    this.setState({ account: accounts[0] })
     const salaryParametre = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    // this.setState({ todoList })
    const tokenName =await salaryParametre.methods.name().call();
    this.setState({ name:tokenName });
    // const taskCount = await todoList.methods.taskCount().call()
    // this.setState({ taskCount })
    // for (var i = 1; i <= taskCount; i++) {
    //   const task = await todoList.methods.tasks(i).call()
    //   this.setState({
    //     tasks: [...this.state.tasks, task]
    //   })
    // }
    // this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      
      name: ''
    }
}
  //   this.createTask = this.createTask.bind(this)
  //   this.toggleCompleted = this.toggleCompleted.bind(this)
  

  // createTask(content) {
  //   this.setState({ loading: true })
  //   this.state.todoList.methods.createTask(content).send({ from: this.state.account })
  //   .once('receipt', (receipt) => {
  //     this.setState({ loading: false })
  //   })
  // }

  // toggleCompleted(taskId) {
  //   this.setState({ loading: true })
  //   this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
  //   .once('receipt', (receipt) => {
  //     this.setState({ loading: false })
  //   })
  // }

  render() {
    return (
     <div>
       <h1>{this.state.name}</h1>
     </div>
    );
  }
}

export default App;
