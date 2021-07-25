import './App.css';
import Section from './Section.js';
import {strategize, design, implement, test } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__hero">
          <div className="container">
            <h1 className="page-title">A successful visual design does not take away from the content on the page or function.<br/><br/>Instead, it enhances it by engaging users and helping to build trust and interest in the brand.
              <a href="https://www.usability.gov/what-and-why/visual-design.html" target="_blank" rel="noreferrer">Source</a>
            </h1>
          </div>
          <ul className="App-header__nav">
            <li>My Process:</li>
            <li><a href="#strategize">Strategize</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#implement">Implement</a></li>
            <li><a href="#test">Test</a></li>
          </ul>
        </div>
        
       
      </header>
      <main className="App-main">
       
        
        <Section sectionIndex="01" content={strategize} />
        <Section sectionIndex="02" content={design}/>
        <Section sectionIndex="03" content={implement} />
        <Section sectionIndex="04" content={test} />

      </main>
      <footer className="App-footer">
        <div className="container">
          <a href="https://www.lizbryson.co">Portfolio</a>
          <a href="https://www.linkedin.com/in/lizbryson">LinkedIn</a>
          <a href="https://www.github.com/lizbryson">GitHub</a>
          <a href="https://dribbble.com/liz_bryson">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
