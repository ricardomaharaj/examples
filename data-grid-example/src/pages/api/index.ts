import { NextApiHandler } from "next"
import MOCK_DATA from "~/lib/MOCK_DATA.json"

const handler: NextApiHandler = async (req, res) => {
  res.json(MOCK_DATA.teams)
}

export default handler
