import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
function Task1() {
    const navi=useNavigate()


  return (
        <>
        <div style={{textAlign:"center"}}>
            <h1>Task1</h1>
            <h2>Introduction to React Router</h2>
  <p>
    React Router is a powerful library used for handling routing in React applications. 
    It enables the creation of single-page applications (SPAs) that dynamically update 
    the content displayed on the page without requiring a full page reload.
  </p>
  <p>
    By using React Router, developers can define routes for different components, 
    navigate between pages seamlessly, and create a user-friendly, performant navigation experience. 
    It supports dynamic routing, nested routes, and URL parameters, making it an essential 
    tool for building complex web applications.
  </p>
  <h1>Task2</h1>
  <p>Router installed</p>
  <h1>Task3</h1>
  <p>Completed when you click home link </p>
  <h1>Task4</h1>
    <Link to="/" >Home</Link>
    <Link to="/About">About</Link>
    <h1>Task5</h1>
    <Link to="/" >Home</Link>
    <Link to="/About">About</Link>
    <h1>Task6</h1>
    <Link to="/" >Home</Link>
    <h1>Task8</h1>
    <p>change local host path and check</p>
    <h1>Task9</h1>
    <p>Click the homepage and see the changes</p>
    <h1>Task10</h1>
    <p>Click the Aboutpage and see the changes</p>
    <h1>Task11</h1>
    <button onClick={()=>{
        navi("/About")
    }}>click to go about</button>
<h1>Task12</h1>
<Nav/>
<h1>Task13</h1>
<p>click protected page</p>
<h1>MiniProject1</h1>
<p>completed i have added Post page</p>
<h1>MiniProject2</h1>
<p>completed i have added Products page and Contacts page</p>
</div> 
</>
  )
}

export default Task1