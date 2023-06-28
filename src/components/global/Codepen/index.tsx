import React from "react";

function CodePen(props): JSX.Element {
  return (
    <div
      className="codepen"
      data-height={props.height}
      data-theme-id={props.theme}
      data-default-tab={props.defaultTab}
      data-user={props.user}
      data-slug-hash={props.slug}
      data-preview={props.preview ? "true" : "false"}
      data-pen-title={props.penTitle}
      no-prerender="true"
    ></div>
  );
}

export default CodePen;
