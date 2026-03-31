import Ex1 from './exercicios/Ex1/Ex1'
import Ex2 from './exercicios/Ex2/Ex2';
import Ex3 from './exercicios/Ex3/Ex3';
import Ex4 from './exercicios/Ex4/Ex4';
import Ex5 from './exercicios/Ex5/Ex5';
import Ex6 from './exercicios/Ex6/Ex6';
import Ex7 from './exercicios/Ex7/Ex7';
import Ex8 from './exercicios/Ex8/Ex8';
import Ex9 from './exercicios/Ex9/Ex9';
import Ex10 from './exercicios/Ex10/Ex10';
import Ex11 from './exercicios/Ex11/Ex11';
import Ex12 from './exercicios/Ex12/Ex12';
import Ex13 from './exercicios/Ex13/Ex13';
import Ex14 from './exercicios/Ex14/Ex14';
import Ex15 from './exercicios/Ex15/Ex15';
import Ex16 from './exercicios/Ex16/Ex16';
import "./styles/global.css"

export default function App() {
  return <SelecaoExercicios/>
}

function SelecaoExercicios() {
  const ex = 15 // Altere o número para escolher o exercício (1 a 16)

  return (
    <div>
      {ex === 1 && <Ex1 />}
      {ex === 2 && <Ex2 />}
      {ex === 3 && <Ex3 />}
      {ex === 4 && <Ex4 />}
      {ex === 5 && <Ex5 />}
      {ex === 6 && <Ex6 />}
      {ex === 7 && <Ex7 />}
      {ex === 8 && <Ex8 />}
      {ex === 9 && <Ex9 />}
      {ex === 10 && <Ex10 />}
      {ex === 11 && <Ex11 />}
      {ex === 12 && <Ex12 />}
      {ex === 13 && <Ex13 />}
      {ex === 14 && <Ex14 />}
      {ex === 15 && <Ex15 />}
      {ex === 16 && <Ex16 />}
    </div>
  );
}