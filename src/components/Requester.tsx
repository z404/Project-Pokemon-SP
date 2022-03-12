// requester component takes the request obj and makes a request to the server
// shows loading while it is not loaded.
// if the request is successful, it will render the component that is passed in
// if the request fails, it will render the error component

import { ReactNode, useEffect, useState } from "react";

function Requester<ResponseType>({
  request,
  successComponent,
}: {
  request: () => Promise<ResponseType>;
  successComponent: (response: ResponseType) => ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState<ResponseType | null>(null);
  useEffect(() => {
    request()
      .then((res) => {
        setLoading(false);
        setResponse(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [request]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!!response) {
    return <>{successComponent(response)}</>;
  }
  return <div>Error: {JSON.stringify(error)}</div>;
}

export default Requester;
