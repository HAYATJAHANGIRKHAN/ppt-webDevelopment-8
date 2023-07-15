// Optionally, you can use JavaScript to populate the table dynamically
// Here's an example of how you can add rows to the table

const tableBody = document.querySelector('#student-details-table tbody');

// Example data
const students = [
  { name: 'John Doe', age: 18, grade: 'A', address: '123 Main St' },
  { name: 'Jane Smith', age: 17, grade: 'B', address: '456 Elm St' },
  // Add more student objects as needed
];

students.forEach(student => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.grade}</td>
    <td>${student.address}</td>
    <!-- Add more cells as needed -->
  `;
  tableBody.appendChild(row);
});
