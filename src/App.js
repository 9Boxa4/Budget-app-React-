import './App.css';
import { useState,useEffect, useContext } from 'react';
import Form from './components/Form/Form';
import Header from './components/header/Header';
import TransitionContainer from './components/TransactionDisplay/TransactionContainer';
import { IncomeProvider } from './components/TransactionDisplay/TransactionContext/IncomeContext';
import {  FullIncomeProvider } from './components/header/HeaderContexts/FullIncomeValueContext';
import { ExpenseProvider } from './components/TransactionDisplay/TransactionContext/ExpenseContext';
import { FullExpenseProvider } from './components/header/HeaderContexts/FullExpenseValueContext';


function App() {
  const [newInputArr, setNewInputArr] = useState([])
    const getInputsToDisplay = (...inputs) =>
    {
      setNewInputArr({choice:inputs[0],description:inputs[1],numberValue:inputs[2],newId:inputs[3]})
    }

  return (

    <IncomeProvider>
      <FullIncomeProvider>
        <ExpenseProvider>
          <FullExpenseProvider>
    <div className='App'>
       <Header  
       />
        <Form
        getInputsToDisplay={getInputsToDisplay}
        />
        <TransitionContainer 
         newInputArr={newInputArr}
        />
    </div>
    </FullExpenseProvider>
    </ExpenseProvider>
    </FullIncomeProvider>
    </IncomeProvider>
  );
}

export default App;