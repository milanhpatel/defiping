import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0,-3);
}

const PoolItem = ({ pool: { id, name, manager, fundValue, fundAddress } }) => {
  function externalLink(address) {
    return "https://etherscan.com/address/"+fundAddress.toString()
  }

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Name:{' '}
              {name}
          </h4>
          <p>
            Fund Address: <a href={externalLink(fundAddress)}>{fundAddress}</a>
          </p>
          <p>
            Fund Value: {formatMoney(Math.round(fundValue / Math.pow(10, 18)))} sUSD
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/pool/${id}`} className="btn btn-secondary">
            Trades
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoolItem;
