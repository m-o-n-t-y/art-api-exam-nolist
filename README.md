# Art API

An api to manage paintings and artists.

## Getting Started

Hello developers! To get started working on the Art API, please fork the repo, clone your fork locally using git, and install the dependencies from NPM, like this:  

```
$ git clone [clone url] 
$ cd [Project Directory]
$ npm install
```

### Database

You will need to create your own CouchDB database to run this project. You can use a hosted variety such as that provided by Cloudant, or [download and install CouchDB](http://couchdb.apache.org/#download) to run one locally.

### Environment Variables

Create a local **.env** file in your project to store environmental details that are typically secret.  

  **Example**

  ```
  COUCH_URL=https://sdfrtrerdfsxdnorth:187254aff7762f28afxu92d137c1899c14f7c999@jeffjohnson.cloudant.com/
  COUCH_DATABASE=artapi
  PORT=4000
  ```



### Starting the api

In the terminal, navigate to the location of your project and Run the following command to start the api on localhost:4000.

```
$ cd [Project Directory]
$ npm start
```

## Endpoints



## Books

## Create a book - `POST /books`

Add a book to the collection of books by providing a new book resource in the request body.  The following fields are required:

- `title`
- `author`
- `ISBN`
- `genre`
- `description`


**Example**

```
POST /books

{
  "title": "A Brave New World",
  "author": "author_aldous_huxley",
  "type": "book",
  "publisher": "Penguin Books",
  "ISBN": "12947281",
  "genre": "Fiction",
  "description": "Brave New World is a novel written in 1931 by Aldous Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—'After Ford'—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a profound change in society.",
  "rating": 95,
  "prices": [
    {"type": "paperback", "price": 9.99},
    {"type": "hardback", "price": 19.99},
    {"type": "audio", "price": 19.99},
    {"type": "kindle", "price": 12.99}
  ]
}
```

**Response 200**

```
{
  "ok": true,
  "id": "book_brave_new_world",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```


## Get a book - `GET /books/{id}`

Retrieves a single book by the book `{id}` route parameter.  

**Example**

```
GET /books/book_brave_new_world
```

**Response 200**

```
{
  "_id": "book_brave_new_world",
  "_rev": "2-e158939dfabc095988f9f4ddaa0e942e",
  "title": "A Brave New World",
  "author": "author_aldous_huxley",
  "type": "book",
  "publisher": "Penguin Books",
  "ISBN": "12947281",
  "pages": 254,
  "genre": "Fiction",
  "description": "Brave New World is a novel written in 1931 by A Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—'After Ford'—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a profound change in society.",
  "rating": 95,
  "prices": [
    {
      "type": "paperback",
      "price": 9.99
    },
    {
      "type": "hardback",
      "price": 19.99
    },
    {
      "type": "audio",
      "price": 19.99
    },
    {
      "type": "kindle",
      "price": 12.99
    }
  ]
}
```

### Route Parameters

  - `id` - used to identify a book in the collection of books.

## Update a book - `PUT /books/{id}`

Update a book in the collection of books.  Supply the book resource to replace in the request body.  Include the `_id` and `_rev` keys in the resource.  The following fields are required:

  - `_id`
  - `_rev`
  - `type`
  - `title`
  - `author`
  - `ISBN`
  - `genre`
  - `description`

  **Example**

  ```
  PUT /books

  {
    "_id": "book_best_of_times",
    "_rev": "1-ffe4d573caee404da6c1662e32cf429b",
    "title": "The Best of times",
    "author": "author_mary_jenkins",
    "type": "book",
    "publisher": "Penguin Books",
    "ISBN": "12947333",
    "pages": 199,
    "genre": "Fiction",
    "description": "blah",
    "rating": 78,
    "prices": [
      {
        "type": "paperback",
        "price": 9.99
      },
      {
        "type": "hardback",
        "price": 19.99
      }
    ]
  }
  ```

  **Response 200**

  ```
  {
    "ok": true,
    "id": "book_best_of_times",
    "rev": "2-SVF157A5EA545C99B00FF904EEF067DFE"
  }
  ```


## Delete a book - `DELETE /books/{id}`

Deletes a single book using the book `{id}` route parameter.

**Example**

```
DELETE /books/book_brave_new_world
```

**Response 200**

```
{
  "ok": true,
  "id": "book_brave_new_world",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```



## List the books - `GET /books`

## TODO: Search the books = `GET /books?[author][genre][publisher]`

### Query Parameters

  - author
  - publisher
  - genre

  Example `GET \books?author=William F Buckley`





## AUTHORS

## Create an author - `POST /authors`

Add an author to the collection of authors by providing a new author resource in the request body.  The following fields are required:

  - `name`
  - `placeOfBirth`
  - `birthDate`

  **Example**

  ```
  POST /authors

  {
    "name": "Aldous Huxley",
    "placeOfBirth": "London",
    "birthDate": "1932-05-01"
  }
  ```

  **Response 200**

  ```
  {
    "ok": true,
    "id": "author_aldous_huxley",
    "rev": "1-A6157A5EA545C99B00FF904EEF056KFRT"
  }
  ```

## GET/authors/{id}

  Retrieve a single author by id.

  **Example**

  ```
  GET /authors/author_aldous_huxley

  ```

  **Response 200**

  ```
  {
      "_id": "author_aldous_huxley",
      "_rev": "1-3ce437e5fb2afd7277bc5c4a6375edcb",
      "name": "Aldous Huxley",
      "placeOfBirth": "London",
      "birthDate": "1932-05-01",
      "type": "author"
  }
  ```

## Update an author - `PUT /authors/author_aldous_huxley`

  Update an author in the collection of authors by providing a updated author resource in the request body.  The following fields are required:

    - `_id`
    - `_rev`
    - `type`  
    - `name`
    - `placeOfBirth`
    - `birthDate`

  **Example**

    ```
    POST /authors

    {
      "name": "Aldous Huxley",
      "placeOfBirth": "London",
      "birthDate": "1932-05-01"
    }
    ```

  **Response 200**

    ```
    {
      "ok": true,
      "id": "author_aldous_huxley",
      "rev": "1-A6157A5EA545C99B00FF904EEF056KFRT"
    }
    ```


## Delete an author - `DELETE /authors/{id}`

  Deletes a single author using the author `{id}` route parameter.

  **Example**

    ```
    DELETE /authors/author_arthur_conan_doyle
    ```

  **Response 200**

    ```
    {
      "ok": true,
      "id": "author_arthur_conan_doyle",
      "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
    }
    ```
