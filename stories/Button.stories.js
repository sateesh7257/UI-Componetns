import React from "react";
import Button from "../packages/button/src/";

export default {
  component: Button,
  title: "Component/Button"
};

export const Danger = () => {
  return (
        <Button
          onClick={() => {
            console.log('hi');
          }}
        >Hi Test</Button>
  );
};