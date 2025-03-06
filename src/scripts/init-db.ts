import { dbService } from '../server/services/db.service';

async function initializeDatabase() {
  try {
    await dbService.initializeDatabase();
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Database initialization failed:', error);
  } finally {
    process.exit();
  }
}

initializeDatabase(); 