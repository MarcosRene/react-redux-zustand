import { Video } from 'lucide-react'

type LessonProps = {
  title: string
  duration: string
}

export function Lesson(props: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{props.title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">
        {props.duration}
      </span>
    </button>
  )
}
