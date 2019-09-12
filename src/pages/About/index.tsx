import * as React from "react";
import Markdown from 'markdown-to-jsx';
import about from "app/data/about.md";

export default () => (
  <div className="article-clean">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div className="text">
            <Markdown 
              children={about}
              options={{
                overrides: {
                  h1: {
                    component: ({children, ...rest}) => (
                      <div className="intro">
                        <h1 {...rest}>
                          <strong>{children}</strong>
                        </h1>
                      </div>
                    ),
                    props: {
                      class: "text-center"
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
