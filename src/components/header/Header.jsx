import React, {useState,useEffect} from 'react'
import HeaderDate from './HeaderDate'
import HeaderTransactionState from './HeaderTransactionState'

const Header = (props) => {
  const [fullBudget, setFullBudget] = useState('')

  let budget;
  const getFullBudget = (bugetValue) =>
  {
    return budget = bugetValue;
  }

  return (
    <div className="header-container">
        <HeaderDate/>
        <HeaderTransactionState getFullBudget={getFullBudget} headerExpense={props.headerExpense} headerIncome={props.headerIncome}/>
    </div>
  )
}

export default Header