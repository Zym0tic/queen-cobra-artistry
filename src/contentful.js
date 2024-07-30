import { createClient } from 'contentful';

const client = createClient({
  space: 'your_space_id',
  accessToken: 'your_access_token',
});

export default client;
