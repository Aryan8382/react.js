import React from 'react'

const Inputtracker = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Live Input: {text}</p>
    </div>
  )
}

export default Inputtracker
