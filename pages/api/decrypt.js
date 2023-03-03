const Evervault = require('@evervault/sdk');

export default async function handler(req, res) {

  const evervault = new Evervault(process.env.EVERVAULT_API_KEY);
  console.log(req.body)

  const decryptedName = await evervault.run("decrypt-node", req.body)
    .then(response => { return response.result });

  return res.status(200).json(decryptedName)
}
