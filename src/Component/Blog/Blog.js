import React from 'react';
import UseTitle from '../Hooks/UserTitle';

const Blog = () => {
    UseTitle('Blog')
    return (
        <div className='mb-5 p-5 md:p-2 md:w-9/12 mx-auto'>
            <div className=' mt-5 p-5 bg-slate-100  text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 1. Difference between SQL and NoSQL ?</h1>
                <p className='pl-5 text-xl'>Ans : Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.</p>
            </div>
            <div className='  mt-5 p-5 bg-slate-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 2.What is JWT, and how does it work?</h1>
                <p className='pl-5 text-xl'>Ans :JWT from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots , and serialized using base64. In the most common serialization format, </p>
            </div>
            <div className='  mt-5 p-5 bg-slate-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 3. What is the difference between javascript and NodeJS?</h1>
                <p className='pl-5 text-xl'>Ans : Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
            </div>
            <div className='  mt-5 p-5  text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 2. How does NodeJS handle multiple requests at the same time?</h1>
                <p className='pl-5 text-xl'>Ans :A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.The cluster module allows easy creation of child processes that all share the same server ports.</p>
            </div>
        </div>
    );
};

export default Blog;