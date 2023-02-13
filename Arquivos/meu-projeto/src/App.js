import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'; /* Importando função HelloWrold */
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  /*
  const name = 'Mateus'

  const newName = name.toUpperCase() /* Letra Maiúscula */ 

  /*
  function sum(a, b)
  {
    return a + b
  }


  const url = 'https://via.placeholder.com/150'
  */

  const nome = "Maria"

  return (
    <div className="App">

      {/* 
      <h2>Alternando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt='Minha Imagem' />
      */}

      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Mateus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} /> {/* Passando o nome por variável */}
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />

    </div>
  )
}

export default App;
