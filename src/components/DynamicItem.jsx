import React from 'react';
import '../assets/styles/components/DynamicItem.styl';

const DynamicItem = (props) => {
  const { title, description } = props;
  return (
    <article className='dynamic--item'>
      <span />
      <p className='dynamic-item--title'>
        {title}
      </p>
      <p className='dynamic-item--body'>
        {description}
      </p>
    </article>
  );
};

export default DynamicItem;
