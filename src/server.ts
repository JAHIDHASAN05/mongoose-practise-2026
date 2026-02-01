import app from "./app";
import config from "./config";

import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://beckend_level_2_2026:AEtRrsTiWYPWJcmv@cluster0.qm82exp.mongodb.net/level2?appName=Cluster0",
    );

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
