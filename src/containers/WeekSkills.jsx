import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setSkills } from '../actions';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekSkillsItem from '../components/WeekSkillsItem';

import '../assets/styles/WeekSkills.styl';

const WeekSkills = (props) => {
  const { skills } = props;
  const [englishLevels, setEnglishLevels] = useState(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const SkillsSeted = {
      skills: [
        {
          'id': 1,
          'title': 'listening',
          'level': [
            { 'A1': formData.get('1-listening') === 'A1' },
            { 'A2': formData.get('1-listening') === 'A2' },
            { 'B1': formData.get('1-listening') === 'B1' },
            { 'B2': formData.get('1-listening') === 'B2' },
            { 'C1': formData.get('1-listening') === 'C1' },
            { 'C2': formData.get('1-listening') === 'C2' },
          ],
        },
        {
          'id': 2,
          'title': 'reading',
          'level': [
            { 'A1': formData.get('2-reading') === 'A1' },
            { 'A2': formData.get('2-reading') === 'A2' },
            { 'B1': formData.get('2-reading') === 'B1' },
            { 'B2': formData.get('2-reading') === 'B2' },
            { 'C1': formData.get('2-reading') === 'C1' },
            { 'C2': formData.get('2-reading') === 'C2' },
          ],
        },
        {
          'id': 3,
          'title': 'writting',
          'level': [
            { 'A1': formData.get('3-writting') === 'A1' },
            { 'A2': formData.get('3-writting') === 'A2' },
            { 'B1': formData.get('3-writting') === 'B1' },
            { 'B2': formData.get('3-writting') === 'B2' },
            { 'C1': formData.get('3-writting') === 'C1' },
            { 'C2': formData.get('3-writting') === 'C2' },
          ],
        },
        {
          'id': 4,
          'title': 'speaking',
          'level': [
            { 'A1': formData.get('4-speaking') === 'A1' },
            { 'A2': formData.get('4-speaking') === 'A2' },
            { 'B1': formData.get('4-speaking') === 'B1' },
            { 'B2': formData.get('4-speaking') === 'B2' },
            { 'C1': formData.get('4-speaking') === 'C1' },
            { 'C2': formData.get('4-speaking') === 'C2' },
          ],
        },
      ],
    };
    props.setSkills(SkillsSeted);
  };
  return (
    <div className='ss-header-main-container'>
      <form ref={form} onSubmit={handleSubmit}>
        <SubSectionHeader SsName='Skills' isSubSecSkills />
        {skills.length > 0 && (
          skills.map(item => (
            <WeekSkillsItem key={item.id} englishLevels={englishLevels} {...item} />
          ))
        )}
        <button onClick={() => setEnglishLevels('asd')} className='setSkills-btn' type='submit'>Save Skills</button>
      </form>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.user.skills,
  };
};

const mapDispatchToProps = {
  setSkills,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekSkills);
