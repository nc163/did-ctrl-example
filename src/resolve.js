import { Resolver } from 'did-resolver'
import { getResolver } from 'ethr-did-resolver'
import dotenv from 'dotenv'
dotenv.config()


const main = async () => {
  const identifier = process.env.IDENTIFIRE
  const did = `did:ethr:goerli:${identifier}`
  const rpcURL = process.env.GOERLI_PROVIDER_URL
  const registry = process.env.GOERLI_DID_REGISTRY_CONTRACT_ADDRESS

  const providerConfig = { name: "goerli", chainId: "5", rpcUrl: rpcURL, registry: registry }
  const ethrResolver = getResolver(providerConfig)
  const resolver = new Resolver(ethrResolver);

  try {
    const resolve = await resolver.resolve(did, { accept: 'application/did+ld+json' })
    
    const ddo = resolve?.didDocument
    
    console.log(ddo)
  }catch (error) {
    console.log(error)
  }
}

main();