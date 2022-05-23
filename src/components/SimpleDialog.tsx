import { Dialog, DialogContent, DialogTitle } from '@mui/material';

interface Props {
  open: boolean;
  title: any;
  content: any;
}

export function SimpleDialog({ open, title, content }: Props) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}
