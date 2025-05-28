## How to set up ?
Hey there! 👋 Welcome to the setup guide for getting our awesome web application up and running on your local machine. Follow these steps, and you'll be ready to explore in no time! ✨

---

## 🛠️ Prerequisites

Before you begin, make sure you have the following installed on your system:

* [Docker](https://www.docker.com/get-started): For running our database.
* [Node.js](https://nodejs.org/en/download/) (LTS recommended): For running the backend and frontend.
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/get-npm): For package management.

---

## 🚀 Getting Started

Follow these steps in your VS Code terminal to set up and launch the entire application stack.

### 1. 🗄️ Start the Database

First, let's get our PostgreSQL database running using Docker Compose.

* **Open a new terminal in VS Code.**
    * Go to `Terminal` > `New Terminal` or press ``Ctrl + ` ``.
* **Ensure you are using a Bash terminal.**
    * Check the dropdown in the top-right of the terminal. If it's not `bash` (or `Git Bash`/`WSL Bash`), click it and select `Git Bash` or `WSL Bash`.
* **Navigate to the backend scripts directory:**
    ```bash
    cd backend
    cd scripts
    ```
* **Make the startup script executable (if you haven't already):**
    ```bash
    chmod +x start-dev-db.sh
    ```
* **Run the database startup script:**
    ```bash
    ./start-dev-db.sh
    ```
    This will spin up your PostgreSQL database container in the background. You should see output indicating the Docker containers are starting.

### 2. 🖥️ Launch the Backend

Next, we'll get the NestJS backend server running.

* **Open a new terminal in VS Code.** (Keep the previous one running for the database).
* **Navigate to the backend root directory:**
    ```bash
    cd backend
    ```
* **Install backend dependencies:**
    ```bash
    npm install
    # or if you prefer yarn:
    # yarn install
    ```
* **Start the backend development server:**
    ```bash
    yarn start:dev
    ```
    The backend will now start, connect to the database, create tables (if they don't exist), and seed initial data. You should see logs indicating the application is listening on a port (usually 3000).


### 3. 🌐 Start the Frontend

Finally, let's bring up the React frontend.

* **Open another new terminal in VS Code.** (Keep the previous two running).
* **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
* **Install frontend dependencies:**
    ```bash
    npm install
    # or if you prefer yarn:
    # yarn install
    ```
* **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    This will compile and launch the frontend application.

---
## ☕️ Adding a New Coffee

When creating a new coffee entry in the application, it's **very important** to configure the image domain correctly. This ensures that your coffee image displays properly in the frontend.

### 🔗 Step 1: Update `next.config.js`

1. Navigate to the `frontend` directory.
2. Open the `next.config.js` file.
3. Add the domain of your image URL to the `images.domains` array.

Next.js uses a built-in Image Optimization feature that requires you to whitelist external image domains. If the domain used in the ImageUrl field is not listed in next.config.js, the image will not load in the application.


## 🚀 Accessing the Application

Once all services are running:

* **Frontend Application:**
    * Open your web browser and go to: `http://localhost:3000` 🌍
    * Here you can interact with the web application.
* **PgAdmin (Database Management):**
    * Open your web browser and go to: `http://localhost:8080` 📊
    * **Password:** `1234`
    * You can use PgAdmin to inspect your database, view the `coffee` table, and confirm that the seeded data is present!

---

That's it! You should now have the entire application stack running locally. Happy coding! 🎉


Thanks and have a great challenge! 🔥

MVST Team
