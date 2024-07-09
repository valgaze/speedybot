import { Database } from "sqlite3"; // Swap out w/ serious/thoughtful storage when deploying

export type ConversationMemoryPayload = {
  conversationID: string;
  totalTokens?: number;
};
// Base class to handle database operations
abstract class BaseStorage<T> {
  protected db: Database;
  protected tableName: string;

  constructor(dbPath?: string, tableName?: string) {
    this.db = new Database(dbPath || ":memory:");
    this.tableName = tableName || "default_table";
  }

  protected async runQuery(query: string, params?: any[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  protected async getQuery(query: string, params?: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.get(query, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  protected async allQuery(query: string, params?: any[]): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  protected abstract createTable(): Promise<void>;

  async init(): Promise<void> {
    await this.createTable();
  }
}

// SimpleMemoryStorage: Maps special userId to conversationID and optional totalTokens
export class SimpleMemoryStorage extends BaseStorage<{
  conversationID: string;
  totalTokens?: number;
}> {
  private initReady = false;

  constructor(dbPath = ":memory:") {
    super(dbPath, "simple_memory");
  }

  protected async createTable(): Promise<void> {
    if (!this.initReady) {
      const query = `
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        userId TEXT PRIMARY KEY,
        conversationID TEXT,
        totalTokens INTEGER
      )
    `;
      await this.runQuery(query);
    }
  }

  async setMemory(
    userId: string,
    conversationID: string,
    totalTokens?: number
  ): Promise<void> {
    const query = `
      INSERT INTO ${this.tableName} (userId, conversationID, totalTokens) VALUES (?, ?, ?)
      ON CONFLICT(userId) DO UPDATE SET conversationID=excluded.conversationID, totalTokens=excluded.totalTokens
    `;
    await this.runQuery(query, [userId, conversationID, totalTokens]);
  }

  async getMemory(
    userId: string
  ): Promise<ConversationMemoryPayload | undefined> {
    const query = `SELECT conversationID, totalTokens FROM ${this.tableName} WHERE userId = ?`;
    const row = await this.getQuery(query, [userId]);
    if (row) {
      return {
        conversationID: row.conversationID,
        totalTokens: row.totalTokens,
      };
    }
    return undefined;
  }
}

// ConversationHistoryStorage: Stores OpenAI/ChatGPT message history payload
interface Message {
  role: string;
  content: string;
}

// Save lists of { role: string, content: string} for context
export class ConversationHistoryStorage extends BaseStorage<Message[]> {
  constructor(dbPath?: string) {
    super(dbPath, "conversation_history");
  }

  protected async createTable(): Promise<void> {
    const query = `
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        userId TEXT PRIMARY KEY,
        history TEXT
      )
    `;
    await this.runQuery(query);
  }

  async setHistory(userId: string, history: Message[]): Promise<void> {
    const serializedHistory = JSON.stringify(history);
    const query = `
      INSERT INTO ${this.tableName} (userId, history) VALUES (?, ?)
      ON CONFLICT(userId) DO UPDATE SET history=excluded.history
    `;
    await this.runQuery(query, [userId, serializedHistory]);
  }

  async getHistory(userId: string): Promise<Message[] | undefined> {
    const query = `SELECT history FROM ${this.tableName} WHERE userId = ?`;
    const row = await this.getQuery(query, [userId]);
    if (row) {
      return JSON.parse(row.history);
    }
    return undefined;
  }
}
