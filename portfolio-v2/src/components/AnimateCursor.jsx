import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimateCursor() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}
