# Garden Glance - Back-end

Welcome to the back-end of Garden Glance, an advanced CRUD application for managing and selling flower products. This document provides an overview of the back-end of the application.

## Features

### 1. Add a Flower

- Endpoint: `POST /add-flower`
- Users can add a new flower product by providing the required details.
- Request body is validated using `flowerValidation.FlowerValidationSchema`.

### 2. View and Retrieve All Flowers

- Endpoint: `GET /`
- Users can view and retrieve all flower products stored in the database.

### 3. View Specific Flowers

- Endpoint: `GET /:id`
- Users can view details of a specific flower product by providing its unique identifier.

### 4. Delete Flower

- Endpoint: `DELETE /:id`
- Users can delete a specific flower product by providing its unique identifier.

### 5. Update a Flower

- Endpoint: `PATCH /update/:id`
- Users can update details of a specific flower product.


### 6. Bulk Delete

- Endpoint: `DELETE /bulk/delete`
- Users can delete multiple flower products at once.

### 7. Add Sold Product

- Endpoint: `POST /sell`
- Users can add a sold flower product, storing sales information.


### 8. Sold Product History

- Endpoint: `GET /sell/history`
- Users can view the sales history of flower products.

### 9. User Registration

- Endpoint: `POST /register`
- Users can register for an account.


### 10. User Login

- Endpoint: `POST /login`
- Users can log in to their accounts.


### 11. Get User Details

- Endpoint: `GET /user/:email`
- Users can retrieve their details by providing their email address.

## Project Brief

The back-end of Garden Glance is built using TypeScript, Mongoose, and Express. Below is an overview of the technologies used:

- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Mongoose**: An elegant MongoDB object modeling library for Node.js.
- **Express**: A minimal and flexible Node.js web application framework.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/garden-glance-backend.git
```


2. Navigate to the project directory:

```bash
cd gardenGlance-server
```


3. Install dependencies:

```bash
Install dependencies:
```

4. Install dependencies:

```bash
npm install

```

5. Start the development server:

```bash
 npm start
```

- Access the application at ```curl http://localhost:5000``` in your web browser.


 ## Contributing

 We welcome contributions! Follow the guidelines in CONTRIBUTING.md to get started.


 Live Link : ```curl https://garden-glance-sever.vercel.app```