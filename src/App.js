import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses"


const initialExpenses = [
  {
  id:"e1",
  title:"Iphone 4 pro max", 
  amount: 1000, 
  date: new Date(2021,8,12)
  },
  {
  id:"e2", 
  title:"Arreglo de choque", 
  amount: 100, 
  date: new Date(2021,2,21)
  },

  {
  id:"e3",
  title:"Messi", 
  amount: 50, 
  date: new Date(2021,5,10)
  },
  {
  id:"e4",
  title:"james", 
  amount: 399.99, 
  date: new Date(2021,3,17)
  }
];

const App = ()=> {

  const [expenses, setExpenses] = useState(initialExpenses);
  

  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
