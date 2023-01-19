import { useTodoContext } from '../contexts/todo'

export function Todos() {
  const { todos, create, update, remove } = useTodoContext()

  return (
    <>
      <input
        type='text'
        placeholder='New Task'
        className='bg1 p-2 mb-2'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            create({ task: e.currentTarget.value })
            e.currentTarget.value = ''
          }
        }}
      />
      <div className='col space-y-2'>
        {todos.map((todo, i) => (
          <div className='row justify-between space-x-2 bg1 p-2' key={i}>
            <input
              className='w-full bg1'
              onChange={(e) =>
                update({ id: todo.id, task: e.currentTarget.value })
              }
              type='text'
              defaultValue={todo.task}
            />
            <button
              className='bg2 px-2'
              onClick={() => remove({ id: todo.id })}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
