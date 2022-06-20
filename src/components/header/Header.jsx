import React from 'react'
import HeaderDate from './HeaderDate'
import HeaderTransactionState from './HeaderTransactionState'

const Header = () => {

  return (
    <div className="header-container">
        <HeaderDate/>
        <HeaderTransactionState 
        />
    </div>
  )
}

export default Header