import { useTodoContext } from '../contexts/todo'

export function Todos() {
  const { todos, create, update, remove } = useTodoContext()!
  return (
    <>
      <input
        type='text'
        placeholder='New Task'
        className='p-4'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            create({ task: e.currentTarget.value })
            e.currentTarget.value = ''
          }
        }}
      />
      <div className='col space-y-2'>
        {todos.map((todo, i) => (
          <div className='row justify-between space-x-2 bg1 bubble' key={i}>
            <input
              className='w-full'
              onChange={(e) =>
                update({ id: todo.id, task: e.currentTarget.value })
              }
              type='text'
              defaultValue={todo.task}
            />
            <button onClick={() => remove({ id: todo.id })}>REMOVE</button>
          </div>
        ))}
      </div>
    </>
  )
}
