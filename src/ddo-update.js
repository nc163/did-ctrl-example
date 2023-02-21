import { EthrDID } from 'ethr-did'

import dotenv from 'dotenv'
dotenv.config()


const main = async () => {
  const identifier = process.env.IDENTIFIRE
  const did = `did:ethr:goerli:${identifier}`
  const rpcURL = process.env.GOERLI_PROVIDER_URL
  const registry = process.env.GOERLI_DID_REGISTRY_CONTRACT_ADDRESS
  const privateKey = process.env.PRIVATE_KEY

  const conf = { identifier: did, privateKey: privateKey, registry: registry, rpcUrl: rpcURL }
  try {
    const ethrDid = new EthrDID(conf)

    // https://developer.uport.me/ethr-did/docs/guides/index
    const test = await ethrDid.setAttribute('did/svc/HubService', 'https://hubs.uport.me', 10)
    console.log(test)
  }catch (error) {
    console.log(error)
  }
}

await main();