import { FormEvent, useState } from "react";

function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  function somar() {
    window.alert(valor1 + valor2);
  }

  function handleValor1(event: FormEvent<HTMLInputElement>) {
    if (event == null) {
      return;
    }

    const value = event.currentTarget.value;

    setValor1(+value);
  }

  function handleValor2(event: FormEvent<HTMLInputElement>) {
    if (event == null) {
      return;
    }

    const value = event.currentTarget.value;

    setValor2(+value);
  }

  return (
    <>
      Digite o valor 1:{" "}
      <input onChange={handleValor1} type="text" value={valor1} />
      Digite o valor 2:{" "}
      <input onChange={handleValor2} type="text" value={valor2} />
      <button onClick={() => somar()}>Somar</button>
    </>
  );
}

export default App;
