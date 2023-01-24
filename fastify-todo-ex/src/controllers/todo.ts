import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { Todo } from '../models/todo'
import { ReqData } from '../types/req-data'

export const TodoController = (
  fast: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fast.get('/', async (req, res) => {
    try {
      let todos = await Todo.findAll()
      return todos
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  fast.get('/:id', async (req, res) => {
    let { id } = req.params as ReqData

    try {
      try {
        let todo = await Todo.findByPk(id)
        if (!todo) return res.status(404).send('todo not found')

        return todo
      } catch (error) {
        return res.status(500).send({ error })
      }
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  fast.post('/', async (req, res) => {
    if (!req.body) return res.status(400).send('body not provided')
    let { task } = req.body as ReqData
    if (!task) {
      return res.status(400).send('task not provided')
    }
    try {
      let todo = await Todo.create({ task })
      return todo
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  fast.put('/:id', async (req, res) => {
    let { id } = req.params as ReqData
    let { task } = req.body as ReqData
    if (!id || !task) return res.status(400).send('id or task not provided')

    let todo = await Todo.findByPk(id)
    if (!todo) return res.status(404).send('todo not found')

    todo.task = task
    try {
      await todo.save()
      return todo
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  fast.delete('/:id', async (req, res) => {
    let { id } = req.params as ReqData
    if (!id) return res.status(400).send('id required')

    try {
      let todo = await Todo.findByPk(id)
      if (!todo) return res.status(404).send('todo not found')

      try {
        await todo.destroy()
        return 'todo deleted'
      } catch (error) {
        return res.status(500).send({ error })
      }
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  done()
}
