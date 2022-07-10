import { useEffect } from 'react'
import { client } from './config/client-graphql'
import { gql } from '@apollo/client';

import './App.css';

function App() {
  useEffect(() => {
    initial()
  }, [])

  function initial() {
    client
    .query({
      query: gql`
        query {
          tweets {
            _id author description likes
          }
        }
      `
    }).then(res => console.log(res))
  }


  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
