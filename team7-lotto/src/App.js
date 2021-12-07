import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page1Rand from './components/Page1/Page1Rand';
import './App.css';

const App = () => {
	return (
		<Router>
      <Routes>
        <Route path="/page1" element={ <Page1/> } />
        <Route path="/page1/:repeat" element={ <Page1Rand/> } />
        <Route path="/page2" element={ <Page2/> } />
        <Route path="/" element={ <Main/> } />
			</Routes>
		</Router>
  );
}

export default App;
