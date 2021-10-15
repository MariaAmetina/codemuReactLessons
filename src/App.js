import { useState } from "react";
import "./App.css";

// function App() {
//   const [name, setName] = useState("maria");
//   const [surname, setSurname] = useState("ametina");
//   let [age, setAge] = useState(24);
//   const [banned, setBanned] = useState(false);

//   return (
//     <div className="App">
//       <p>{name}</p>
//       <p>{surname}</p>
//       <p>{age}</p>
//       <p>{banned ? "забанен" : "не забанен"}</p>

//       <button onClick={() => setName("pasha")}>change name</button>
//       <button onClick={() => setSurname("smirnov")}>change surname</button>
//       <button onClick={() => setAge(27)}>change age</button>
//       <br />
//       {/* {banned ? (
//         <button onClick={() => setBanned(false)}>разбанить</button>
//       ) : (
//         <button onClick={() => setBanned(true)}>забанить</button>
//       )} */}
//       <button onClick={() => setBanned(!banned)}>
//         {!banned ? "забанить" : "разбанить"}
//       </button>
//       <br />
//       <button onClick={() => setAge(--age)}>- age</button>
//       <button onClick={() => setAge(++age)}>+ age</button>
//     </div>
//   );
// }

// function countYearOfBirth(num) {
//   const date = new Date();
//   const year = date.getFullYear();

//   return year - num;
// }

// function App() {
//   const [value, setValue] = useState(0);
//   const [otherVal, setOtherVal] = useState("other");
//   const [age, setAge] = useState(0);

//   function handleChange(event) {
//     return setOtherVal(event.target.value);
//   }

//   return (
//     <div>
//       <input value={value} onChange={(event) => setValue(event.target.value)} />
//       <p>
//         {value} ** 2 = {value ** 2}
//       </p>
//       <p>в введенном тексте {value.length} символов</p>

//       <input value={otherVal} onChange={handleChange} />
//       <p>text: {otherVal}</p>

//       <input value={age} onChange={(event) => setAge(event.target.value)} />
//       <p>You were born in {countYearOfBirth(age)}</p>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [resultFirst, setResultFirst] = useState(0);
  const [resultSecond, setResultSecond] = useState(0);

  return (
    <div>
      <input value={first} onChange={(event) => setFirst(event.target.value)} />
      <input
        value={second}
        onChange={(event) => setSecond(event.target.value)}
      />

      <button onClick={() => setResultFirst(+first + +second)}>Сложить</button>
      <button onClick={() => setResultSecond(first * second)}>Умножить</button>

      <p>
        Сумма: {resultFirst} <br />
        Произведение:{resultSecond}
      </p>
    </div>
  );
}

export default App;
