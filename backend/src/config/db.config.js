import mongoose from 'mongoose';
import { PUBLIC_DATA } from '../../constant.js'; // Make sure the path is correct

export async function ConnectDB() {
    try {
        await mongoose.connect(PUBLIC_DATA.mongo_uri);
        console.log(`The app is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        mongoose.disconnect();
        process.exit(1);
    }
}
