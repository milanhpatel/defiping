import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Web3Utils = require('web3-utils');

const decoder = (string) => {
  let result = Web3Utils.toAscii(string);
  return result;
}

const formatCurrency = (num) => {
  let result = Number(Web3Utils.fromWei(num, 'ether')).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return result;
}

const TradesItem = ({exch: { id, sourceKey, sourceAmount, destinationKey, destinationAmount } }) => {
  function externalLink(hash) {
    let tradeID = id.slice(0,66);
    return "https://etherscan.com/tx/"+tradeID.toString()
  }

  return (
    <div className="card card-body mb-3">
          <h6>
            Trade Hash:{' '} <a href={externalLink(id)}>{id.slice(0,66)}</a>
          </h6>
          <h6>
            Selling: <p>{formatCurrency(sourceAmount)}</p><p>{decoder(sourceKey)}</p>
          </h6>
          <h6>
            Buying: <p>{formatCurrency(destinationAmount)}</p><p>{decoder(destinationKey)}</p>
          </h6>
        </div>
  );
};

export default TradesItem;
