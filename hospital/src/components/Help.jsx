import React from "react";
import Form from "./Form";

export default function Help() {
  return (
    <section>
      <div className="container mx-auto border border-green-500">
        Help
        <div className="flex">
          <div className="border border-blue-500 m-2 w-1/2">content</div>
          <div className="border border-blue-500 m-2 w-1/2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
