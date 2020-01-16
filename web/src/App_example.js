import React, { Fragment, useState } from 'react';

// Componente -> função que retorna algum conteudo, bloco isolado de (HTML, CSS, JS)
// Propriedade -> atributos do do componente, informações que um componente pai passa o componente filho
// Estado -> informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  // estado do componente
  const [counter, setCounter] = useState(0)

  // toda função do componente deve ser incluída dentro dele
  function incrementCount() {
    setCounter(counter + 1)
  }

  return (
    <Fragment>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCount}>Incrementar</button>
    </Fragment>
  );
}

export default App;
