import { config } from 'dotenv'

config();

export const { 
  PORT_APP, 
  HOST_APP,
  NODE_ENV
} = process.env 