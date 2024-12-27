import dotenv from 'dotenv';
dotenv.config();

import { PUBLIC_DATA } from './constant.js'; // Ensure to include the correct file extension
import app from './src/app.js';
import { ConnectDB } from './src/config/db.config.js';
ConnectDB();



app.listen(PUBLIC_DATA.port, () => {
    console.log(`The app is listening at http://localhost:${PUBLIC_DATA.port}`);
});
