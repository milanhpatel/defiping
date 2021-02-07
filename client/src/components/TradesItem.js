import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const TradesItem = ({exch: { id, sourceKey, sourceAmount, destinationKey, destinationAmount } }) => {
  // console.log('id is: ', id, 'sourckey is: ', sourceKey)
  return (
    <div className="card card-body mb-3">
          <h6>
            Trade ID:{' '}
              {id}
          </h6>
          <h6>
            Selling: <p>{sourceKey}</p>
          </h6>
          <h6>
            Buying: <p>{destinationKey}</p>
          </h6>
        </div>
  );
};

export default TradesItem;
