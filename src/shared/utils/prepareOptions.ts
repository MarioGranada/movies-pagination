/* eslint-disable @typescript-eslint/no-explicit-any */
const prepareOptions = (
  method: string,
  abortController: AbortController,
  body?: any
) => {
  const options = {
    method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    signal: abortController.signal,
    ...(body && { body: JSON.stringify(body) }),
  };

  return options;
};

export default prepareOptions;
