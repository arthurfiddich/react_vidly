import Raven from "raven-js";

function init() {
  Raven.config("https://136bce168c9b485da418a9bca15c8966@sentry.io/1292704", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
