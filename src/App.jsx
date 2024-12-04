import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Content from "/components/Content.jsx"
import Umbreon from "./assets/umbreon.png"
import Footer from "/components/Footer.jsx"


function Header() {
  return (<h1 style={{color: "yellow"}}>Simple React Application</h1>);
}



// function Footer() {
//   return (<h1>Created by Me, of course.</h1>);
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <a href="https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)" target="_blank">
          <img src={Umbreon} className="logo umbreon" alt="Umbreon logo" />
        </a>
      <Header/>
      <Content color="#646cffaa" text="This is my first React Application!" />
      <Content color="springgreen" text="Wish me luck..." />
      <Content color="orangered" text="I think I've got it!" />
      <Footer/>
    </>
  )
}

export default App
