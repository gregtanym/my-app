import Item1 from './pages/Item1';
import Item2 from './pages/Item2';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/item1' element={<Item1/>}/>
      <Route path='/item2' element={<Item2/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
