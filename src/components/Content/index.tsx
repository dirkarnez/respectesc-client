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
                },
                img: {
                    component: ({src}: React.ImgHTMLAttributes<HTMLImageElement>) => (
                        <img src={src ? require(`app/assets/${src}`): undefined} className="img-fluid"/>
                    )
                }
            }
        }}
    >
        {children}
    </Markdown>
);

export default Content;