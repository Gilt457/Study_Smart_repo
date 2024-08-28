import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuestionList() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/questions', {
            headers: { 'x-auth-token': localStorage.getItem('token') }
        })
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {questions.map(question => (
                <div key={question._id}>
                    <h3>{question.subject} ({question.year})</h3>
                    <a href={`http://localhost:5000/${question.fileUrl}`} download>Download</a>
                </div>
            ))}
        </div>
    );
}

export default QuestionList;

