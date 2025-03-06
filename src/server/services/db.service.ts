import { Db, MongoClient } from 'mongodb';
import clientPromise from '../config/mongodb';
import { getEnvVariable } from '../config/env';

export class DatabaseService {
  private static instance: DatabaseService;
  private db: Db | null = null;
  private client: MongoClient | null = null;
  private connecting: Promise<Db> | null = null;

  private constructor() {}

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async connect(): Promise<Db> {
    // If already connecting, wait for that connection
    if (this.connecting) {
      return this.connecting;
    }

    // If already connected and healthy, return existing connection
    if (this.db && this.client) {
      try {
        await this.client.db().command({ ping: 1 });
        return this.db;
      } catch (error) {
        console.log('MongoDB connection lost, reconnecting...');
        this.db = null;
        this.client = null;
      }
    }

    // Create new connection
    this.connecting = (async () => {
      try {
        console.log('Connecting to MongoDB...');
        this.client = await clientPromise;
        
        // Get database name from environment
        const dbName = getEnvVariable('MONGODB_DB');
        console.log('Using database:', dbName);
        
        this.db = this.client.db(dbName);
        
        // Test the connection
        await this.db.command({ ping: 1 });
        console.log('MongoDB connected successfully');
        
        return this.db;
      } catch (error) {
        console.error('MongoDB connection error:', error);
        this.db = null;
        this.client = null;
        throw new Error('Failed to connect to database');
      } finally {
        this.connecting = null;
      }
    })();

    return this.connecting;
  }

  async getCollection(name: string) {
    const db = await this.connect();
    return db.collection(name);
  }

  // Add a health check method
  async healthCheck() {
    try {
      const db = await this.connect();
      await db.command({ ping: 1 });
      return true;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  async initializeDatabase() {
    try {
      const db = await this.connect();

      // Create collections if they don't exist
      const collections = await db.listCollections().toArray();
      const collectionNames = collections.map(c => c.name);

      if (!collectionNames.includes('users')) {
        await db.createCollection('users');
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
        await db.collection('users').createIndex({ phone: 1 });
      }

      if (!collectionNames.includes('courses')) {
        await db.createCollection('courses');
        await db.collection('courses').createIndex({ name: 1 });
        await db.collection('courses').createIndex({ isPopular: 1 });
      }

      if (!collectionNames.includes('payments')) {
        await db.createCollection('payments');
        await db.collection('payments').createIndex({ userId: 1 });
        await db.collection('payments').createIndex({ orderId: 1 }, { unique: true });
        await db.collection('payments').createIndex({ status: 1 });
      }

      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }
}

export const dbService = DatabaseService.getInstance(); 