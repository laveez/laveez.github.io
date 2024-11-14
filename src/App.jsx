import resumeData from '../data/resume.json';
import Resume from './components/Resume.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <Resume resumeData={resumeData} />
    </div>
  );
};

export default App;
