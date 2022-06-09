import React from 'react'

const HeaderTransactionState = (props) => {
  const Income = props.headerIncome 
  const Expense = props.headerExpense

  //setting value commas on three numbers, and ending with two zeros
  const settingValues = (someValue) =>
{
  return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
}

props.getFullBudget(Income);


  return (
    <> 
    <p className='currentBudget'>{Income>Expense? '+' : ''}{settingValues(Income-Expense)}</p>
        <div className='transaction-state-container'>
             <div className='income-state'>
                 <p>Income</p>
                 <p>+{settingValues(props.headerIncome)}</p>
             </div>
             <div className='expense-state'>
                 <p>Expenses</p>
                     <p className='expense-state-assessment'> -{settingValues(props.headerExpense)}
                       <span className='procent-final'>{Math.round(Expense/Income*100).toFixed(0)}%</span>
                      </p>
             </div>
         </div>
    </>
  )
}

export default HeaderTransactionState