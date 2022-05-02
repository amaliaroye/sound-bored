import React, { useEffect, useState } from 'react'

export default function Button({ type }) {
  const [image, setImage] = useState(null)
  const [sound, setSound] = useState(null)

  useEffect(() => {
    import(`./assets/svg/${type}.svg`).then((image) => setImage(image.default))
    import(`./assets/mp4/${type}.mp4`).then((sound) =>
      setSound(new Audio(sound.default))
    )
  }, [type])

  return (
    <>
      {image && (
        <img
          className='button'
          src={image}
          alt={type}
          onClick={() => sound.play()}
        />
      )}
    </>
  )
}
