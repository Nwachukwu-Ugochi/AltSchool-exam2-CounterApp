import Counter from './pages/Counter';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from "react-router-dom"
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Counter/> } />
        <Route path="error" element={ <ErrorPage/> } />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    
    </div>
  );
}

export default App;
