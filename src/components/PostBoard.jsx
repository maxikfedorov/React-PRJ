import React from 'react';
import PostItem from "./PostItem";
import '../styles/style.css'

const PostBoard = () => {
    return (
        <div className='post-board'>
            <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}}/>
            <PostItem post={{id: 2, title: 'React', body: 'Javascript library for building user interfaces'}} />
            <PostItem post={{id: 3, title: 'Node.js', body: 'JavaScript runtime built on Chromes V8 JavaScript engine'}} />
            <PostItem post={{id: 4, title: 'CSS', body: 'Stylesheet language for describing the look and formatting of a document written in HTML'}} />
            <PostItem post={{id: 5, title: 'HTML', body: 'Standard markup language for creating web pages'}} />
            <PostItem post={{id: 6, title: 'GraphQL', body: 'A query language for APIs'}} />
            <PostItem post={{id: 7, title: 'Vue.js', body: 'JavaScript framework for building user interfaces'}} />
            <PostItem post={{id: 8, title: 'Express.js', body: 'Fast, unopinionated, minimalist web framework for Node.js'}} />
            <PostItem post={{id: 9, title: 'MongoDB', body: 'Cross-platform document-oriented database program'}} />
            <PostItem post={{id: 10, title: 'Docker', body: 'Platform for building, deploying, and running applications using containers'}} />
            <PostItem post={{id: 11, title: 'Redux', body: 'Predictable state container for JavaScript apps'}} />
        </div>
    );
};

export default PostBoard;