
import React from 'react';


import { Query } from "react-apollo";
import gql from "graphql-tag";


const Test = () => (
    <Query
      query={gql`
        {
            restaurants {
            id
            desc
            name
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
      if (error) return <p>error {console.log(error)} :(</p>;
      return <p>{data.restaurants.map(el => <p> {el.name} </p>)}</p>;
      }}
    </Query>
  );
  export default Test;