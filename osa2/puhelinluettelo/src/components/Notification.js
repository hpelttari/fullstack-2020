import React from 'react'

const Notification = ({ message}) => {
    const successStyle = {
        color: 'green',
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
    <div style={successStyle}>
      {message}
    </div>
  )
}

export default Notification
