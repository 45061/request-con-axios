import axios from 'axios';
import './App.css';

function App() {
  
  axios.get("https://jsonplaceholder.typicode.com/todos/").then((response)=>{
    console.log(response.data);
  })
    .catch((error)=>{
      console.log(error);
    })

  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
    console.log(response.data);
  })
    .catch((error)=>{
      console.log(error);
    })
    

    // axios.post("https://jsonplaceholder.typicode.com/todos/",
    // {
    //   "userId": 1,
    //   "title": "este es el del post",
    //   "completed": true
    // },
    //   {
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }
    // )
    // .then((response)=>{
    //   console.log('response', response.data);
    // })

    axios.put("https://jsonplaceholder.typicode.com/todos/1",
    {
      "userId": 1,
      "title": "hola, este es el que se modifica",
      "completed": true
    }
    )
    .then((response)=>{
      console.log('response', response.data);
    }
    )

    axios.delete("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
      console.log(res);
      console.log(res.data);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    })

  return(
    <div>
      <h1>hola</h1>
    </div>
  );
}

export default App;
