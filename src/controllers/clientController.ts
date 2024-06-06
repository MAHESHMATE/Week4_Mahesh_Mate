import { Request, Response } from 'express';
import { createClient } from '../services/clientService';

async function registerClient(req: Request, res: Response) {
  try {
    const clientData = req.body;
    const client = await createClient(clientData);
    res.status(201).json({ message: 'Client registered successfully', client });
  }catch(error) {
    console.error('Error while registering client!!', error);
    res.status(500).json({ error: 'Internal Server Error!!' });
  }
}

export { registerClient };
