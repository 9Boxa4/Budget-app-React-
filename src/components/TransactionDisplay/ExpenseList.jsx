import React,{useEffect,useContext} from 'react'
import { ExpenseContext } from './TransactionContext/ExpenseContext';
import { FullIncomeContext } from '../header/HeaderContexts/FullIncomeValueContext'

const ExpenseList = (props) => {
  const {expenses,setExpense} = useContext(ExpenseContext)
  const {fullIncomeValue}=useContext(FullIncomeContext)
 
  useEffect(()=>
{
    if(typeof props.addDomEl !==  'string'  && props.addDomEl.length !== 0)
    {
      setExpense(state=>[...state,{expenseValue:+props.addDomEl.numberValue,expenseDescription:props.addDomEl.description,id:props.addDomEl.newId}])
    }
    
},[props.addDomEl])

//setting values to have (.) before last two digits and on every third number (,)
    const settingValues = (someValue) =>
  {
    return someValue.toLocaleString(undefined,{ minimumFractionDigits:2});
  }
  
  let expenseItems = expenses.map((expense)=>   <div 
  className='expense-list-block' 
  key={expense.id}
  id={expense.id}
  onMouseEnter={hoverDelete} 
  onMouseLeave={handleMouseLeave}
  >
  {expense.expenseDescription}
  {/* <p> */}
    <span className='expenses-span'> -{settingValues(expense.expenseValue)}</span> 
    <span className='expense-span-procent'>{fullIncomeValue===0? "": Math.round(expense.expenseValue/fullIncomeValue*100)}{fullIncomeValue === 0? "":"%"}</span>
  <span className='hidden' data-tool-tip='Click here or "X" if you want to remove the element'>X</span>
    {/* </p> */}
    </div>)

function hoverDelete(e)
{    
       e.target.lastChild.classList.remove('hidden')
       e.target.lastChild.classList.add('delete-container')

       e.target.lastChild.addEventListener('click',event=>
       {
         setExpense(state=> state.filter(el=> el.id !==e.target.id))
       })
}


function handleMouseLeave(e)
{
    e.target.lastChild.classList.remove(`delete-container`)
    e.target.lastChild.classList.add(`hidden`)
}

  
  return (
    <div className='expense-list-container'>
    <h2 className='expense-list-header'>EXPENSES</h2>
    <div className='expense-list'>
      {expenseItems.length? expenseItems : 'No expenses to show right now'}       
    </div>
</div>
  )
}

export default ExpenseList
