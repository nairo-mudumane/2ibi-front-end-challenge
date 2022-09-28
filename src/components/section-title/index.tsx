import { ISectionTitleProps } from "./types";

export function SectionTitle(props: ISectionTitleProps) {
  if (props.size === "small") {
    return (
      <div className={props.my ? `my-${props.my}` : "my-4"}>
        <div className="flex items-center justify-start text-sm md:text-md">
          {props.icon && <div className="text-blue1">{props.icon}</div>}
          <div className="mx-3">
            <h2 className="text-gray1 uppercase font-bold">{props.text}</h2>
          </div>
          <div className="h-[4px] rounded-md flex-1 bg-blue1" />
        </div>
      </div>
    );
  }

  if (props.size === "medium") {
    return (
      <div className={props.my ? `my-${props.my}` : "my-4"}>
        <div className="flex items-center justify-start text-md md:text-xl">
          {props.icon && <div className="text-blue1">{props.icon}</div>}
          <div className="mx-3">
            <h2 className="text-gray1 uppercase font-bold">{props.text}</h2>
          </div>
          <div className="h-[4px] rounded-md flex-1 bg-blue1" />
        </div>
      </div>
    );
  }

  return (
    <div className={props.my ? `my-${props.my}` : "my-4"}>
      <div className="flex items-center justify-start text-xl md:text-2xl">
        {props.icon && <div className="text-blue1">{props.icon}</div>}
        <div className="mx-3">
          <h2 className="text-gray1 uppercase font-bold">{props.text}</h2>
        </div>
        <div className="h-[4px] rounded-md flex-1 bg-blue1" />
      </div>
    </div>
  );
}
