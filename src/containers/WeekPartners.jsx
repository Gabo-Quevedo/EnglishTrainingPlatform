import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekPartnersItem from '../components/WeekPartnersItem';

const WeekPartners = ({ partners }) => {

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Partners' isSubSecPartners />
      {partners.length > 0 && (
        partners.map(item => (
          <WeekPartnersItem key={item.id} {...item} />
        ))
      )}
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

export default connect(mapStateToProps, null)(WeekPartners);
