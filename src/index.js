import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';
import { CommentDetail } from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (<div>
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.recent().toLocaleString()}
          content={faker.random.words(5)}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.recent().toLocaleString()}
          content={faker.random.words(5)}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.recent().toLocaleString()}
          content={faker.random.words(5)}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  </div>)
};

ReactDOM.render(<App />, document.querySelector('#root'));