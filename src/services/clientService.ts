import { Client } from '../models/clientModel';

async function createClient(clientData: any) {
  try {
    const client = await Client.create(clientData);
    return client;
  } catch (error) {
    console.error('Error while registering!!', error);
    throw error;
  }
}

export { createClient };
