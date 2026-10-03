import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="page-layout">
      <NavigationBar />
      <main className="container page-content">
        <div className="content-panel">
          {/* These are the three page mappings from Exercise 5. */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/read" element={<Header />} />
            <Route path="/create" element={<Content />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
