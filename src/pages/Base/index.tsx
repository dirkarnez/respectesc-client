import * as React from "react";

const Base: React.FunctionComponent<{}> = ({ children }) => {
  window.scrollTo(0, 0);
  return (
    <div className="article-clean">
      <div className="container">
        <div className="row">
            <div className="text">
              { children }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Base;