import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import '../css/employeeRegistrationForm.css'

const EmployeeRegistrationForm = () => {
  const [employee, setEmployee] = useState({
    userName: '',
    department: '',
    phoneNumber: '',
  });

  const [suggestedDepartments, setSuggestedDepartments] = useState([]);
  const [employeesList, setEmployeesList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));

    if (name === 'department') {
      const suggestions = generateDepartmentSuggestions(value);
      setSuggestedDepartments(suggestions);
    }
  };

  const generateDepartmentSuggestions = (input) => {
    const departmentNames = [
      'HR',
      'Finance',
      'IT',
      'Marketing',
      'Front-End Developer',
      'Back-End Developer',
      'Full-Stack Developer',
      'Mobile App Developer',
      'DevOps Engineer',
      'Data Scientist',
      'Data Analyst',
      'UI / UX Designer',
    ];
    const suggestions = departmentNames.filter((department) =>
      department.toLowerCase().includes(input.toLowerCase())
    );
    return suggestions;
  };

  const handleDepartmentSelect = (department) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      department: department,
    }));
    setSuggestedDepartments([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      employee.userName.trim() === '' ||
      employee.department.trim() === '' ||
      employee.phoneNumber.trim() === ''
    ) {
      console.log('Please fill in all fields');
      return;
    }
    console.log(employee);
    setEmployeesList((prevList) => [...prevList, employee]);
    setEmployee({
      userName: '',
      department: '',
      phoneNumber: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={employee.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
          {suggestedDepartments.length > 0 && (
            <DropdownMenu suggestions={suggestedDepartments} handleSelect={handleDepartmentSelect}/>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            // pattern="^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$"
            value={employee.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>


      {/*  */}

      {employeesList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((emp, index) => (
              <tr key={index}>
                <td>{emp.userName}</td>
                <td>{emp.department}</td>
                <td>{emp.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default EmployeeRegistrationForm;
