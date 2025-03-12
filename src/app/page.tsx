"use client";
import { Button } from "antd";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button
          onClick={() => {
            console.log("clicked primary button");
          }}
          type="primary"
        >
          Primary Button
        </Button>
        {/* link" | "text" | "primary" | "default" | "dashed */}
        <Button
          onClick={() => {
            console.log("clicked Link button");
          }}
          type="link"
        >
          link Button
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
      </main>
    </div>
  );
}
