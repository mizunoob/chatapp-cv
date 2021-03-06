import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'
import Message from './Message'

const Room = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  const user = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    firebase.firestore().collection('messages').onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => {
        return doc.data()
      })
      setMessages(messages)
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    firebase.firestore().collection('messages').add({
      body: value,
      user: user.displayName
    })
  }

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => {
          return (
            <Message user={message.user} body={message.body}/>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setValue(e.target.value)}></input>
        <button type="submit">送信</button>
      </form>
      <button onClick={() => {firebase.auth().signOut()}}>LogOut</button>
    </>
  )
}

export default Room
