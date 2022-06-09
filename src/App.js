import './App.css';
import { useState,useEffect } from 'react';
import Form from './components/Form/Form';
import Header from './components/header/Header';
import TransitionContainer from './components/TransactionDisplay/TransactionContainer';

function App() {
  const [fullIncomeValue,setFullIncome] = useState('');
  const [fullExpenseValue, setFullExpense] = useState('');
  const [newInputArr, setNewInputArr] = useState({})
  
let numIncome;
let numExpense;

  const calcFullIncome = (incomes) =>{
    numIncome =  incomes.reduce((prevValue,currentValue)=>prevValue+currentValue,0)
    return numIncome;
  } 

  const calcFullExpense = (expenses) =>{
    numExpense =  expenses.reduce((prevValue,currentValue)=>prevValue+currentValue,0)
    return numExpense;
  } 

  //works only when I change the values in the income/expenses (first time on load) / reloads page
  useEffect(()=>
  {
  setFullIncome(numIncome)
  },[])

  useEffect(()=>
  {
  setFullExpense(numExpense)
  },[])

  const getInputsToDisplay = (inputs) =>
  {
    setNewInputArr({choice:inputs[0],description:inputs[1],numberValue:inputs[2]})
      if(newInputArr.length === 0)return;
  }

  return (
    <div className='App'>
     
       <Header  
       headerExpense={fullExpenseValue} 
       headerIncome={fullIncomeValue}/>
        <Form
        getInputsToDisplay={getInputsToDisplay}
        />
        <TransitionContainer 
        calcFullExpense={calcFullExpense} 
        calcFullIncome={calcFullIncome} 
        fullIncome = {fullIncomeValue}
        newInputArr={newInputArr}
        />
        
    </div>
  );
}

export default App;