import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div style={{margin: "0 auto", maxWidth: "900px", padding: "5px 10px"}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
