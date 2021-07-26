import * as React from "react";
import Markdown from "markdown-to-jsx";

const Content: React.FunctionComponent<{}> = ({ children }) => (
    <Markdown
        options={{
            overrides: {
                h1: {
                    component: ({ children, ...rest }) => (
                        <div className="intro">
                            <h1 {...rest} data-aos="fade-down">
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
                        <img data-aos="fade-down" src={src ? require(`app/assets/${src}`): undefined} className="img-fluid"/>
                    )
                },
                p: {
                    component: props => <p data-aos="fade-down" {...props}/>
                },
                li: {
                    component: props => <li data-aos="fade-down" {...props}/>
                },
                table: {
                    component: props => <table {...props}/>,
                    props: {
                        className: "table r-table"
                    }
                },
                th: {
                    component: props => <th {...props}/>,
                    props: {
                        className: "r-table-header"
                    }
                },
                td: {
                    component: props => <td {...props}/>,
                    props: {
                        className: "r-table-data"
                    }
                }
            }
        }}
    >
        {children}
    </Markdown>
);

export default Content;