import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  fontSize : 25,
  fontWeight : 'bold',
  fontcolor : theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary,
  padding: theme.spacing(1),
}));

export default function Title() {
  return <Div>{"Gestion des candidatures."}</Div>;
}