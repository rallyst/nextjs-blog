const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "rallyshops",
        mongodb_password: "rallyshops123",
        mongodb_clastername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "rallyshops",
      mongodb_password: "rallyshops123",
      mongodb_clastername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
