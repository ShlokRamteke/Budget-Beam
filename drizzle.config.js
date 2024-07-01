/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./Utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://expense-tracker_owner:qLO7V4EePzGU@ep-calm-fire-a1wrg9jf.ap-southeast-1.aws.neon.tech/expense-tracker?sslmode=require",
  },
};
