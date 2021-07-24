import './App.css';
import Section from './Section.js';

const strategize = {
  title: 'Strategize',
  intro: 'A strong strategy is the springboard for success on every design project. From landing pages and social media strategy to full website overhauls, projects of all sizes benefit from clearly defined goals and team alignment across deliverables, targets, timelines, and more.',
  steps: [
    'Identify Goals + Methodology',
    'Research',
    'Sitemap',
    'Wireframes'
  ]
};

const design = {
  title: 'Design',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    'Moodboards',
    'Design Comps',
    'Prototyping',
    'Feedback'
  ]
}

const implement = {
  title: 'Implement',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    'Handoff and/or Build',
    'Style Guide',
    'Documentation'
  ]
}

const test = {
  title: 'Test',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    'Heatmaps',
    'Conversion Tracking',
    'Direct Feedback',
    'Postmortem'
  ]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-header__nav">
          <li>Strategize</li>
          <li>Design</li>
          <li>Implement</li>
          <li>Test</li>
        </ul>
      </header>
      <main className="App-main">
        <div className="container">
        <h1 className="page-title">Process</h1>
          
          </div>
        
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
