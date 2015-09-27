# ParkItServer
REST API for ParkIt mobile application

Must install node, npm and mongodb


To start the server:

`
node server.js
`

In a separate terminal window, test API endpoints by sending cURL requests:

`
curl localhost:8080/locations
curl localhost:8080/users
curl localhost:8080/purchases
curl localhost:8080/listings
`

Create an object by sending a cURL POST request with parameters. For example:

`

curl -X POST -i -H "Content-type: application/json" localhost:8080/locations -d '
{
	"address" : "5000 Forbes Avenue",
	"city" : "Pittsburgh",
	"state" : "PA",
	"zip_code" : "15289",
	"indoor" : true,
	"num_cars" : 1,
	"reviews" : {"rating" : 5, "description" : "Best parking in CMU"}
}
'

` 
To create a different object, change the ending of the url from locations to users, purchases or listings and supply the appropriate parameters as specified in app/models in the above cURL request.

To connect to the DB:
`
mongo ds051893.mongolab.com:51893/parkitdb -u dev -p development
`
Then view the documents in a collection (while in mongo):
`
db.locations.find()
`
For more information on using MongoDB: http://www.tutorialspoint.com/mongodb/index.htm


To Be Implemented:
* User login/security for HTTP requests  