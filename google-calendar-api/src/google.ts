import dayjs from 'dayjs'
import { calendar_v3, google } from 'googleapis'
import { env } from '~/env'

export function getGoogleClient() {
  const client = new google.auth.OAuth2({
    clientId: env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
    credentials: { refresh_token: env.GOOGLE_OAUTH_REFRESH_TOKEN },
  })

  return client
}

export async function listEvents() {
  const client = getGoogleClient()

  const cal = google.calendar({
    version: 'v3',
    auth: client,
  })

  return await cal.events.list({ calendarId: 'primary', maxResults: 10 })
}

export async function createEvent(args: {
  organizerEmail: string
  attendeeEmail: string
}) {
  const client = getGoogleClient()

  const cal = google.calendar({
    version: 'v3',
    auth: client,
  })

  const now = dayjs()

  const event: calendar_v3.Schema$Event = {
    summary: 'test-event',
    attendees: [{ email: args.organizerEmail }, { email: args.attendeeEmail }],
    start: { dateTime: now.toJSON() },
    end: { dateTime: now.add(1, 'hour').toJSON() },
  }

  return await cal.events.insert({ requestBody: event, calendarId: 'primary' })
}
