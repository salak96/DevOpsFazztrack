1 . git clone `alamat github`
2.  npm install
3.  setting config sesuai db local computer username & password db
4.   Install Pg-admin
    npm install --save sequelize
    npm install --save pg pg-hstore  
    npm install --save-dev sequelize-cli
5.  Configurasi config database 
	npx sequelize-cli db:create --url 
5.  Migrate database
	npx sequelize-cli db:migrate
    ##Generate username
	npx sequelize-cli seed:generate --name user-fazztrack
6.   Seeder Data dummy
	npx sequelize-cli db:seed:all
7.  Npm run dev buka browser localhost:3000/api/user
8.  Buka postman import folder postman
7.  buat folder test dan beri nama file index.js
8.  Copy  code Chai di folder test yang diberi file index.js
9.  npm run test
10. buka postman http://localhost:3000/api/v1/users