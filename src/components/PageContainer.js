import { Container, styled } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  paddingInline: '2.5rem',
  paddingBlock: '1rem',
  backgroundColor: theme.palette.background.paper,
}));

const PageContainer = (props) => {
  return (
    <RootStyle>
      <Container maxWidth='md' disableGutters>
        {props.children}
      </Container>
    </RootStyle>
  );
};

export default PageContainer;
