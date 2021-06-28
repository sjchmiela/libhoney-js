import ResourceClient from "../resource_client";
import { QueryResult } from ".";

const ENDPOINT = "/1/query_results";

export default class Client extends ResourceClient {
  constructor({ apiHost, apiKey, disabled, userAgentAddition }) {
    super(
      apiHost,
      ENDPOINT,
      QueryResult,
      apiKey,
      disabled,
      false /* not dataset scoped */,
      userAgentAddition
    );
  }

  // XXX(toshok) the only method available is .get()
}
