import { Button, Modal } from "@mui/material";
import { IModalFlagProps } from "./types";

export function ModalFlag(props: IModalFlagProps) {
  if (props.open) {
    return (
      <Modal disableAutoFocus open={props.open} onClose={props.onClose}>
        <div className="w-[90%] mx-auto mt-[4rem] !pb-4 py-2 px-4 bg-white1 rounded-sm md:w-[460px] lg:w-[50%] xl:w-[54%] xl:max-w-[768px]">
          <h2 className="text-lg text-gray1 font-semibold">{props.title}</h2>

          <div className="mt-2 s-full">
            <img
              src={props.flag}
              alt={props.title}
              className="w-full h-full md:max-h-[300px]"
            />
          </div>

          <div className="mt-4 ml-auto w-max">
            <Button
              variant="outlined"
              onClick={props.onClose}
              className="!text-sm"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return null;
}
