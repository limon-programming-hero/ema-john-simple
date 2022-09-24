import './App.css';
import Shop from './Component/Shop/Shop.js';
import Header from './Component/Header/Header.js';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      {/* products={products} clickHandler={orderHandler} orderNumber={order} */}
    </div>
  );
}

export default App;
