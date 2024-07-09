export class OAuthHelper {
  constructor(
    private clientId: string,
    private clientSecret: string,
    private tokenEndpoint: string
  ) {
    if (!this.tokenEndpoint) {
      throw new Error(
        "Missing tokenEndpoint, ex https://yourDomain.com/oauth2/default/v1/token"
      );
    }
  }

  private encodeClientCredentials(
    clientId: string,
    clientSecret: string
  ): string {
    const payload = `${clientId}:${clientSecret}`;
    return typeof Buffer !== "undefined"
      ? Buffer.from(payload).toString("base64")
      : btoa(payload);
  }

  public async getKey(): Promise<string> {
    const headers = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${this.encodeClientCredentials(
        this.clientId,
        this.clientSecret
      )}`,
    };

    const body = new URLSearchParams({
      grant_type: "client_credentials",
    });

    try {
      const response = await fetch(this.tokenEndpoint, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error(
          `Error fetching access token: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error obtaining access token:", error);
      throw error;
    }
  }
}
