import React,{useState} from 'react'
import './Form.css'

const Form = (props) => {
  const [choice,setChoice] = useState('-');
  const [description,setDescription] = useState('')
  const [valueInput,setValueInput] = useState('');

  //function for checking if there is only spaces
  const isEmpty = (spaces) => {
   return spaces.trim().length === 0 
  }

 //Handeling submiting form
 const handleSubmit = (e) =>
{
  e.preventDefault();
 
  //Checking description validity
  if(description.length >=50 ||
    description.length === 0 ||
    isEmpty(description) ||

    //checking value validity
    !Number.isFinite(+valueInput) ||
    +valueInput<0 ||
      +valueInput.length ===0 ) 
    {
      alert ('The input you have entered either is not valid, or you need to retype and wait a few seconds')
    }
      else
    {
      // const allInputs= [choice,description,valueInput]
      props.getInputsToDisplay([choice,description,valueInput]);
    }
  }

 //clearing input fields
 const clearInputFields = () =>
 {
  document.getElementById('formId').reset();
   setTimeout(()=>
   {
    setDescription('');
    setValueInput('')
    setChoice('-');
   },500)
 }


  return (
    <form id='formId' onSubmit={handleSubmit} className='input-form'>
      <select 
      value={choice}
      onChange={(e=>setChoice(e.target.value))}
      >
        <option value={"-"}>-</option>
        <option   value={"+"}>+</option>
      </select>
      
      <input id='inputDescriptionId' onChange={(e=> setDescription(e.target.value))} type="text" placeholder='Add description' />

      <input id="inputValueId" onChange={(e=> setValueInput(e.target.value))} type="number" placeholder="Value" />

     <input type="submit" onClick={clearInputFields} value={choice === '+'? '✅' : '🟥'}  />
  </form>
  )
}


export default Form