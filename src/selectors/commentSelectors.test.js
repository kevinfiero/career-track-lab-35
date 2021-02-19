import { getComments } from './commentSelectors';

describe('comment selectors', () => {
  it('select the list of comments from state', () => {
    const state = {
      comments: {
        comments: [{
          comment: 
            'The best board game in 2020 was the best game that existed.' }]
      }
    };
  
    const comments = getComments(state);
  
    expect(comments).toEqual([{
      comment: 
        'The best board game in 2020 was the best game that existed.' }]
    );
  });
});
