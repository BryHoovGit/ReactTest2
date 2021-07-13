import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker'
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.recent().toString()} avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
        </div> 
    )};

ReactDOM.render(<App />, document.querySelector('#root'));