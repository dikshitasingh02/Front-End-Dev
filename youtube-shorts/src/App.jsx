import React from 'react'
import "./App.css"
import VideoPlayer from './components/VideoPlayer'
import { shortsData } from './utils/data'

const App = () => {
  return (
    <div className='App'>
      <div className='app__video'>
        {/* render the shorts videos */}
        {shortsData.map((vid) => (
          <VideoPlayer key={vid.id} src={vid.videoUrl} id={vid.id} />
        ))}
        <VideoPlayer />
        </div>
    </div>
  )
}

export default App