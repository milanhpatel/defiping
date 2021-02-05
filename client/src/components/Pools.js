import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PoolItem from './PoolItem';

const POOLS_QUERY = gql`
  query PoolsQuery {
    pools (first: 100, orderBy: fundValue, orderDirection: desc) {
      id
      fundAddress
      name
      fundValue
    }
  }
`;

const Pools = () => {
  const { loading, error, data } = useQuery(POOLS_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  console.log(data)
  let filteredPools = data.pools;
  let totalPools = filteredPools.length;

  // filteredLaunches.sort((a, b) => (a.date_local < b.date_local ? 1 : -1));

  const displayPools = () => {
    return filteredPools.map((pool) => (
      <PoolItem key={pool.id} pool={pool}/>
    ))
  };

  return (
    <React.Fragment>
       <h1 className="display-4 my-3">
        Top Pools <small className="text-muted">(total: {totalPools})</small>
      </h1>
      {displayPools()}
    </React.Fragment>
  );
};

export default Pools;
