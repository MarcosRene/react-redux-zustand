import { useDispatch } from 'react-redux'
import ReactPlayer from 'react-player'

import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) return
  

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
