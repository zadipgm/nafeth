import dynamic from "next/dynamic";
import * as React from "react";
import { Wrapper } from "./style";
interface IProps {
  icon?: string | false;
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  classname?: string;
}
const IconComponent: React.FC<IProps> = ({
  icon,
  fill,
  width,
  height,
  stroke,
  classname,
}) => {
  const Icon: React.ComponentType<{
    fill: string;
    width: string;
    height: string;
    stroke?: string;
  }> = dynamic(() =>
    import(`../../public/icons/${icon ?? ""}`).then((mod) => {
      return mod.default;
    })
  );
  return (
    <Wrapper className={classname}>
      <Icon
        fill={fill as string}
        width={width as string}
        height={height as string}
        stroke={stroke}
      />
    </Wrapper>
  );
};
export default IconComponent;
