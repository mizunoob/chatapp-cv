import React from 'react'

const Message = ({user, body }) => {
  return (
    <li>{user}: {body}</li>
  )
}

export default Message
