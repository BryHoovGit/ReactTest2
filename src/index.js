import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
        </div> 
    )};

ReactDOM.render(<App />, document.querySelector('#root'));