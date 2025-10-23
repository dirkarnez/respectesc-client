import * as React from "react";
import Base from "app/pages/Base";
import Content from "app/components/Content";
import { Translation } from 'react-i18next';

export default () => (
  // <Translation>
  //   {t => (
  //   //   <Base>
  //   //     <Content>
  //   //       { t("privacy") }
  //   //     </Content>
  //   //   </Base>
  //       <div>hi</div>
  //   )}
  // </Translation>
  <div>
    <button onClick={() => {
      const token = prompt("gh");
      console.log(token);

      fetch(`https://api.github.com/repos/dirkarnez/respectesc-client/contents/src/data/en-about.md`, 
            { 
              method: 'GET',
              headers: new Headers([
                  ["pragma", "no-cache"], 
                  ["Cache-Control", "no-cache"],
                  ["Accept", "application/vnd.github+json"],
                  ["Authorization", `Bearer ${token}`],
                  ["X-GitHub-Api-Version", "2022-11-28"]
              ]),
              cache: "no-cache" 
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(json => {
          alert(json);
        })
        .catch(error => {
            if (error.message === 'Failed to fetch') {
                alert('There may be a CORS issue or the server is unreachable.');
            } else {
                alert(`Fetch error: ${error}`);
            }
        });

    }}>Login</button>
  </div>
);