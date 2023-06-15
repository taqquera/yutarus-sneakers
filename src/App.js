
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Contnent/Content';


const sneakers = [
  { title: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: '6499', imageUrl: '/img/sneakers/1.jpg' },
  { title: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: '6499', imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Кросівки Puma X Aka Boku Future Rider', price: '6499', imageUrl: '/img/sneakers/3.jpg' },
  { title: 'Чоловічі Кросівки Nike Air Max 270', price: '6499', imageUrl: '/img/sneakers/4.jpg' },
  { title: 'Чоловічі Кросівки Under Armour Curry 8', price: '6499', imageUrl: '/img/sneakers/5.jpg' },
  { title: 'Чоловічі Кросівки Nike Kyrie 7', price: '6499', imageUrl: '/img/sneakers/6.jpg' },
  { title: 'Чоловічі Кросівки Jordan Air Jordan 11', price: '6499', imageUrl: '/img/sneakers/7.jpg' },
  { title: 'Чоловічі Кросівки Nike LeBron XVIII', price: '6499', imageUrl: '/img/sneakers/8.jpg' },
  { title: 'Чоловічі Кросівки Nike Lebron XVIII Low', price: '6499', imageUrl: '/img/sneakers/9.jpg' },
  { title: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: '6499', imageUrl: '/img/sneakers/10.jpg' },
  { title: 'Кросівки Puma X Aka Boku Future Rider', price: '6499', imageUrl: '/img/sneakers/11.jpg' },
  { title: 'Чоловічі Кросівки Nike Kyrie Flytrap IV', price: '6499', imageUrl: '/img/sneakers/12.jpg' },
]

function App() {
  return (
    <div className="App">
      <Header />
      
      <Content sneakers={sneakers} />

    </div>
  );
}

export default App;
