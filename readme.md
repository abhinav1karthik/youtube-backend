# YouTube Backend API

## About

This project is a robust backend API for a YouTube-inspired video sharing platform. Built with Node.js, Express, and MongoDB, it provides all the essential features for a modern video platform: user authentication, video uploads, comments, likes, subscriptions, and more. The backend is designed for scalability, security, and ease of integration with any frontend. Media files are managed via Cloudinary, and the API is ready for cloud deployment (Vercel).

Key highlights:

-   Secure JWT authentication and refresh tokens
-   Efficient MongoDB aggregation for fast queries
-   File uploads and media management
-   Modular codebase for easy extension
-   Comprehensive API endpoints for all core features

---

## Model Link

Explore the platform's architecture visually: [Eraser Model Workspace](https://app.eraser.io/workspace/wWwREt1prfLcmLBoOV69)

---

A scalable backend API for a YouTube-like video sharing platform, built with Node.js, Express, and MongoDB. This project supports user authentication, video upload and management, comments, likes, subscriptions, and more. It is designed for deployment on Vercel and uses Cloudinary for media storage.

---

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Folder Structure](#folder-structure)
-   [Setup & Installation](#setup--installation)
-   [Environment Variables](#environment-variables)
-   [API Endpoints](#api-endpoints)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

---

## Features

-   User registration, login, logout, password change
-   JWT-based authentication and refresh tokens
-   Video upload (with thumbnail), update, delete, publish/unpublish
-   Commenting on videos, edit/delete comments
-   Like/unlike videos and comments
-   User channel profiles, watch history
-   Dashboard with channel stats (views, likes, subscribers, videos)
-   Healthcheck endpoint
-   File uploads via Multer, media storage on Cloudinary
-   MongoDB aggregation for efficient queries and pagination

---

## Tech Stack

-   **Node.js**
-   **Express.js**
-   **MongoDB** (Mongoose ODM)
-   **Cloudinary** (media storage)
-   **JWT** (authentication)
-   **Multer** (file uploads)
-   **Vercel** (deployment)
-   **Prettier** (code formatting)

---

## Folder Structure

```
├── public/
│   └── temp/                # Temporary file uploads
├── src/
│   ├── app.js               # Express app setup
│   ├── index.js             # Entry point
│   ├── constants.js         # App constants
│   ├── db/
│   │   └── dbConnect.js     # MongoDB connection
│   ├── controllers/         # Route handlers
│   ├── middlewares/         # Auth, Multer, etc.
│   ├── models/              # Mongoose models
│   ├── routes/              # API route definitions
│   └── utils/               # Helpers (error, response, cloudinary)
├── .env.sample              # Example environment variables
├── package.json             # Project metadata & dependencies
├── vercel.json              # Vercel deployment config
└── readme.md                # Project documentation
```

---

## Setup & Installation

1. **Clone the repository:**
    ```bash
    git clone <repo-url>
    cd temp-repo
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure environment variables:**
    - Copy `.env.sample` to `.env` and fill in your values.
    - Required variables:
        - `PORT`, `MONGODB_URL`, `CORS_ORIGIN`
        - `ACCESS_TOKEN_SECRET`, `ACCESS_TOKEN_EXPIRY`
        - `REFRESH_TOKEN_SECRET`, `REFRESH_TOKEN_EXPIRY`
        - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
4. **Run the server (development):**
    ```bash
    npm run dev
    ```
5. **Deploy:**
    - Use Vercel for deployment. See `vercel.json` for config.

---

## Environment Variables

See `.env.sample` for all required variables:

```
PORT=3000
MONGODB_URL=mongodb+srv://your_username:your_password@your_cluster_url
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## API Endpoints

### User

-   `POST /api/v1/users/register` — Register new user
-   `POST /api/v1/users/login` — Login
-   `POST /api/v1/users/logout` — Logout
-   `POST /api/v1/users/refresh-token` — Refresh access token
-   `POST /api/v1/users/change-password` — Change password
-   `GET /api/v1/users/current-user` — Get current user
-   `PATCH /api/v1/users/update-user` — Update user details
-   `PATCH /api/v1/users/update-avatar` — Update avatar
-   `PATCH /api/v1/users/update-coverImg` — Update cover image
-   `GET /api/v1/users/c/:username` — Get channel profile
-   `GET /api/v1/users/watch-history` — Get watch history

### Video

-   `GET /api/v1/video/` — List all published videos (search, sort, pagination)
-   `POST /api/v1/video/` — Upload new video (auth required)
-   `GET /api/v1/video/v/:videoId` — Get video details (auth required)
-   `DELETE /api/v1/video/v/:videoId` — Delete video (auth required)
-   `PATCH /api/v1/video/v/:videoId` — Update video details (auth required)
-   `PATCH /api/v1/video/toggle/publish/:videoId` — Toggle publish status (auth required)

### Comment

-   `GET /api/v1/comment/:videoId` — Get comments for a video
-   `POST /api/v1/comment/:videoId` — Add comment
-   `PATCH /api/v1/comment/c/:commentId` — Update comment
-   `DELETE /api/v1/comment/c/:commentId` — Delete comment

### Like

-   `POST /api/v1/likes/toggle/v/:videoId` — Like/unlike video
-   `POST /api/v1/likes/toggle/c/:commentId` — Like/unlike comment
-   `POST /api/v1/likes/toggle/t/:tweetId` — Like/unlike tweet
-   `GET /api/v1/likes/videos` — Get liked videos

### Dashboard

-   `GET /api/v1/dashboard/stats` — Get channel stats
-   `GET /api/v1/dashboard/videos` — Get channel videos

### Healthcheck

-   `GET /api/v1/healthcheck/` — Check API health

---

## 🧪 API Testing

### Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/a1b2c3d4-e5f6-7890-abcd-ef1234567890)

**Download Collection:** [Video_Streaming_API.postman_collection.json](https://raw.githubusercontent.com/abhinav1karthik/youtube-backend/main/Video_Streaming_API.postman_collection.json)

### Quick Setup

1. **Import Collection:** Click the link above or download the JSON file
2. **Set Environment:**
    - `base_url`: `http://localhost:3000`
    - `access_token`: (auto-saved on login)
3. **Start Testing:** Run health check → login → test all endpoints

### Demo Flow

1. **Health Check** → Verify API is running
2. **Login User** → Get access token
3. **Upload Video** → Test file upload
4. **Toggle Publish** → Test state management
5. **Add Comments** → Test interactions
6. **Dashboard Stats** → Test analytics

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

---

## License

This project is licensed under the ISC License.

---

## Author

Abhinav
