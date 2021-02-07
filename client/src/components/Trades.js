import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

import TradesItem from './TradesItem';

const TRADES_QUERY = gql`
  query TradesQuery($id: String!) {
    pools (where: {id: $id}) {
      id
      fundAddress
      name
      exchanges (orderBy: time, orderDirection: desc) {
        id
        sourceKey
        sourceAmount
        destinationKey
        destinationAmount
        time
      }
    }
  }
`;

const Trades = (props) => {
  let { id } = props.match.params;
  const { loading, error, data } = useQuery(TRADES_QUERY, {
    variables: { id },
  });

  const displayTrades = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);
    const { id, name } = data.pools[0];
    const exchanges = data.pools[0].exchanges
    console.log("Exchanges ARE: ", exchanges)
    const displayEachTrade = () => {
      console.log('first exchange: ', exchanges[0])
      return exchanges.map((exch, i) => (
        <TradesItem key={exch.id} exch={exch}/>
      ))
    }

    return (
      <div>
         <h1 className="display-4 my-3">
          <span className="text">Manager:</span> {name}
        </h1>
        <span className="mb-3">(Fund: </span> {id})
        {displayEachTrade()}
        <hr />
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    );
  };

  return <React.Fragment>{displayTrades()}</React.Fragment>;
};

export default Trades;
