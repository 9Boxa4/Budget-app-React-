import React,{useEffect,useContext} from 'react'
import { IncomeContext } from './TransactionContext/IncomeContext';

const IncomeList = (props) => {
  const {incomes,setIncomes} = useContext(IncomeContext)

useEffect(()=>
{
  if(typeof props.addDomEl !==  'string' )
  setIncomes(state=>[...state,{incomeValue:+props.addDomEl.numberValue,incomeDescription:props.addDomEl.description, id:props.addDomEl.newId}])

},[props.addDomEl])


//setting values to have (.) before last two digits and on every third number (,)
const settingValues = (someValue) =>
{
  return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
}


let incomeItems = incomes.map((income)=>  <p 
className='income-list-block'
 key={income.id} 
 id={income.id}
 onMouseEnter={hoverDelete}
 onMouseLeave={handleMouseLeave}
 >
{income.incomeDescription} 
<span className='Income-span'> +{settingValues(income.incomeValue)}</span> 
<span className='hidden' data-tool-tip='Click here or "X" if you want to remove the element'>X</span>
  </p>
  )
  
   function hoverDelete(e)
   {     
          e.target.lastChild.classList.remove('hidden')
          e.target.lastChild.classList.add('delete-container')

          e.target.lastChild.addEventListener('click',()=>
          {
            setIncomes(state=> state.filter(el=> el.id !==e.target.id))
          })
   }
   
function handleMouseLeave(e)
{
    e.target.lastChild.classList.remove(`delete-container`)
    e.target.lastChild.classList.add(`hidden`)
}


  return (
    <div className='income-list-container'>
          <h2 className='income-list-header'>INCOME</h2>
          <div className='income-list' 
          >
          {incomes.length?incomeItems:'No incomes to show at this time'}
          
          </div>
      </div>

  )
}



export default IncomeList
