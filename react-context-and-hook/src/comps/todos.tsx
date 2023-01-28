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
      <div className='col space-y-1'>
        {todos.map((todo) => (
          <div className='row justify-between bg1 p-2' key={todo.id}>
            <input
              className='bg2 p-2'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  update({ id: todo.id, task: e.currentTarget.value })
                }
              }}
              type='text'
              defaultValue={todo.task}
              placeholder='Task'
            />
            <button className='bg2 p-2' onClick={() => remove({ id: todo.id })}>
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
