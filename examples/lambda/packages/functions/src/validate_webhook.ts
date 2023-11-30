import crypto from "crypto";
export const validateSignature = <T = any>(
  signature: string,
  secret: string,
  requestBody: T
): boolean => {
  const hmac = crypto.createHmac("sha1", secret);
  if (typeof requestBody === "string") {
    hmac.update(requestBody);
  } else {
    hmac.update(JSON.stringify(requestBody));
  }
  const isValid = hmac.digest("hex") === signature;
  return isValid;
};
