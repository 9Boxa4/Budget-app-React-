import React,{useContext, useState} from 'react'


const IncomeList = (props) => {
const [incomes,setIncomes] = useState(
  {incomeValues:[3000,1500,5000],
  incomeDescription:['Salary','Project','Sold car']});



// summing up full income to put in the header
props.fullIncome(incomes.incomeValues)

//setting values to have (.) before last two digits and on every third number (,)
const settingValues = (someValue) =>
{
  return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
}


  return (
    <div className='income-list-container'>
          <h2 className='income-list-header'>INCOME</h2>
          <div className='income-list'>
            <p>{incomes.incomeDescription[0]} <span className='Income-span'>+{settingValues(incomes.incomeValues[0])}</span></p>
            <p>{incomes.incomeDescription[1]} <span className='Income-span'>+{settingValues(incomes.incomeValues[1])}</span></p>
            <p>{incomes.incomeDescription[2]} <span className='Income-span'>+{settingValues(incomes.incomeValues[2])}</span></p>

            {props.addDomEl &&  <p>{props.addDomEl.description} <span className='Income-span'>+{settingValues(+props.addDomEl.numberValue)}</span></p>}
          </div>
      </div>

  )
}

export default IncomeList