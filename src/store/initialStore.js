import uniqid from 'uniqid';

const initState = {
  jobs: {
    items: [
      {
        _id: uniqid(),
        title: 'React',
        URL: 'http://google.com',
        clientLocation: 'Serbia, Belgrade',
        jobLocation: 'Serbia, Belgrade',
        comment: 'Some comment',
        active: true
      },
      {
        _id: uniqid(),
        title: 'Redux 2',
        URL: 'http://google.ts',
        clientLocation: 'London, UK',
        jobLocation: 'London, UK',
        comment: 'Some comment about London, UK',
        active: true
      },
      {
        _id: uniqid(),
        title: 'Node',
        URL: 'http://nodejs.org',
        clientLocation: 'New York, USA',
        jobLocation: 'Remote',
        comment: 'Some comment about New York, USA',
        active: false
      }
    ],
    isFetching: false,
    errorFetching: null
  },
  jobsVisibilityFilter: null,
  user: {
    _id: null,
    firstName: null,
    surName: null,
    isFetching: false,
    errorFetching: null
  }
};

export default initState;
