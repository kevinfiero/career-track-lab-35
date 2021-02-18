import { getPosts } from './postSelectors';

describe('post selectors', () => {
  it('select the list of posts from state', () => {
    const state = {
      posts: [{ 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.' }]
    };
  
    const posts = getPosts(state);
  
    expect(posts).toEqual([{ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' }]
    );
  });
});
