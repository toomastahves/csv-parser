### Setup and Configuration
git clone https://github.com/toomastahves/csv-parser  
npm install  
npm start  
[http://localhost:1337](http://localhost:1337)  
Configure MySQL and E-mail connections in server/config/index.js file  
Optional: If you run API on different port other than 3000, configure client/constants/uri.js  

---
### Functionality
Uploads CSV file and inserts into MySQL database.  
Shows e-mail form after upload is completed and sends e-mail.  
Lists tables where CSV files were uploaded.  
Allows searching upon selected table.  

---
### Issues
File upload too slow on big files, because it inserts one row at a time.  
On multiple file uploads, it shows results for just one file.  
Upload time is calculated upon request end, not upon last insertion to database.  

---
### Todos
Find faster solution for file uploads.  
Create feedback for multiple file uploads.  
Add proper pagination for search, currently just limits to 1000.  
Write unit tests.  
