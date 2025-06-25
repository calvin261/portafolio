import { RoughNotation } from "react-rough-notation";
import { ReactNode } from "react";

interface RainbowHighlightProps {
  color: string;
  children: ReactNode;
}

export const RainbowHighlight = ({ color, children }: RainbowHighlightProps) => {
  const animationDuration = Math.floor(30 * (children?.toString().length || 0));

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}; 