import dynamic from "next/dynamic";
import * as React from "react";
import { Wrapper } from "./style";
interface IProps {
  icon?: string;
  fill: string;
  width: string;
  height: string;
}
const IconComponent: React.FC<IProps> = ({ icon, fill, width, height }) => {
  const Icon: React.ComponentType<{
    fill: string;
    width: string;
    height: string;
    classname?: string;
  }> = dynamic(() =>
    import(`../../public/icons/${icon ?? ""}`).then((mod) => {
      return mod.default;
    })
  );
  return (
    <Wrapper>
      <Icon fill={fill} width={width} height={height} />
    </Wrapper>
  );
};
export default IconComponent;
