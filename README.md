# MVST Challenge

We're thrilled that you've made it to our MVST coding challenge! We are rooting for your success and hope to meet you in the challenge review! 🚀 If you have anything that we can help you with, just open an issue in the Github repo that was provided to you. 

## How to get started

To get started with the challenge, first read this README carefully. Then you can go on and
read the READMEs inside the frontend and backend folders.

[Backend README](backend/README.md)

[Frontend README](frontend/README.md)

## Introduction

This code challenge is a project that already contains a very basic backend and frontend structure.

The backend and frontend are not connected at the beginning of the challenge.

Your task will be to implement some requirements using this repository, but you ultimately own the code. Don't feel like you need to stick to the structure provided, so feel free to refactor, readjust and improve it. Also, update this README if you want to describe your tech stack, give us instructions on how to run it, etc.

## Task Description

---

### Task 1 - Check the design

Our designers have provided us a Figma file:
https://www.figma.com/file/C4n0EqxCqKuu6Or4okx7qO/Coding-Challenge-2.0

They expect us to build a fullstack web app that accurately follows their UI/UX requirements.

### Task 2 - Coffee list :coffee:

After running the frontend. You will see a list of items at "localhost:3000". This list is currently static on the frontend. The first task is to setup a database and connect the backend and the frontend to properly render the list with the data coming from the backend.

### Task 3 - Adding a :coffee:

Following the design, create a new page and place a form to add a new coffee.
You should be able to add a new coffee using the same structure/type (id, name, description, type, price and image url).
Don't worry about uploading the image, get a URL from Google, an image repository, or serve it as a static asset. You can prefill the image url input and set it to readonly if you like. However, the field needs to be submitted to the backend.

**⚠️ IMPORTANT ⚠️**

Before adding a new Coffee, you should validate if an existing record with the same `name` already exists.

### Finishing the task

1. Create a Pull Request with the coding challenge.
2. Tell MVST HR Team that you are done with it
3. That is it :)

### ⚠️ Rules

1. The codebase provided is there to reduce some decision fatigue so you can focus on the coding. Please keep in mind that the decisions of folder structure, backend layers, architecture and other decisions have to be your own (‼️).
2. Feel free to add any additional JS libraries and tell us in the README file why you chose them.
3. The frontend has to be built with React. Next.js is there to help you have a quick start and focus on the coding. You can replace it with React Vite or similar if you feel like it would be faster.
4. The data MUST be persisted in a database.
5. We love NestJS so we provided some basic backend boilerplate, but it is your choice to use it. You are free to use Next.js as a fullstack framework.
6. Provide a seeding mechanism to populate your DB.
7. Match the design in the Figma file.
8. If you don't feel comfortable using the `app` folder introduced in Next.js 13, you are allowed to use the `page` folder.

### 🔍 What we will check 

To be transparent, these are some things we consider important in the challenge:

1. The final outcome. The challenge is completed if the list of items is rendered on the frontend while fetching data from a backend server and we can add items to the list through the form.
2. General skills of programming. Besides checking the outcome of your running project, we will check your code for the following: readability, organization, robustness, layering, reusability, and extensibility.
3. Application of best practices and design patterns.
4. The outcome in comparison with the design.

### Extra Points

So you are finished and feel like showing us some more? Here are a few things that we'd love to see:

1. Testing. Your choice of what to test and how.
2. Add some CSS animations or use Framer Motion
3. If you haven't already, make the frontend SEO friendly
4. Deploy your application

## FAQ

---

- I am not familiar with Next.js and NestJS

  We don't expect you to know all the internals of these frameworks. What we do care about is the quality and the outcome of what you created. For the frontend, focus more on developing a good React application rather than the bells and whistles of Next.js. For the backend part, focus more on qualitative aspects like clean code and architecture and not NestJS specifics. The same applies if you choose to use Next.js as a fullstack framework.

- I don't want to use tailwind

  Feel free to use pure CSS (we love it), styled-components, CSS preprocessors like SASS or any other library that you are comfortable with. Just don't cheat and use a full-on component library like MaterialUI or Bootstrap 😉 We need to know your CSS skills!

- The starter code won't start

  Check that you are using the correct node versions. We have provided an `.nvmrc` file so you can set it to Node 18 if you are using `nvm`. Also, make sure that you have docker installed if you want to use the DB starter script provided by us.
  
- Some project dependencies are out of date. Can I update them?

  Absolutely! Also ping us and let us know about this.

## Feedback

---

### What would you improve if given more time?

Please fill

### How was your experience doing this challenge?

Please fill

---

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
