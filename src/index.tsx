import React from "react";
import ReactDOM from "react-dom";

interface FooProps {
  foo: string;
}

const Foo: React.FC<FooProps> = ({ foo }) => {
  return <div>foo</div>;
};

ReactDOM.render(<Foo foo={"123"} />, document.getElementById("foo"));
