export interface IModalProps {
  open: boolean;
  onClose: () => any;
}

export interface IModalFlagProps extends IModalProps {
  title: string;
  flag: string;
}
