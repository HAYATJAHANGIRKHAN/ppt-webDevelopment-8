// Import the required modules
const http = require('http');

// Define the products data
const menProducts = [
  { id: 1, name: 'Product 1 (Men)', category: 'Men' },
  { id: 2, name: 'Product 2 (Men)', category: 'Men' },
  // Add more products
];

const womenProducts = [
  { id: 1, name: 'Product 1 (Women)', category: 'Women' },
  { id: 2, name: 'Product 2 (Women)', category: 'Women' },
  // Add more products
];

// Create a server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'application/json');
  
  // Handle different routes
  if (req.url === '/') {
    // Home route
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    // Men route
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    // Women route
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    // Other routes
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
