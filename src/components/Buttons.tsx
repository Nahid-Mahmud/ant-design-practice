"use client";
import { Button } from "antd";

export default function Buttons() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("clicked primary button");
        }}
        type="primary"
      >
        Primary Button
      </Button>
      <Button
        onClick={() => {
          console.log("clicked Link button");
        }}
        type="link"
      >
        Link Button
      </Button>
      <Button
        onClick={() => {
          console.log("clicked text button");
        }}
        type="text"
      >
        Text Button
      </Button>
      <Button
        onClick={() => {
          console.log("clicked default button");
        }}
        type="default"
      >
        Default Button
      </Button>
      <Button
        onClick={() => {
          console.log("clicked dashed button");
        }}
        type="dashed"
      >
        Dashed Button
      </Button>
    </>
  );
}
