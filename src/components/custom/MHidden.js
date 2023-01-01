import { useMediaQuery } from '@mui/material';

export const MHidden = ({ type, children, value }) => {
  const hiddenUp = useMediaQuery((theme) => theme.breakpoints.up(value));
  const hiddenDown = useMediaQuery((theme) => theme.breakpoints.down(value));

  if (type === 'down') return hiddenDown ? null : children;
  if (type === 'up') return hiddenUp ? null : children;

  return null;
};
