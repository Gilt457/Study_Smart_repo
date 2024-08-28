import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
    const [subject, setSubject] = useState('');
    const [year, setYear] = useState('');
    const [file, setFile] = useState(null);

    const upload = () => {
        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('year', year);
        formData.append('file', file);

        axios.post('http://localhost:5000/api/upload', formData, {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => alert('File uploaded successfully'))
        .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Upload Exam Paper</h2>
            <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
            <input type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} />
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
        </div>
    );
}

export default UploadPage;

