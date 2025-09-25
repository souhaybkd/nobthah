import { Account, Client, Databases } from 'appwrite';
const client = new Client();


client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('66cf1e960032fa93109c');

export const account = new Account(client);
export const databases = new Databases(client);