import { BrowserRouter,
  Route,
  Routes } from 'react-router-dom';
  import Listing from 'pages/Listing';
  import Navbar from 'components/Navbar/index';
  import Form from 'pages/Form';
  
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
