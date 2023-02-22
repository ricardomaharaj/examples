import { S } from 'fluent-json-schema'

import type { Controller } from '../types/controller.js'
import type { ReqBody, ReqParams } from '../types/req-data.js'

import { Task } from '../db/models/task.js'

export const taskController: Controller = (fast, opts, done) => {
  fast.get('/', async (req, res) => {
    try {
      const todos = await Task.findAll()
      return todos
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

  fast.get(
    '/:id',
    { schema: { params: S.object().prop('id', S.string().required()) } },
    async (req, res) => {
      const params = req.params as ReqParams

      try {
        const todo = await Task.findByPk(params.id)
        if (!todo) return res.status(404).send('not found')
        return todo
      } catch (error) {
        return res.status(500).send({ error })
      }
    }
  )

  fast.post(
    '/',
    { schema: { body: S.object().prop('task', S.string().required()) } },
    async (req, res) => {
      const body = req.body as ReqBody

      try {
        const todo = await Task.create({ task: body.task })
        return todo
      } catch (error) {
        return res.status(500).send({ error })
      }
    }
  )

  fast.patch(
    '/:id',
    {
      schema: {
        params: S.object().prop('id', S.string().required()),
        body: S.object().prop('task', S.string())
      }
    },
    async (req, res) => {
      const params = req.params as ReqParams
      const body = req.body as ReqBody

      try {
        const task = await Task.findByPk(params.id)
        if (!task) return res.status(404).send('not found')

        if (body.task) task.task = body.task

        await task.save()

        return task
      } catch (error) {
        return res.status(500).send({ error })
      }
    }
  )

  fast.delete(
    '/:id',
    { schema: { params: S.object().prop('id', S.string().required()) } },
    async (req, res) => {
      const params = req.params as ReqParams

      try {
        const task = await Task.findByPk(params.id)
        if (!task) return res.status(404).send('not found')
        await task.destroy()
        return 'task deleted'
      } catch (error) {
        return res.status(500).send({ error })
      }
    }
  )

  done()
}
