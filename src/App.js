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
// function App() {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);
//   const [resultFirst, setResultFirst] = useState(0);
//   const [resultSecond, setResultSecond] = useState(0);

//   return (
//     <div>
//       <input value={first} onChange={(event) => setFirst(event.target.value)} />
//       <input
//         value={second}
//         onChange={(event) => setSecond(event.target.value)}
//       />

//       <button onClick={() => setResultFirst(+first + +second)}>Сложить</button>
//       <button onClick={() => setResultSecond(first * second)}>Умножить</button>

//       <p>
//         Сумма: {resultFirst} <br />
//         Произведение:{resultSecond}
//       </p>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [value, setValue] = useState("привет");

//   const converter = {
//     а: "a",
//     б: "b",
//     в: "v",
//     г: "g",
//     д: "d",
//     е: "e",
//     ё: "e",
//     ж: "zh",
//     з: "z",
//     и: "i",
//     й: "y",
//     к: "k",
//     л: "l",
//     м: "m",
//     н: "n",
//     о: "o",
//     п: "p",
//     р: "r",
//     с: "s",
//     т: "t",
//     у: "u",
//     ф: "f",
//     х: "h",
//     ц: "c",
//     ч: "ch",
//     ш: "sh",
//     щ: "sch",
//     ь: "`",
//     ы: "y",
//     ъ: "",
//     э: "e",
//     ю: "yu",
//     я: "ya",
//   };

//   function translit(text) {
//     return text
//       .split("")
//       .map((el) => {
//         for (let [key, value] of Object.entries(converter)) {
//           if (el === key) {
//             el = value;
//           }
//         }
//         return el;
//       })
//       .join("");
//   }

//   return (
//     <div>
//       <textarea
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//       <p>{translit(value)}</p>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//21//////////////////////////////////////////////////////////////////////////////////////
//function App() {
// const [checked, setChecked] = useState(false);
// const [greeting, setGreeting] = useState("");

// function changeGreeting() {
//   checked ? setGreeting("hey") : setGreeting("bye");
// }

// return (
//   <div>
//     <input
//       type="checkbox"
//       checked={checked}
//       onChange={() => setChecked(!checked)}
//     />
//     <button onClick={changeGreeting}>do it</button>
//     <p>{greeting}</p>
//   </div>
// );

// const [html, setHtml] = useState(false);
// const [css, setCss] = useState(false);
// const [js, setJs] = useState(false);

// function checkIfTrue(booleanVal, textToPrint) {
//   return booleanVal ? textToPrint : null;
// }

// return (
//   <div>
//     <h2>Choose tecnology you know</h2>
//     <input
//       type="checkbox"
//       checked={html}
//       onChange={() => setHtml(!html)}
//     />{" "}
//     <p>HTML</p>
//     <input type="checkbox" checked={css} onChange={() => setCss(!css)} />{" "}
//     <p>CSS</p>
//     <input type="checkbox" checked={js} onChange={() => setJs(!js)} />{" "}
//     <p>JS</p>
//     <p>
//       So, you know: {checkIfTrue(html, "html")} {checkIfTrue(css, "css")}
//       {checkIfTrue(js, "js")}
//     </p>
//   </div>
// );

// const [checked, setChecked] = useState(false);
// let validator;

// if (checked) {
//   validator = (
//     <div>
//       <h2>Ура, вам уже есть 18 лет</h2>
//       <p>здесь расположен контент для взрослых</p>
//     </div>
//   );
// } else {
//   validator = (
//     <div>
//       <p>увы, вам еще нет 18 лет</p>
//     </div>
//   );
// }

// return (
//   <div>
//     <p>Вам есть 18 лет?</p>{" "}
//     <input
//       type="checkbox"
//       checked={checked}
//       onChange={() => setChecked(!checked)}
//     />
//     <div>{validator}</div>
//   </div>
// );

//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={() => setChecked(!checked)}
//       />
//       <p style={{ visibility: checked ? "hidden" : "visible" }}>hide me</p>
//     </div>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//22//////////////////////////////////////////////////////////////////////////////////////

//function App() {
// const [value, setValue] = useState("");

// return (
//   <div>
//     <select value={value} onChange={(event) => setValue(event.target.value)}>
//       <option>Moscow</option>
//       <option>Los Angeles</option>
//       <option>New York</option>
//     </select>
//     <p>Your choice: {value}</p>
//   </div>
// );

// const [value, setValue] = useState("");
// const citiesArr = ["Moscow", "Cheb", "Paris", "Oslo", "Tokyo"];

// const options = citiesArr.map((el, i) => {
//   return <option key={i}>{el}</option>;
// });

// return (
//   <>
//     <select value={value} onChange={(e) => setValue(e.target.value)}>
//       {options}
//     </select>
//     <p>{value}</p>
//   </>
// );

// const [value, setValue] = useState("");

// return (
//   <>
//     <select value={value} onChange={(e) => setValue(e.target.value)}>
//       <option value="1">0-12</option>
//       <option value="2">13-17</option>
//       <option value="3">18-25</option>
//       <option value="4">25 and more</option>
//     </select>

//     <p>
//       {value === "1" && "you are 0-12 y.o."}
//       {value === "2" && "you are 13-17 y.o."}
//       {value === "3" && "you are 18-25 y.o."}
//       {value === "4" && "you are 25 and more y.o."}
//     </p>
//   </>
// );
//}
//export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//23//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [value, setValue] = useState(0);

//   function changeHandler(e) {
//     return setValue(e.target.value);
//   }

//   return (
//     <>
//       <input
//         type="radio"
//         name="radio"
//         value="1"
//         onChange={changeHandler}
//         checked={value === "1" ? true : false}
//       />
//       <input
//         type="radio"
//         name="radio"
//         value="2"
//         onChange={changeHandler}
//         checked={value === "2" ? true : false}
//       />
//       <input
//         type="radio"
//         name="radio"
//         value="3"
//         onChange={changeHandler}
//         checked={value === "3" ? true : false}
//       />
//       <p>{value === "3" && "good girl"}</p>
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//24//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [value, setValue] = useState("default");

//   return (
//     <>
//       <input defaultValue={value} onChange={(e) => setValue(e.target.value)} />
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//25//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   // const [value, setValue] = useState([1, 2, 3, 4, 5]);

//   // const newArr = [...value];

//   // function addEl(arr) {
//   //   arr.push(arr[arr.length - 1] + 1);
//   //   return setValue(arr);
//   // }

//   // return (
//   //   <div>
//   //     <button onClick={() => addEl(newArr)}>add num</button>
//   //     <p>{newArr}</p>
//   //   </div>
//   // );

//   const [notes, setNotes] = useState([12, 789, 112, 34, 56, 78, 89]);
//   const copy = Object.assign([], notes);
//   //const copy = [...notes];
//   const indexForDel = 2;

//   function deleteElement(arr, i) {
//     arr.splice(indexForDel, 1);
//     return setNotes(arr);
//   }

//   function changeElement(arr, index, elem) {
//     arr[index] = elem;
//     return setNotes(arr);
//   }

//   function reverseArr(arr) {
//     //arr.sort((a, b) => a - b); //по возрастанию
//     arr.reverse();
//     return setNotes(arr);
//   }

//   return (
//     <div>
//       <p>{copy}</p>
//       <button onClick={() => deleteElement(copy, indexForDel)}>
//         delete element from array
//       </button>
//       <button onClick={() => changeElement(copy, indexForDel, "!")}>
//         chenge array's element
//       </button>
//       <button onClick={() => reverseArr(copy)}>reverse elements</button>
//     </div>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//26//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
//   const [value, setValue] = useState("");

//   const result = notes.map((el, i) => {
//     return <li key={i}>{el}</li>;
//   });

//   function onBlurInput() {
//     return setNotes([...notes, value]);
//   }

//   return (
//     <>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={() => onBlurInput()}
//       />
//       <ul>{result}</ul>
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//27//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [notes, setNotes] = useState(["a", "b", "c", "d"]);

//   const result = notes.map((el, i) => {
//     return (
//       <li key={i}>
//         {el}
//         <button onClick={() => deleteEl(i)}>delete element</button>
//       </li>
//     );
//   });

//   function deleteEl(i) {
//     setNotes([...notes.slice(0, i), ...notes.slice(i + 1)]);
//   }

//   return (
//     <>
//       <ul>{result}</ul>
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//28//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [notes, setNotes] = useState([1, 2, 3]);

//   function changeHandler(event, index) {
//     return setNotes([
//       ...notes.slice(0, index),
//       event.target.value,
//       ...notes.slice(index + 1),
//     ]);
//   }

//   function getSum(arr) {
//     return arr.reduce((prev, cur) => +prev + +cur);
//   }

//   const result = notes.map((note, index) => {
//     return (
//       <input
//         value={note}
//         key={index}
//         onChange={(e) => changeHandler(e, index)}
//       />
//     );
//   });

//   return (
//     <>
//       {result}
//       {getSum(notes)}
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//29//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [notes, setNotes] = useState(["a", "b", "c", "d"]);
//   const [editEL, setEditEl] = useState(null);

//   const result = notes.map((el, i) => {
//     return (
//       <li key={i}>
//         {el} <button onClick={() => setEditEl(i)}>edit</button>
//       </li>
//     );
//   });

//   function changeElement(e) {
//     setNotes([
//       ...notes.slice(0, editEL),
//       e.target.value,
//       ...notes.slice(editEL + 1),
//     ]);
//   }

//   return (
//     <>
//       <ul>{result}</ul>
//       <input
//         value={editEL >= 0 ? notes[editEL] : ""}
//         onChange={changeElement}
//         onBlur={(e) => (e.target.value = "")}
//       />
//     </>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//30//////////////////////////////////////////////////////////////////////////////////////
//Первый подход
// function App() {
//   const [notes, setNotes] = useState([12222, 23333, 3444, 455, 566, 677, 7888]);
//   const [editNum, setEditNum] = useState(null);
//   const [value, setValue] = useState("");

//   const result = notes.map((el, i) => {
//     return (
//       <p key={i} onClick={() => setEditNum(i)}>
//         {el}
//       </p>
//     );
//   });

//   let input;

//   if (editNum === null) {
//     input = (
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={(e) => setNotes([...notes, value])}
//       />
//     );
//   } else {
//     input = (
//       <input
//         value={notes[editNum]}
//         onChange={(e) =>
//           setNotes([
//             ...notes.slice(0, editNum),
//             e.target.value,
//             ...notes.slice(editNum + 1),
//           ])
//         }
//         onBlur={() => setEditNum(null)}
//       />
//     );
//   }

//   return (
//     <div>
//       {result} {input}
//     </div>
//   );
// }
// export default App;

// Второй подход

// function App() {
//   const [notes, setNotes] = useState([12222, 23333, 3444, 455, 566, 677, 7888]);
//   const [editNum, setEditNum] = useState(null);
//   const [value, setValue] = useState("");

//   const result = notes.map((el, i) => {
//     return (
//       <p
//         key={i}
//         onClick={(e) => {
//           setEditNum(i);
//           setValue(notes[i]);
//         }}
//       >
//         {el}
//       </p>
//     );
//   });

//   function editInput(e) {
//     setValue(e.target.value);
//     if (editNum !== null) {
//       setNotes([
//         ...notes.slice(0, editNum),
//         e.target.value,
//         ...notes.slice(editNum + 1),
//       ]);
//     }
//   }

//   function quitEditing(e) {
//     if (editNum === null) {
//       setNotes([...notes, value]);
//     } else {
//       setEditNum(null);
//     }
//     setValue("");
//   }

//   return (
//     <div>
//       {result}
//       <input value={value} onChange={editInput} onBlur={quitEditing} />
//     </div>
//   );
// }
// export default App;

// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 31//////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [obj, setObj] = useState({
//     prop1: "value1",
//     prop2: "value2",
//     prop3: "value3",
//   });

//   let res = [];
//   for (let key in obj) {
//     res.push(
//       <li id={key}>
//         {obj[key]}
//         <input onChange={change} />
//       </li>
//     );
//   }

//   function change(e) {
//     let el = e.target.closest("li").id;
//     let value = e.target.value;

//     let copy = Object.assign({}, obj);

//     copy[el] = value;
//     setObj(copy);
//   }

//   return <ul>{res}</ul>;
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 32//////////////////////////////////////////////////////////////////////////////////////

// const initObj = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: "value3",
// };

// function App() {
//   const [obj, setObj] = useState(initObj);

//   function handleChange(prop, event) {
//     setObj({ ...obj, ...{ [prop]: event.target.value } });
//   }

//   return (
//     <div>
//       <input
//         value={obj.prop1}
//         onChange={(event) => handleChange("prop1", event)}
//       />
//       <input
//         value={obj.prop2}
//         onChange={(event) => handleChange("prop2", event)}
//       />
//       <input
//         value={obj.prop3}
//         onChange={(event) => handleChange("prop3", event)}
//       />
//       <br />
//       {obj.prop1}-{obj.prop2}-{obj.prop3}
//     </div>
//   );
// }
// export default App;

// const initDate = {
//   year: 2025,
//   month: 12,
//   day: 31,
// };

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "san"];

// function App() {
//   const [date, setDate] = useState(initDate);

//   function getRightFormat(obj) {
//     return new Date(obj.year - obj.month - obj.day);
//   }

//   function getWeekDay(curDate, arr) {
//     return arr[curDate.getDay()];
//   }

//   function changeHandler(prop, event) {
//     setDate({ ...date, ...{ [prop]: event.target.value } });
//   }

//   return (
//     <div>
//       <p>
//         <span>Year: {date.year}</span>
//         <input onChange={(event) => changeHandler("year", event)} />
//       </p>
//       <p>
//         <span>Month: {date.month}</span>
//         <input onChange={(event) => changeHandler("month", event)} />
//       </p>
//       <p>
//         <span>Day: {date.day}</span>
//         <input onChange={(event) => changeHandler("day", event)} />
//       </p>
//       <p>Day in a Week: {getWeekDay(getRightFormat(date), weekDays)}</p>
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 33//////////////////////////////////////////////////////////////////////////////////////
// const initNotes = [
//   {
//     id: "GYi9G_uC4gBF1e2SixDvu",
//     prop1: "value11",
//     prop2: "value12",
//     prop3: "value13",
//   },
//   {
//     id: "IWSpfBPSV3SXgRF87uO74",
//     prop1: "value21",
//     prop2: "value22",
//     prop3: "value23",
//   },
//   {
//     id: "JAmjRlfQT8rLTm5tG2m1L",
//     prop1: "value31",
//     prop2: "value32",
//     prop3: "value33",
//   },
// ];

//const idForDelete = "GYi9G_uC4gBF1e2SixDvu";

// function App() {
//   const [notes, setNotes] = useState(initNotes);

//   const result = notes.map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//       </p>
//     );
//   });

//   function deleteNote(e) {
//     setNotes(notes.filter((note) => note.id !== idForDelete));
//   }

//   return (
//     <div>
//       <p>{idForDelete}</p>
//       {result}
//       <button onClick={deleteNote}>delete</button>
//       {result}
//     </div>
//   );
// }
// export default App;

// const id = "JAmjRlfQT8rLTm5tG2m1L";
// const prop1 = "prop2";
// const prop2 = "prop3";
// function App() {
//   const [notes, setNotes] = useState(initNotes);

//   const result = notes.map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//       </p>
//     );
//   });

//   const copy = JSON.parse(JSON.stringify(notes)).map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//       </p>
//     );
//   });

//   function changeHandler(arr) {
//     setNotes(
//       arr.map((el) => {
//         if (el.id === id) {
//           return {
//             ...el,
//             [prop1]: el[prop1] + "!",
//             [prop2]: el[prop2] + "!!!",
//           };
//         } else {
//           return el;
//         }
//       })
//     );
//   }

//   return (
//     <div>
//       {result}
//       <button onClick={() => changeHandler(notes)}>изменить</button>
//       {copy}
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 34//////////////////////////////////////////////////////////////////////////////////////
// const initNotes = [
//   {
//     id: "GYi9G_uC4gBF1e2SixDvu",
//     prop1: "value11",
//     prop2: "value12",
//     prop3: "value13",
//   },
//   {
//     id: "IWSpfBPSV3SXgRF87uO74",
//     prop1: "value21",
//     prop2: "value22",
//     prop3: "value23",
//   },
//   {
//     id: "JAmjRlfQT8rLTm5tG2m1L",
//     prop1: "value31",
//     prop2: "value32",
//     prop3: "value33",
//   },
// ];

// const initProds = [
//   { id: "JAmjRlfQT8rLTm5tG2u9l", name: "prod1", catg: "catg1", cost: 100 },
//   { id: "JAmjRlfQT8rLTm5tG2qu6", name: "prod2", catg: "catg2", cost: 200 },
//   { id: "JAmjRlfQT8rLTm5tG2pp2", name: "prod3", catg: "catg3", cost: 300 },
// ];

// function App() {
//   const [value, setValue] = useState(initProds);

//   const content = value.map((el) => {
//     return (
//       <tr key={el.id}>
//         <td>{el.name}</td>
//         <td>{el.catg}</td>
//         <td>{el.cost}</td>
//       </tr>
//     );
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <td>id</td>
//           <td>name</td>
//           <td>cost</td>
//         </tr>
//       </thead>
//       <tbody>{content}</tbody>
//     </table>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 35//////////////////////////////////////////////////////////////////////////////////////
// function id() {
//   return new Date() * Math.floor(Math.random() * 10);
// }
// function initObj() {
//   return {
//     id: id(),
//     prop1: "",
//     prop2: "",
//     prop3: "",
//   };
// }

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [obj, setObj] = useState(initObj());

//   const result = notes.map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//       </p>
//     );
//   });

//   function changeObj(prop, event) {
//     setObj({ ...obj, [prop]: event.target.value });
//   }

//   function updateNotes() {
//     setNotes([...notes, obj]);
//     setObj(initObj());
//   }

//   return (
//     <div>
//       {result}
//       <input
//         value={obj.prop1}
//         onChange={(event) => changeObj("prop1", event)}
//       />
//       <input
//         value={obj.prop2}
//         onChange={(event) => changeObj("prop2", event)}
//       />
//       <input
//         value={obj.prop3}
//         onChange={(event) => changeObj("prop3", event)}
//       />
//       <button onClick={updateNotes}>save changes</button>
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 36//////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [editId, setEditId] = useState(null);

//   const result = notes.map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>

//         <button onClick={() => setEditId(note.id)}>edit</button>
//       </p>
//     );
//   });

//   function getValue(prop) {
//     return notes.reduce(
//       (res, note) => (note.id === editId ? note[prop] : res),
//       ""
//     );
//   }

//   function changeItem(prop, e) {
//     setNotes(
//       notes.map((note) =>
//         note.id === editId ? { ...note, [prop]: e.target.value } : note
//       )
//     );
//   }

//   return (
//     <div>
//       {result}
//       <input
//         value={getValue("prop1")}
//         onChange={(e) => changeItem("prop1", e)}
//       />
//       <input
//         value={getValue("prop2")}
//         onChange={(e) => changeItem("prop2", e)}
//       />
//       <input
//         value={getValue("prop3")}
//         onChange={(e) => changeItem("prop3", e)}
//       />
//       <button onClick={() => setEditId(null)}>clear</button>
//     </div>
//   );
// }
// export default App;

// const initProds = [
//   { id: "JAmjRlfQT8rLTm5tG2u9l", name: "prod1", catg: "catg1", cost: 100 },
//   { id: "JAmjRlfQT8rLTm5tG2qu6", name: "prod2", catg: "catg2", cost: 200 },
//   { id: "JAmjRlfQT8rLTm5tG2pp2", name: "prod3", catg: "catg3", cost: 300 },
// ];

// function App() {
//   const [prods, setProds] = useState(initProds);
//   const [editId, setEditId] = useState(null);

//   const result = prods.map((prod) => {
//     return (
//       <tr key={prod.id}>
//         <td>{prod.name}</td>
//         <td>{prod.catg}</td>
//         <td>{prod.cost}</td>
//         <td>
//           <button onClick={() => setEditId(prod.id)}>edit</button>
//         </td>
//       </tr>
//     );
//   });

//   function getValue(key) {
//     return prods.reduce(
//       (res, prod) => (prod.id === editId ? prod[key] : res),
//       ""
//     );
//   }

//   function changeProd(key, e) {
//     setProds(
//       prods.map((prod) =>
//         prod.id === editId ? { ...prod, [key]: e.target.value } : prod
//       )
//     );
//   }

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <td>name</td>
//             <td>catg</td>
//             <td>cost</td>
//             <td>edit</td>
//           </tr>
//         </thead>
//         <tbody>{result}</tbody>
//       </table>
//       <input value={getValue("name")} onChange={(e) => changeProd("name", e)} />
//       <input value={getValue("catg")} onChange={(e) => changeProd("catg", e)} />
//       <input value={getValue("cost")} onChange={(e) => changeProd("cost", e)} />
//       <button onClick={() => setEditId(null)}>clear</button>
//     </>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 37//////////////////////////////////////////////////////////////////////////////////////
// function id() {
//   return new Date() * Math.floor(Math.random() * 10);
// }
// function initObj() {
//   return {
//     id: id(),
//     prop1: "",
//     prop2: "",
//     prop3: "",
//   };
// }

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [obj, setObj] = useState(initObj());
//   const [editId, setEditId] = useState(null);

//   const result = notes.map((note) => {
//     return (
//       <p key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>

//         <button onClick={() => setEditId(note.id)}>edit</button>
//       </p>
//     );
//   });

//   function getValue(prop) {
//     if (editId) {
//       return notes.reduce(
//         (res, note) => (note.id === editId ? note[prop] : res),
//         ""
//       );
//     } else {
//       return obj[prop];
//     }
//   }
//   function changeHandler(prop, event) {
//     if (editId) {
//       setNotes(
//         notes.map((note) =>
//           note.id === editId ? { ...note, [prop]: event.target.value } : note
//         )
//       );
//     } else {
//       setObj({ ...obj, [prop]: event.target.value });
//     }
//   }

//   function saveChanges() {
//     if (editId) {
//       setEditId(null);
//     } else {
//       setNotes([...notes, obj]);
//       setObj(initObj());
//     }
//   }

//   return (
//     <>
//       {result}
//       <input
//         value={getValue("prop1")}
//         onChange={(e) => changeHandler("prop1", e)}
//       />
//       <input
//         value={getValue("prop2")}
//         onChange={(e) => changeHandler("prop2", e)}
//       />
//       <input
//         value={getValue("prop3")}
//         onChange={(e) => changeHandler("prop3", e)}
//       />
//       <button onClick={saveChanges}>save changes</button>
//     </>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 38//////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [visible, setVisible] = useState(false);
//   let text;

//   if (visible) {
//     text = <p>heeey</p>;
//   }

//   return (
//     <div>
//       {text}
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? "hide" : "show"}
//       </button>
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 39//////////////////////////////////////////////////////////////////////////////////////

// const initProds = [
//   {
//     id: id(),
//     name: "prod1",
//     cost: "cost1",
//     desc: "long description 1",
//     comm: "my super comment 1",
//     showDesc: false,
//     showComm: false,
//   },
//   {
//     id: id(),
//     name: "prod2",
//     desc: "long description 2",
//     comm: "my super comment 2",
//     showDesc: false,
//     showComm: false,
//   },
//   {
//     id: id(),
//     name: "prod3",
//     desc: "long description 3",
//     comm: "my super comment 3",
//     showDesc: false,
//     showComm: false,
//   },
// ];

// function App() {
//   const [prods, setProds] = useState(initProds);

//   function showMore(id, subject) {
//     setProds(
//       prods.map((prod) => {
//         if (prod.id === id) {
//           return { ...prod, showDesc: !prod[subject] };
//         } else {
//           return prod;
//         }
//       })
//     );
//   }

//   const result = prods.map((prod) => {
//     let description, comment;

//     if (prod.showDesc) {
//       description = <i>{prod.desc}</i>;
//     }

//     if (prod.showComm) {
//       comment = <i>{prod.comm}</i>;
//     }

//     return (
//       <li key={prod.id}>
//         {prod.name}
//         <button onClick={() => showMore(prod.id, "showDesc")}>
//           show description
//         </button>
//         {description}
//         <button onClick={() => showMore(prod.id, "showComm")}>
//           show comment
//         </button>
//         {comment}
//       </li>
//     );
//   });

//   return <ul>{result}</ul>;
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 40//////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [value, setValue] = useState("some text you can edit");
//   const [isEdit, setIsEdit] = useState(false);

//   let text;

//   if (!isEdit) {
//     text = <span onClick={() => setIsEdit(true)}>{value}</span>;
//   } else {
//     text = (
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={() => setIsEdit(false)}
//       />
//     );
//   }

//   return <p>{text}</p>;
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 41//////////////////////////////////////////////////////////////////////////////////////
// const initNotes = [
//   { text: "note1", isEdit: false },
//   { text: "note2", isEdit: false },
//   { text: "note3", isEdit: false },
// ];
// function App() {
//   const [notes, setNotes] = useState(initNotes);

//   function startEdit(index) {
//     const copy = Object.assign([], notes);
//     copy[index].isEdit = true;
//     setNotes(copy);
//   }

//   function endEdit(index) {
//     const copy = Object.assign([], notes);
//     copy[index].isEdit = false;
//     setNotes(copy);
//   }

//   function changeText(index, event) {
//     const copy = Object.assign([], notes);
//     copy[index].text = event.target.value;
//     setNotes(copy);
//   }

//   const result = notes.map((note, index) => {
//     let elem;

//     if (!note.isEdit) {
//       elem = <span onClick={() => startEdit(index)}>{note.text}</span>;
//     } else {
//       elem = (
//         <input
//           value={note.text}
//           onChange={(event) => changeText(index, event)}
//           onBlur={() => endEdit(index)}
//         />
//       );
//     }

//     return <li key={index}>{elem}</li>;
//   });

//   return <ul>{result}</ul>;
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// 42//////////////////////////////////////////////////////////////////////////////////////
function App() {}
export default App;
