import React from 'react'


const ErrorNotification = ({ message}) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBttom: 10,
        fontSize: 20
    }

  if (message === null) {
    return null
  }

  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}

export default ErrorNotification
