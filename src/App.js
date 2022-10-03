import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
          <Route exact path="/" element={<ProductListing/>} />
          <Route exact path="./product/:productId" element={<ProductDetails />} />
            {/* <Route path="./product/:productId" component={ProductDetails} /> */}
            <Route>404 Not Found!</Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
