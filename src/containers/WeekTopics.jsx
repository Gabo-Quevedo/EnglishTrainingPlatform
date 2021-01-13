import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTopic, deleteTopic } from '../actions';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekTopicsItem from '../components/WeekTopicsItem';

import '../assets/styles/WeekTopics.styl';

const WeekTopics = (props) => {
  const { topics } = props;
  const [collapse, setCollapse] = useState(false);
  const form = useRef(null);

  const toogleCollapse = () => {
    setCollapse(prevCollapse => !prevCollapse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const newTopic = {
      id: 10,
      title: formData.get('title'),
      description: formData.get('description'),
    };
    props.addTopic(newTopic);
    setCollapse(prevCollapse => !prevCollapse);
  };

  const handleTrashIcon = (id) => {
    props.deleteTopic(id);
  };
  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Topics' isSubSecTopics />
      {topics.length > 0 && (
        topics.map(item => (
          <WeekTopicsItem handleTrashIcon={handleTrashIcon} key={item.id} {...item} />
        ))
      )}
      {!topics.length && (
        <div className='topicAdvise-container'>
          <h1>You have not propose any Topic Yet</h1>
        </div>
      )}
      <div className='topicRequest'>
        <div className='topicRequest-container'>
          <button onClick={toogleCollapse} type='button'>New Topic Request</button>
          {collapse && (
            <div className='topicRequest-formBody'>
              <form ref={form} onSubmit={handleSubmit}>
                <div className='topicRequest-form-container'>
                  <label htmlFor='title'>
                    Title
                    <input name='title' id='title' type='text' />
                  </label>
                  <label htmlFor='description'>
                    Description
                    <textarea name='description' id='description' type='text' />
                  </label>
                  <input className='submit-button' onClick={handleSubmit} type='submit' value='Send Request' />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.user.topics,
  };
};

const mapDispatchToProps = {
  addTopic,
  deleteTopic,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekTopics);
