import React , { useState, useEffect } from 'react'

const Musiques = () => {

  useEffect(() => {
    fetch("https://openwhyd.org/adrien/playlists?format=json")
      .then((result) => result.json())
      .then((musique) => {
        console.log(musique);
      });
  }, []);
  
  return (
    <div>Musiques</div>
  )
}

export default Musiques