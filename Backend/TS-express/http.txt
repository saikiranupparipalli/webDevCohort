idempotent: results are going to be same even after calling "n" times.

// http methods:

GET : reads and retrieve the copy of data.
      no side effects.
      it is idempotent.
      cacheable by browser & CND (it pre-fetches the resource even mouse got hovered.)

POST: send the resource.
      no idempotent.
      calling 10*, creates a 10 resources.
      
PUT: replace/ update complete resource.
     you have to send whole object or update/ replace a resource.

PATCH: works similar to PUT but, user sends only updated filed resource.

DELETE: delete the resource completely.

HEAD: similary to GET but, returns only head. NO BODY.

OPTIONS: preflight/capability check. CORS(cross origin resource sharing.)

response code: 
200-299 success resonse,
300-399 redirect messages,
400-499 client failure response, 
500-599 server failure response.