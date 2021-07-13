import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">{faker.date.recent().toString()}</span>
                    </div>
                    <div className="text">{faker.hacker.phrase()}</div>
                </div>
        </div>
)}

export default CommentDetail
