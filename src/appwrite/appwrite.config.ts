import { Account, Client, Databases } from 'appwrite';
const client = new Client();

// Use environment variables with fallbacks
const endpoint = (import.meta as any).env?.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const projectId = (import.meta as any).env?.VITE_APPWRITE_PROJECT_ID || '66cf1e960032fa93109c';

client
    .setEndpoint(endpoint)
    .setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);