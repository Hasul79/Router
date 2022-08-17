import React from 'react';
import {
  Routes,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './style.css'
// import './Image.jsx';

const App = () => (
  <>
  <header>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li> 
          <>
          <input type="text"  placeholder="Search "/>
          
          </>
        </ul>
      </nav>
    </header>
  <Routes>
    
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      
  </Routes>
<main>
  

  <img src="data:image/jpeg;base64,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" height={300} width={300} />
 
</main>

  
  <footer> 
    
    <h1> About us</h1>
    <a href="https://github.com/Hasul79"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/hasmik-minasyan-1266b5ab/"><i class="fa-brands fa-linkedin-in"></i> </a>
    <a href="Հասմիկ Մինասյան#7277"><i class="fa-brands fa-discord"></i> </a>

    </footer>

  
</>
);
const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Users = () => <h2>Users</h2>;


export default App




