import React from 'react'; // Component import is not needed for functional components
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import './App.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contact/add" element={<AddContact />} />
                <Route exact path="/contact/edit/:id" element={<EditContact />} />
                <Route exact path="/test" element={<Test />} />
                <Route exact path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
