// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Home from "./Home";

// let container: any = null;

// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   describe("Homepage component", () => {
//     test("renders with or without a name", () => {
//         act(() => {
//             render(<Home />, container);
//         });
//         expect(container.textContent).toBe("Hey, stranger");
//     });
// });
