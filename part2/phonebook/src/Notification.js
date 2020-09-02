import React from 'react'; 

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    
    return (
        <>
        {
          message.msg !== '' ?
          <div className={message.error ? 'error' : 'success'}>
            {message.msg}
          </div>
          : null
        }
        </>
    )
  }

export default Notification; 