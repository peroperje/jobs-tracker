import uniqid from 'uniqid';

const initState = {
  jobs: [
    {
      id: uniqid(),
      title: 'React',
      URL: 'http://google.com',
      clientLocation: 'Serbia, Belgrade',
      jobLocation: 'Serbia, Belgrade',
      comment: 'Some comment',
      active: true
    },
    {
      id: uniqid(),
      title: 'Redux 2',
      URL: 'http://google.ts',
      clientLocation: 'London, UK',
      jobLocation: 'London, UK',
      comment: 'Some comment about London, UK',
      active: true
    },
    {
      id: uniqid(),
      title: 'Node',
      URL: 'http://nodejs.org',
      clientLocation: 'New York, USA',
      jobLocation: 'Remote',
      comment: 'Some comment about New York, USA',
      active: false
    }
  ],
  jobsVisibilityFilter: null
};

export default initState;
