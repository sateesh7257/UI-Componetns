import React from "react";
import Button from "../packages/button/src/";

export default {
  component: Button,
  title: "Component/packages"
};

export const ButtonDanger = () => {
  return (
        <Button
          onClick={() => {
            console.log('hi');
          }}
        >Hi Test</Button>
  );
};