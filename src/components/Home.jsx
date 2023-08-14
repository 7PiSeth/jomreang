import React, { useState } from 'react'
import music_profile from "./../assets/music_profile.png"
import charlie_puth from "./../assets/cp.jpg"
import { FaPause, FaPlay } from "react-icons/fa"

const songInfoArr = [
  {
    id: 1,
    title: "We don't talk anymore",
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth,
    mp3src: ''
  },
  {
    id: 2,
    title: "Say you won't let Go",
    duration: '4:23',
    singer: 'James Arthur',
    imgsrc: charlie_puth
  }, {
    id: 3,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  },
  {
    id: 4,
    title: 'We do not talk anymore',
    duration: '3:23',
    singer: 'Charlie Puth',
    imgsrc: charlie_puth
  },
]

export const Home = () => {
  const [play, setPlay] = useState(false)
  return (
    <div>
      <div className='text-center mt-2'>
        <h1 className='text-4xl leading-loose'>ចម្រៀង</h1>
        <p className='text-2xl text-gray-500 mb-5'> ចម្រៀងគឺជាភាសាសកលរបស់មនុស្សជាតិ</p>
      </div>
      <img src={music_profile} alt="cover.png"
        className='w-[70%] elise-light dark:shadow-none rounded-xl mx-auto dark:bg-[#161B22] p-3' />
      <div className='sm:w-[70%] w-full mx-auto'>
        <h2 className='text-xl tracking-wide mt-5 mb-3'>បញ្ជីចម្រៀង</h2>
        {
          songInfoArr.map(({ id, title, duration, singer, imgsrc }) => (
            <div id={id} className='flex my-2 py-2 items-center elise-light dark:shadow-none dark:bg-[#161B22]
            rounded-xl hover:scale-105 duration-300'>
              <img className='mask mask-hexagon-2 w-[20%] ' alt='song_profile.png' src={imgsrc} />
              <div className='text-left w-[60%]'>
                <h3 className='capitalize'>{title}</h3>
                <p className='text-gray-400 text-sm uppercase'>{singer}</p>
              </div>
              <p className='w-[10%]'>{duration}</p>
              <div className='cursor-pointer' onClick={() => {
                setPlay(!play)
              }}>
                {play === true
                  ? <FaPause size={25} className='' />
                  : <FaPlay size={25} className='' />
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
