import React, { useState } from 'react'
import '@styles/Like.scss'
import classNames from 'classnames'
import FA from 'react-fontawesome'

const Like = () => {
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(0)
  const [dislike, setDislike ] = useState(0)

  const handleLiked = () => {
    setLiked(!liked)
    setCounter(+1)
  }

  const handleDislike= () => {
    setDislike(+1)
  }

  const likedClass= classNames({
    'Like-fav': true,
    'is_animating': liked,
    'Like--pressed': liked
  })

  return (
    <div className="Like">
      <div className={likedClass} onClick={handleLiked}>
      </div>
      <span className="Like-counter">
        { counter }
      </span>
      <button className="primary-button primary-button--small" onClick={handleDislike}>Dislike {dislike}</button>
      <button className="primary-button primary-button--small">Comment</button>
    </div>
  );
}

export default Like;
