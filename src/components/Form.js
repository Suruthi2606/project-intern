import React, { useState } from 'react';
import './Form.css';

const Form = ({ addCard }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
        phone: '',
        course: '',
        status: 'Unplaced',
    });
    const onChange=(e)=>{
        setFormData({ ...formData,[e.target.name]:e.target.value });
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        addCard(formData);
        setFormData({ name:'',role:'',email:'',phone:'',course:'',status:'Unplaced' });
    };
    return (     
        <form className="form-container" onSubmit={onSubmit}>
            <h1>Fill This Form</h1>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <div className="form">
                                <label>Name:</label>
                                <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Enter your name" required />
                            </div>
                        </th>
                        <th>
                            <div className="form">
                                <label>Role:</label>
                                <input type="text" name="role" value={formData.role} onChange={onChange} placeholder="Enter your role" required />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form">
                                <label>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Enter your email" required />
                            </div>
                        </th>
                        <th>
                            <div className="form">
                                <label>Phone Number:</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="Enter your phone number" required />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="form">
                                <label>Course:</label>
                                <select name="course" value={formData.course} onChange={onChange} required>
                                    <option value="" disabled>Select a course</option>
                                    <option value="Course A">React Basics</option>
                                    <option value="Course B">UI/UX Design</option>
                                    <option value="Course C">JavaScript Fundamentals</option>
                                    <option value="Course D">Advanced CSS</option>
                                    <option value="Course E">Backend Development</option>
                                </select>
                            </div>
                        </th>
                        <th>
                            <div className="form">
                                <label>Status:</label>
                                <select name="status" value={formData.status} onChange={onChange}>
                                    <option value="Placed">Placed</option>
                                    <option value="Unplaced">Unplaced</option>
                                </select>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};
export default Form;
