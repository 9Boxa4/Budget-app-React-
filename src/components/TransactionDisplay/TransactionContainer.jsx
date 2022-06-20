import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import './Transaction.css'

const TransitionContainer = (props) => {

  //checking to see if the new input is going in the income or expense
const sign =props.newInputArr.choice === '+'?  '+' : '-';


  return (
    <div className='transaction-list-container'>
      <IncomeList 
      addDomEl={sign==='+'? props.newInputArr : ""}  
      getInputsToDisplay={props.getInputsToDisplay}
      />
      <ExpenseList  
      addDomEl={sign==='-'? props.newInputArr : ""} 
      />
    </div>
  )
}

export default TransitionContainer
