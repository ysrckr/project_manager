import PropTypes from 'prop-types'
import React from 'react'
const Container = ({children}) => {
  return (
    <main className='container'>
        {children}
    </main>
  )
}
Container.propTypes = {}
export default Container