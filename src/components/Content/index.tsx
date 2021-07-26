import * as React from "react";
import Markdown from "markdown-to-jsx";

const Content: React.FunctionComponent<{}> = ({ children }) => (
    <Markdown
        options={{
            overrides: {
                h1: {
                    component: props => <h1 data-aos="fade-down" {...props}/>
                },
                h2: {
                    component: props => <h2 data-aos="fade-down" {...props}/>
                },
                h3: {
                    component: props => <h3 data-aos="fade-down" {...props}/>
                },
                h4: {
                    component: props => <h4 data-aos="fade-down" {...props}/>
                },
                h5: {
                    component: props => <h5 data-aos="fade-down" {...props}/>
                },
                h6: {
                    component: props => <h6 data-aos="fade-down" {...props}/>
                },
                img: {
                    component: ({src}: React.ImgHTMLAttributes<HTMLImageElement>) => (
                        <img data-aos="fade-down" src={src ? require(`app/assets/${src}`): undefined} className="img-fluid"/>
                    )
                },
                p: {
                    component: props => <p data-aos="fade-down" {...props}/>
                },
                ul: {
                    component: props => <ul data-aos="fade-down" {...props}/>
                },
                table: {
                    component: props => <table data-aos="fade-down" {...props}/>,
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