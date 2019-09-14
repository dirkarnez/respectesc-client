import * as React from "react";
import Markdown from "markdown-to-jsx";

const Content: React.FunctionComponent<{}> = ({ children }) => (
    <Markdown
        options={{
            overrides: {
                h1: {
                    component: ({ children, ...rest }) => (
                        <div className="intro">
                            <h1 {...rest}>
                                <strong>{children}</strong>
                            </h1>
                        </div>
                    ),
                    props: {
                        className: "text-center"
                    }
                }
            }
        }}
    >
        {children}
    </Markdown>
);

export default Content;