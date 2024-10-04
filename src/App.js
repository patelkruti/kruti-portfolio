import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Projects />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;
