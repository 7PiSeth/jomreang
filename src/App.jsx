import React from 'react'
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
import music_profile from "./assets/music_profile.png"
import charlie_puth from "./assets/cp.jpg"
import { FaPlay } from "react-icons/fa"

const songInfoArr = [
  {
    id: 1,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  },
  {
    id: 1,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  }, {
    id: 1,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  },
  {
    id: 1,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  },
]

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-sm  min-h-screen px-3 mx-auto flex items-center flex-col py-[60px]'>
        <div className='text-center mt-2'>
          <h1 className='text-4xl tracking-widest leading-loose'>ចម្រៀង</h1>
          <p className='text-2xl text-gray-500'> ចម្រៀងគឺជាភាសាសកលរបស់មនុស្សជាតិ</p>
        </div>
        <img src={music_profile} alt="cover.png"
          className='w-[70%]' />
        <div className='sm:w-[70%] w-full'>
          <h2 className='text-xl tracking-wide mt-5 mb-3'>បញ្ជីចម្រៀង</h2>
          {
            songInfoArr.map(({ id, title, duration, singer, imgsrc }) => (
              <div id={id} className='flex py-2 items-center'>
                <img className='mask mask-hexagon-2 w-[20%]' alt='song_profile.png' src={imgsrc} />
                <div className='text-left w-[60%]'>
                  <h3>{title}</h3>
                  <p className='text-gray-400 text-sm'>{singer}</p>
                </div>
                <p className='w-[10%]'>{duration}</p>
                <FaPlay size={25} className='w-[10%]' />
              </div>
            ))
          }
        </div>
      </div>
      <Footer className='sm:absolute bottom-0' />
    </div>
  )
}

export default App