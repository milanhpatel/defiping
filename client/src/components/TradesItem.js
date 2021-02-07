import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
const Web3 = require('web3');
const Web3Utils = require('web3-utils');

const web3 = new Web3('https://mainnet.infura.io/v3/ca53d4f9eb5546b8904071d6ddb1fb98');

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

const blockToDate = async (string) => {
  let result = await web3.eth.getBlock(string).timestamp
  let date = new Date(result*1000)
  let finalDate = date.toUTCString()
  return finalDate;
}

const TradesItem = ({exch: { id, sourceKey, sourceAmount, destinationKey, destinationAmount, time } }) => {


  function externalLink(hash) {
    let tradeID = id.slice(0,66);
    return "https://etherscan.com/tx/"+tradeID.toString()
  }

  return (
    <div className="card card-body mb-3">
          <h6 className="mb-3">Trade Hash:{' '} <a href={externalLink(id)}>{id.slice(0,66)}</a> </h6>
          <ul className="list-group">
          <li className="list-group-item">Selling:{' '} {formatCurrency(sourceAmount)}{' '}{decoder(sourceKey)}</li>
          </ul>
          <li className="list-group-item">Buying:{' '} {formatCurrency(destinationAmount)}{' '}{decoder(destinationKey)}</li>
          <li className="list-group-item">Time:{' '} {time}</li>
        </div>
  );
};

export default TradesItem;
