import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

const CreateQuizForm = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Set questions from JSON data when component mounts
    setQuestions(questionsData);
  }, []);

  const handleAddQuestion = () => {
   
    const randomIndex = Math.floor(Math.random() * questionsData.length);
    const randomQuestion = questionsData[randomIndex];
    
    
    setQuestions(prevQuestions => [...prevQuestions, randomQuestion]);
  };

  const handleUserAddQuestion = () => {
    
    
    const placeholderQuestion = {
      question: 'Enter your question here...',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0 
    };
    setQuestions(prevQuestions => [...prevQuestions, placeholderQuestion]);
  };

  const handleRemoveQuestion = (index) => {

  };

  const handleSubmit = () => {
   
    alert(`Quiz Title: ${title}\nNumber of Questions: ${questions.length}`);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        {/* Render questions */}
        <ul className="mb-4 text-white">
          {questions.map((question, index) => (
            <li key={index}>
              {question.question} - Correct Answer: {question.options[question.correctAnswer]}
              <button onClick={() => handleRemoveQuestion(index)} className="ml-2 text-red-500">Remove</button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Random Question
          </button>
          <button
            onClick={handleUserAddQuestion}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add User Question
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuizForm;
