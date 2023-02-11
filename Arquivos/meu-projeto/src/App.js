import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'; /* Importando função HelloWrold */

function App() {

  const name = 'Mateus'

  const newName = name.toUpperCase() /* Letra Maiúscula */

  function sum(a, b)
  {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alternando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt='Minha Imagem' />
      <HelloWorld />
    </div>
  )
}

export default App;
