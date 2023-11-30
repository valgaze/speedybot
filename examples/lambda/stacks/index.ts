import { API } from "./MyStack";
import { App } from "sst/constructs";

export default function (app: App) {
  // app.setDefaultFunctionProps({
  //   runtime: "nodejs18.x",
  // });
  app.stack(API);
}
