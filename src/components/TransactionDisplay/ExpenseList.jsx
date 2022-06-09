import React,{useState} from 'react'
//900 1000 250 4500
const ExpenseList = (props) => {
  const [expenses,setExpense] = useState({
    expenseValues:[900,1000,250,4500],
  expenseDescriptions:['Rent','Holiday',`Gas & Electricity` ,'Loan']});
  
  //setting values to have (.) before last two digits and on every third number (,)
    const settingValues = (someValue) =>
  {
    return someValue.toLocaleString(undefined,{ minimumFractionDigits:2});
  }
 
  props.fullExpense(expenses.expenseValues);
  let income = props.income;

  return (
    <div className='expense-list-container'>
    <h2 className='expense-list-header'>EXPENSES</h2>
    <div className='expense-list'>
 
        <div className='expense-list-block'>
        {expenses.expenseDescriptions[0]}
        <p className='expense-wrapper'>
          <span className='expenses-span'> -{settingValues(expenses.expenseValues[0])} </span>
           <span className='expense-span-procent'>    {Math.round(expenses.expenseValues[0]/income*100)}%</span>
           </p>
        </div>
   

        <div className='expense-list-block'>
        {expenses.expenseDescriptions[1]}
        <p>
          <span className='expenses-span'> -{settingValues(expenses.expenseValues[1])}</span> <span className='expense-span-procent'>{Math.round(expenses.expenseValues[1]/income*100)}%</span>
          </p>
          </div>

          <div className='expense-list-block'>
          {expenses.expenseDescriptions[2]}
      <p>
          <span className='expenses-span'> -{settingValues(expenses.expenseValues[2])}</span> <span className='expense-span-procent'>{Math.round(expenses.expenseValues[2]/income*100)}%</span>
      </p>
      </div>

      <div className='expense-list-block'>
      {expenses. expenseDescriptions[3]}
      <p>
          <span className='expenses-span'> -{settingValues(expenses.expenseValues[3])}</span> <span className='expense-span-procent'>{Math.round(expenses.expenseValues[3]/income*100)}%</span>
      </p>
</div>

     {props.addDomEl  && Number.isFinite(+props.addDomEl.numberValue) ? 
     
     <div className='expense-list-block'>
       {props.addDomEl.description}
     <p> 
           <span className='expenses-span'> -{settingValues(+props.addDomEl.numberValue)}</span> <span className='expense-span-procent'>{Math.round(+props.addDomEl.numberValue/income*100)}%</span>
      </p>
      </div>
:
      null }
    </div>
</div>
  )
}

export default ExpenseList