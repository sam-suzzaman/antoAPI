### Project Overview:

It is a backend API of a zooCity application. Here some api endpoints are created to implement animals and its category related CRUD operations in zooCity application using expressJS and MongoDB.

### Run Project locally:

-   Clone repo: `git clone https://github.com/sam-suzzaman/https://github.com/sam-suzzaman/antoAPI.git`
-   Install Dependencies: `npm install`
-   Setup .env file:

    ```
    PORT=2222
    DB_URL=
    DB_NAME=
    DB_USERNAME=
    DB_PASSWORD=

    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

-   Run application: `npm run dev`

### API Endpoints:

-   `GET https://`: Base API Route
-   `GET /animal`: Retrieve a list of animals.
-   `POST /animal`: Add a new animal.
-   `GET /category`: Retrieve a list of category.
-   `POST /category`: Add a new category.

### Used Technologies:

-   ExpressJS
-   Mongoose
-   MongoDB
-   Cors
-   Dotenv
-   Multer
