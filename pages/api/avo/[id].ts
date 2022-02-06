
import DB from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const avoId = request.query.id as string
  const productId = await db.getById(avoId)

  response.setHeader('Content-Type', 'application/json')
  response.status(200).json({ "data": productId })
}

export default allAvos;