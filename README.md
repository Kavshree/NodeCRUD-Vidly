# NodeCRUD-Vidly

npm install express

npm install nodemon

nodemon index.js

CRUD Operations:
4 APIs that perform ADD, DELETE, UPDATE and READ of an array- "genre" containing a list of movie genres.

APIs Created

•	GET -  /api/genres
Output:
[{"id":101,"genere":"thriller"},{"id":102,"genere":"romantic"},{"id":103,"genere":"comedy"}]

•	POST -  /api/genres 
Request - {"id": 104, "genre": "Drama"}
Output:
[{"id":101,"genere":"thriller"},{"id":102,"genere":"romantic"},{"id":103,"genere":"comedy"},{"id":104,"genere":"Drama"}]

•	PUT -  /api/genres
Request - {"id": 101, "genre": "Sci-fi"}
Output:
[{"id":101,"genere":"Sci-fi"},{"id":102,"genere":"romantic"},{"id":103,"genere":"comedy"}]

•	DELETE -  /api/genres
Request - {"id": 102}
Output:
[{"id":101,"genere":"Sci-fi"},{"id":103,"genere":"comedy"}]

