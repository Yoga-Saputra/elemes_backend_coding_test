## elemes_backend_coding_test ##

****  Steps Installation ****
1. git clone https://github.com/Yoga-Saputra/elemes_backend_coding_test.git

2. setting database on .env

3. npx sequelize db:migrate

4. npx sequelize db:seed:all

5. for login admin :
-  name: admin password: admin123

6. run => npm run dev

7. POST, localhost:3000/users/login => Route Login
- Note:
- parameters on body raw(json) =  "name": "admin","password": "admin123"

8. POST, localhost:3000/users/register => Route Register
- Note:
- parameters on body raw(json) =  "name": "admin","password": "admin123"

9. POST, localhost:3000/users/logout => Route Logout
- Note:
- parameters on body raw(json) =  "user_id": 1

10. POST, localhost:3000/courses/create => Route create course
- Note:
- parameters on body raw(json) =  "name": "Node JS course","type": "free","price": 150000,"category": "populer" 
- parameters on HEaders =  KEY: Authorization VALUE:token
- type is enum = ['free', 'premium']
- category is enum = ['all-level', 'beginner', 'intermediate', 'advance', 'populer']

11. PUT, localhost:3000/courses/update/1 => update course
- Note:
- parameters on body raw(json) =  "name": "Node JS course","type": "free","price": 150000,"category": "populer" 
- parameters on HEaders =  KEY: Authorization VALUE:token
- type is enum = ['free', 'premium']
- category is enum = ['all-level', 'beginner', 'intermediate', 'advance', 'populer']

12.	POST, localhost:3000/courses/delete/1 => delete course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

13. GET, localhost:3000/courses/getTotal => get total user, total course, total course free
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

14. GET, localhost:3000/courses/category-course => Get Category Course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

15. GET, localhost:3000/courses/populer-category-course => Get Populer Category Course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

16. GET, localhost:3000/courses/get-course => Get Course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

17. GET, localhost:3000/courses/detail-course/1 => Get Detail Course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

18. POST, localhost:3000/courses/search-course => Search Course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token
- parameters on Params = KEY: name_course or user_id or price_course or type_course or category_course
- type_course is enum = ['free', 'premium']
- category_course is enum = ['all-level', 'beginner', 'intermediate', 'advance', 'populer']

19. GET, localhost:3000/courses/sort-high-course => Sort High course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

20. GET, localhost:3000/courses/sort-low-course => Sort Low course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token

21. GET, localhost:3000/courses/get-free-course => get free course
- Note:
- parameters on HEaders =  KEY: Authorization VALUE:token






