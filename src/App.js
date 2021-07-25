import './App.css';
import Section from './Section.js';

const strategize = {
  title: 'Strategize',
  intro: 'A strong strategy is the springboard for success on every design project. From landing pages and social media strategy to full website overhauls, projects of all sizes benefit from clearly defined goals and team alignment across deliverables, targets, timelines, and more.',
  steps: [
    { title: 'Identify Goals + Methodology',
      description: 'What is the primary goal of the design? Who is our intended audience? How do we measure success? Asking these questions up front is key to building the infrastructure behind a project\'s design methodology.',
      style: 'double',
      image: '/goals-methodology.jpg'
    },
    { title: 'Research',
      description: 'What has worked well for the brand in the past? What are competitors in our space doing right? Where are there opportunities to grow? Leveraging historical data, competitor analysis, and any other available materials helps set the stage for initial design iterations.',
      style: 'double',
      image: '/moodboard.jpg'
    },
    { title: 'Sitemap',
      description: 'For larger website projects, sitemaps provide 30,000 foot view of the scope of work. This holisitc picture keeps me and my cross-functional team members aligned and ensures that no small piece of the proejct gets left behind at launch time.',
      style: 'single',
      image: '/sitemap.jpg'
    },
    {
      title: 'Wireframes',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      style: 'double',
      image: '/wireframe.jpg'

    }
  ]
};

const design = {
  title: 'Design',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    {
      title: 'Moodboards and/or Brand Standards',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      style: 'double',
      image: '/moodboard.jpg'
    },
    {
      title: 'Exploratory Design',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      link: {
        type: 'figma',
        url: '/'
      }
    },
    {
      title: 'Prototyping',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Feedback',
      style: 'double',
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
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Style Guide',
      style: 'double',
      description: 'Appending brand style guides to include web standards and styles',
    },
    {
      title: 'Documentation',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      image: '/documentation.png'

    }
  ]
}

const test = {
  title: 'Test',
  intro: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  steps: [
    {
      title: 'Heatmaps',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      'image': '/heatmap.jpg'
    },
    {
      title: 'Conversion Tracking',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      image: '/analytics.jpg'
    },
    {
      title: 'Direct Feedback',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    },
    {
      title: 'Postmortem',
      style: 'double',
      description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    }
  ]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-header__nav">
          <li><a href="#strategize">Strategize</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#implement">Implement</a></li>
          <li><a href="#test">Test</a></li>
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
