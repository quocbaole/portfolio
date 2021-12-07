import './App.scss';
import Advantage from './components/Advantage';
import Contact from './components/Contact';
import EduAndEx from './components/EduAndEx';
import Header from './components/Header'
import Overall from './components/Overall'
import Projects from './components/Projects';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Header />
      <Overall />
      <Advantage />
      <EduAndEx />
      <Projects />
      <Quotes />
      <Contact />
    </div>
  );
}

export default App;
