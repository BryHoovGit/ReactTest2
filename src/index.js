import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName().toString()}
                    </a>
                    <div className="metadata">
                        <span className="date">{faker.date.recent().toString()}</span>
                    </div>
                    <div className="text">{faker.hacker.phrase()}</div>
                </div>
            </div>
        </div> 
    )};

ReactDOM.render(<App />, document.querySelector('#root'));