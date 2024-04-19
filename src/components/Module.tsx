import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'

type ModuleProps = {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module(props: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {props.moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{props.title}</strong>
          <span className="text-xs text-zinc-400">
            {props.amountOfLessons} aulas
          </span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="09:30" />
        <Lesson title="Fundamentos do Redux" duration="09:30" />
        <Lesson title="Fundamentos do Redux" duration="09:30" />
      </nav>
    </div>
  )
}
