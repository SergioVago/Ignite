import { NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id
  
  const users = [
    {
      id: 1, name: 'Sergio'
    },
    {
      id: 2, name: 'Isa'
    },
    {
      id: 3, name: 'Dhan'
    },
  ] 

  return response.json(users)
}