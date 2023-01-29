
interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className='bg-zinc-500 text-white w-20 h-20 rounded m-2 flex items-center justify-center'>
      <h1>{props.completed}</h1>
    </div>
  )
}