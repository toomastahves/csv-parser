### Setup and Configuration
git clone https://github.com/toomastahves/csv-parser  
npm install  
npm start  
[http://localhost:1337](http://localhost:1337)  
Configure MySQL and E-mail connections in server/config/index.js file  
Optional: If you run API on different port other than 3000, configure client/constants/uri.js and server/server.js  
Upload file with 6 columns (int, string, int, string, string, string), example:  
```
1,Fred Caldwell,61,Bater Circle,339 Posa Grove,YELLOW
2,Teresa Craig,21,Epoese Ridge,233 Urulu Square,BLUE
```

---
### Functionality
Uploads CSV file and inserts into MySQL database.  
Shows e-mail form after upload is completed and sends e-mail with results.  
Lists tables where CSV files were uploaded.  
Allows searching upon selected table.  

---
### Issues
File upload too slow on big files, because it inserts one row at a time.  
On multiple file uploads, it shows results for just one file.  
Implement proper error handling, so Node won't crash.  

---
### Todos
Write unit tests.  
Find faster solution for file uploads (bulk insert).  
Create feedback for multiple file uploads.  
Allow any CSV file to be uploaded, not just 6 column files.  
Add proper pagination for search, currently just limits to 1000.  
