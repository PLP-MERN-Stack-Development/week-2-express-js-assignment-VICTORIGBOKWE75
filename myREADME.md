
markdown
Copy
Edit
# 📦 Express Products API

A RESTful API built with **Express.js** that supports full CRUD operations, middleware, and advanced features like filtering, pagination, and product statistics.

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or pnpm

### 📦 Install Dependencies

```bash
npm install
⚙️ Environment Setup
Create a .env file based on .env.example:

bash
Copy
Edit
cp .env.example .env
Add your API key in .env:

env
Copy
Edit
API_KEY=your-secret-api-key
▶️ Run the Server
bash
Copy
Edit
npm run dev   # for development with nodemon
npm start     # to start normally
Server runs on: http://localhost:3000

🔌 API Endpoints
All protected routes require this header:
x-api-key: your-secret-api-key

📄 GET /api/products
Get all products.

Query Parameters:

category – filter by category

search – search by name (case-insensitive)

page – pagination page number

limit – number of products per page

Example:
GET /api/products?category=electronics&search=phone&page=1&limit=5

📄 GET /api/products/:id
Get a single product by ID.

➕ POST /api/products
Create a new product.

Headers:
x-api-key: your-secret-api-key

Body:

json
Copy
Edit
{
  "name": "Phone",
  "description": "A new smartphone",
  "price": 999,
  "category": "electronics",
  "inStock": true
}
✏️ PUT /api/products/:id
Update an existing product by ID.

Headers:
x-api-key: your-secret-api-key

Body: (Partial or full)

json
Copy
Edit
{
  "price": 899
}
❌ DELETE /api/products/:id
Delete a product by ID.

Headers:
x-api-key: your-secret-api-key

📊 GET /api/products/stats
Get product statistics (e.g., count by category).

🛡️ Middleware Features
✅ Custom logger

✅ API key authentication (x-api-key)

✅ Product validation on POST/PUT

✅ Global error handler with custom error classes

📁 Folder Structure
bash
Copy
Edit
project/
├── server.js
├── .env
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── controllers/
    │   └── product.controller.js
    ├── routes/
    │   └── product.routes.js
    ├── middleware/
    │   ├── auth.js
    │   ├── errorHandler.js
    │   ├── logger.js
    │   └── validateProduct.js
    └── utils/
        └── customErrors.js
🧪 Testing Tools
Use Postman, Insomnia, or curl to test endpoints.

📜 License
MIT – free to use and modify.