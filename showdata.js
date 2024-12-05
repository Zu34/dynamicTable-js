document.addEventListener('DOMContentLoaded', function() {
    const employees = [
        { name: 'Nurra Ally', position: 'Software Engineer', department: 'Development', salary: '$100,000' },
        { name: 'Janyy john', position: 'Web Developer', department: 'Product', salary: '$120,000' },
        { name: 'Yara Mario ', position: 'UI Designer', department: 'Design', salary: '$95,000' },
        { name: 'Emy Riko', position: 'Tester', department: 'Quality Assurance', salary: '$85,000' },
        { name: 'Michael Rhea', position: 'HR Manager', department: 'Human Resources', salary: '$110,000' }
    ];

    function generateEmployeeTable() {
        const tableBody = document.querySelector('#employeeTable tbody');
        let rowsHTML = '';
        
        for (let i = 0; i < employees.length; i++) {
            const employee = employees[i];
            rowsHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
        }

        tableBody.innerHTML = rowsHTML;
    }

    generateEmployeeTable();
});
