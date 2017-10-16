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
  COUCH_URL=https://[KEY]:[PASSWORD]@[USER].cloudant.com/
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



## Paintings

## Create a painting - `POST /paintings`

Add a painting to the collection of paintings by providing a new painting resource in the request body.  The following fields are required:

- name
- movement
- artist
- yearCreated
- museum


**Example**

```
POST /paintings

    {
      "_id": "painting_starry_night",
      "name": "The Starry Night",
      "type": "painting",
      "movement": "post-impressionism",
      "artist": "Vincent van Gogh",
      "yearCreated": 1889,
      "museum": {name: "Museum of Modern Art", location: "New York"}
    }
```

**Response 200**

```
{
  "ok": true,
  "id": "painting_starry_night",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```


## Get a painting - `GET /paintings/{id}`

Retrieves a single painting by the `{id}` route parameter.  

**Example**

```
GET /paintings/painting_starry_night
```

**Response 200**

```

    {
      "_id": "painting_starry_night",
      "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F",
      "name": "The Starry Night",
      "type": "painting",
      "movement": "post-impressionism",
      "artist": "Vincent van Gogh",
      "yearCreated": 1889,
      "museum": {name: "Museum of Modern Art", location: "New York"}
    }
```

### Route Parameters

  - `id` - used to identify the painting.

## Update a painting - `PUT /paintings/{id}`

Update a painting in the collection of painting.  Supply the updated painting resource in the request body.  Include the `_id` and `_rev` keys in the resource.  The following fields are required:

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
  PUT /paintings

    {
      "_id": "painting_starry_night",
      "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F",
      "name": "The Starry Night",
      "type": "painting",
      "movement": "post-impressionism",
      "artist": "Vincent van Gogh",
      "yearCreated": 1889,
      "museum": {name: "Museum of Modern Art", location: "New York"}
    }
  ```

  **Response 200**

  ```
  {
    "ok": true,
    "id": "painting_starry_night",
    "rev": "3-SVF157A5EA545C990FF904EEF067DFE"
  }
  ```


## Delete a painting - `DELETE /paintings/{id}`

Deletes a single painting using the painting `{id}` route parameter.

**Example**

```
DELETE /paintings/painting_starry_night
```

**Response 200**

```
{
  "ok": true,
  "id": "painting_starry_night",
  "rev": "2-9AF304BE281706A04D1D8A4B0F4C9ADB"
}
```


