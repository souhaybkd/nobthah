import { Account, Client, Databases } from 'appwrite';
const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665eb96b0012e6af0002');

export const account = new Account(client);
export const databases = new Databases(client);