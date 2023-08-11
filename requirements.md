**MERN Stack Todo Manager App with Redux Requirements**

In this task, you will be building a full-stack app using the MERN stack (MongoDB, Express.js, React, Node.js) along with Redux to manage and organize a list of tasks. The app will allow users to perform CRUD (Create, Read, Update, Delete) operations on their tasks and manage the state using Redux.

**Backend Requirements (Node.js and Express):**

1. **Server Setup:**
   Set up a Node.js and Express.js server to handle API requests.

2. **Database Connection:**
   Establish a connection to a MongoDB database to store and manage the tasks.

3. **API Routes:**
   Create API routes for handling CRUD operations on tasks:
   - Create a new task.
   - Retrieve a list of tasks.
   - Retrieve details of a specific task.
   - Update the details of a task.
   - Delete a task.

4. **Error Handling:**
   Implement error handling for API requests and database operations.

**Frontend Requirements (React with Redux):**

1. **Redux Setup:**
   Set up Redux for state management in the frontend.

2. **Redux Actions and Reducers:**
   Create Redux actions and reducers for managing the state of tasks.

3. **Task List Component:**
   Create a component to display a list of tasks fetched from the backend using Redux state.

   Implement the following functionalities:
   - Fetch tasks from the backend API using Redux actions when the component mounts.
   - Display each task's details, including title and completion status.
   - Allow users to click on a task to view its full details.

4. **Task Details Component:**
   Create a component to display the full details of a selected task using Redux state.

   Implement the following functionalities:
   - Display the selected task's details, including title, description, completion status, and other relevant information.
   - Provide options to mark the task as complete or incomplete using Redux actions.
   - Allow users to go back to the list of tasks.

5. **Add Task Form Component:**
   Create a component to allow users to add new tasks using Redux actions.

   Implement the following functionalities:
   - Provide input fields for users to enter the new task's details (title and description).
   - Upon submission, send a POST request to the backend API using Redux actions to add the new task.
   - Display a success message upon successful addition.

6. **Edit Task Form Component:**
   Create a component to allow users to edit the details of an existing task using Redux actions.

   Implement the following functionalities:
   - Pre-fill the input fields with the current details of the selected task.
   - Upon submission, send a PUT request to the backend API using Redux actions to update the task's details.
   - Display a success message upon successful update.

7. **Delete Task Component:**
   Create a component to allow users to delete a task using Redux actions.

   Implement the following functionalities:
   - Display a confirmation message before deleting the task.
   - Upon confirmation, send a DELETE request to the backend API using Redux actions to remove the task.
   - Display a success message upon successful deletion.

**Guidelines:**

- Use the MERN stack along with Redux to build the app, focusing on both frontend and backend development.
- Utilize Redux for managing the state of tasks and interactions between components.
- Implement API requests (e.g., with the `fetch` API or a library like `axios`) using Redux actions to perform CRUD operations between the frontend and backend.
- Implement user authentication and authorization if required.
- Use CSS or a styling library of your choice for basic styling to create a user-friendly interface.

**Bonus:**

Enhance the app by adding features like sorting tasks based on completion status, implementing task categories or tags, enabling users to search for specific tasks, and improving the user experience with Redux middleware.

**Note:**

This task provides a comprehensive approach to building a full-stack Todo Manager app with Redux using the MERN stack. You can further customize and expand the app based on your creativity and skills.