# Wrap-iT-Up-Backend

Steps to Be Followed
Step 1: Create Folder in your System
Step 2: Open VS Code 
Step 3: Drag the Created Folder to VS Code
Step 4: Now Open the Terminal on VS Code
Step 5: RUN the Command "npm init"
Step 6: Enter Some Basic Details Like Name, Version, Description, and etc.
Step 7: Now Install some dependencies using npm 
        1. "express"
        2. "cors"
        3. "dotenv"
        4. "bcrypt"
        5. "jsonwebtoken"
        6. "mongoose"
        7. "nodemon"
    Command: npm install express cors dotenv bcrypt jsonwebtoken mongoose
Step 8: Now Create a app.js file and .env file in the project directory.
Step 9: Now Create Some Folders
        1. api  --> routes(all the routes files)
        2. controllers (all controllers)
        3. db   --> models(it contains structure of object) and service(it contains CRUD), connect
        4. locales  --> en
        5. public   -->Front end files 
        6. utils    --> middlewares(auth, 404), config, encrypt, token
Step 10: Now Create .gitignore file and add line "node_modules" and save them.
Step 11: Now Push your code to Git Repository Following the Steps given in Github, after creating new Repository.