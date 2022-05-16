import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

function WebSock () {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
   socket.current = new WebSocket('ws://localhost:6000')

   socket.current.onopne = () => {
    setConnected(true);
   }
   socket.current.onmessage = () => {
       
   }
   socket.current.onclose = () => {
      console.log('Socket закрыт')
   }
   socket.current.onerror = () => {
      console.log('Socket произошла ошибка')
   }
  }, [])

  const sendMessage = async () => {
    await axios.post('http://localhost:4000/new-messages', {
      message: value,
      id: Date.now()
    })
  }

  if(!connected) {
    return (
      <div className='center'>
        <div className='form'>
          <input 
            value={userName} 
            onChange={e => setUserName(e.target.value)} 
            type="text" 
            placeholder='Введите имя пользователя' />
          <button>Войти</button>
        </div>
      </div>
    )
  }

  return (
    <div className='center'>
      <div>
        <div className='form'>
          <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
          <button onClick={sendMessage}>Отправить</button>
        </div>
        <div className='messages'>
          {messages.map(mess =>
            <div className='message' key={mess.id}>
              {mess.message}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default WebSock;
