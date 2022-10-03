
import Container from './Container';
import Header from './Header';
import './index.css'

const Containerdata = [
{image: 'http://intocode.ru/d/react-project-1/images/1.jpg', price: '97000 ₽', product: 'MacBook'},
{image: 'http://intocode.ru/d/react-project-1/images/2.jpg', price: '35999 ₽', product: 'Galaxy'},
{image: 'http://intocode.ru/d/react-project-1/images/3.jpg', price: '58950 ₽', product: 'Скутер'},
{image: 'http://intocode.ru/d/react-project-1/images/4.jpg', price: '12000 ₽', product: 'Монитор Samsung'},
{image: 'http://intocode.ru/d/react-project-1/images/5.jpg', price: '500 ₽', product: 'Респераторная маска'},
{image: 'http://intocode.ru/d/react-project-1/images/6.jpg', price: '75000 ₽', product: 'Стиральная машина'},
]
  
function App() {
  return (
    <div className="App">
    <Header/>
    <Container data = {Containerdata}/>
    </div>
  );
}

export default App;
