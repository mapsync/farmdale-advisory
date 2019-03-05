import CMS from 'netlify-cms'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import React from 'react';
import {Helmet} from "react-helmet";
import { Route } from 'react-router-dom'

const style = {
  send: {
    border: '0',
    background: 'rgb(23, 162, 184)',
    color: 'white',
    'font-weight': '500',
    height: '36px',
    'line-height': '36px',
    padding: '0 40px 0 20px',
    width: '200px',
    cursor: 'pointer'
  }
}

const encode = function (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

var NotificationControl = class Control extends React.Component {
  state = {
    message: "Submit",
    disabled: false
  }

  handleClick(history, idString) {
    var id = parseInt(idString.split("-")[2]);
    var self = this;
    self.setState({
      message: "Sending...",
      disabled: true
    });
    var link = document.getElementById("link-field-" + (id - 1)).value;
    if (link.startsWith("https://farmdalewaterdistrict.geosync.cloud")) {
      var url = new URL(link);
      link = "https://ecstatic-bartik-a3750a.netlify.com" + url.pathname + url.search
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "notification",
        "account": "farmdalewaterdistrict",
        "title": document.getElementById("title-field-" + (id - 5)).value,
        "priority": document.getElementById("priority-field-" + (id - 4)).getAttribute("aria-checked"),
        "sound": document.getElementById("sound-field-" + (id - 3)).getAttribute("aria-checked"),
        "message": document.getElementById("message-field-" + (id - 2)).value,
        "link": link
      })
    })
      .then(function () {
        self.setState({
          message: "Success!"
        });
        setTimeout(function () {
          document.getElementById("title-field-" + (id - 5)).value = "";
          history.push('/collections/notification');
        }, 3000)
      })
      .catch(function (error) {
         alert(error);
         self.setState({
          message: "Submit",
          disabled: false
        });
      });
  }

  render() {
    const {
      forID
    } = this.props;
    return (
      <div>
        <Helmet>
            <style type="text/css">{`
              [role="button"]
              {
                  display: none;
              }
            `}</style>
          </Helmet>
        <Route render={({ history}) => (
          <button style={style.send} disabled={this.state.disabled} onClick={() => { this.handleClick(history, forID); }} type="button">
          { this.state.message }
          </button>
        )} />
      </div>
    );
  }
}

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerWidget('notification', NotificationControl)
