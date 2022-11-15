import { styled } from '@mui/material';
import React from 'react';
import SectionTitle from './sectionTitle';

const RecWorkRoot = styled('div')(({ theme }) => ({
  width: '200%',
  height: '100%',
  borderRadius: '50%',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
  top: '25%',
  left: '-50%',
  right: 0,
  position: 'relative',
  overflow: 'hidden',
}));

const RecentWork = () => {
  return (
    <RecWorkRoot>
      <SectionTitle
        title='Recent Work'
        subtitle='Lörem ipsum georening buköska vaben. Dögyns eurong. 
Povisovis josm, emedan semis. Härat rär par.'
      />
    </RecWorkRoot>
  );
};

export default RecentWork;
