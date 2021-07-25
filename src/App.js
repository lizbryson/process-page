import './App.css';
import Section from './Section.js';

const strategize = {
  title: 'Strategize',
  intro: 'A strong strategy is the springboard for success on every design project. From landing pages and social media strategy to full website overhauls, projects of all sizes benefit from clearly defined goals and team alignment across deliverables, targets, timelines, and more.',
  steps: [
    { title: 'Identify Goals + Methodology',
      description: 'What is the primary goal of the design? Who is our intended audience? How do we measure success? Asking these questions up front is key to building the infrastructure behind a project\'s design methodology.',
      image: '/goals-methodology.jpg'
    },
    { title: 'Research',
      description: 'What has worked well for the brand in the past? What are competitors in our space doing right? Where are there opportunities to grow? Leveraging historical data, competitor analysis, and any other available materials helps set the stage for initial design iterations.',
      image: '/moodboard.jpg'
    },
    { title: 'Sitemap',
      description: 'For larger website projects, sitemaps provide 30,000 foot view of the scope of work. This holisitc picture keeps me and my cross-functional team members aligned and ensures that no small piece of the proejct gets left behind at launch time.',
      image: '/sitemap.jpg'

    },
    {
      title: 'Wireframes',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      image: '/wireframe.jpg'

    }
  ]
};

const design = {
  title: 'Design',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    {
      title: 'Moodboards',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      image: '/moodboard.jpg'
    },
    {
      title: 'Exploratory Design',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Prototyping',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Feedback',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    }
  ]
}

const implement = {
  title: 'Implement',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    {
      title: 'Handoff and/or Build',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Style Guide',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Documentation',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    }
  ]
}

const test = {
  title: 'Test',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    {
      title: 'Heatmaps',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Conversion Tracking',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Direct Feedback',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Postmortem',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    }
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
