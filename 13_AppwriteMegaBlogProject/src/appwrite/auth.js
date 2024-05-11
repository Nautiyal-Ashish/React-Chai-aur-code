import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// Code better than below

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method (direct login )
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      return error;
    }
  }
}

const authService = new AuthService();

export default authService;

// ----------------------------------

// Default code
/*
const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') 
// Your API Endpoint
.setProject('<PROJECT_ID>');                 
// Your project ID

const account = new Account(client);

const user await = account.create(
    'ID.unique()', 
    'email@example.com', 
    'password'
);
*/
