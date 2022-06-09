import React from 'react'
import './Header.css'
import HeaderTransactionState from './HeaderTransactionState';

const HeaderDate = () => {
    const date = new Date();
    const month = date.getMonth()
    const months=['January','February','March','April','May', 'June', 'July','August','September','October', 'November', 'December']


  return (
    <>
         <p className="headerDate">Availible Bugdet in {months[month]} {date.getFullYear()}: </p>
    </>
  )
}

export default HeaderDate