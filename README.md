# robot-ninja
More than just an extensible wiki engine written in Node.js

## Design Goals
* Create an extensible wiki middleware for koa
* Be part of an application, not the entire application
* Be the backend API, not the frontend
* Code over configuration - store a code file that exports global configuration options and still allow individual options to be changed per page using the API
* Use GitHub flavored markdown, but make it possible to use something else too
* Support multiple storage backends starting with a git repository for storage
* Support attachments, including large attachments
* Provide standard wiki features like red links, versioning, comparision and change reversal (reverting)
* Do not handle authentication, store access control and author information
* Be servable from any base URL and otherwise provide a consistent API URL structure
* Be RESTful and adhere to web standards (appropriate request methods and status codes)
* Serve JSON data using the http://jsonapi.org/ specification
* Have a client library available for this API (may be a separate repo)

