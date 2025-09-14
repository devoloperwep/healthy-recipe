useEffect(() => {
  const getData = async () => {
    try {
      setIsPending(true);
      const req = await fetch(url);

      if (!req.ok) throw new Error(req.statusText);

      const contentType = req.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await req.json();
      } else {
        data = await req.text(); // fallback
      }

      setData(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };
  getData();
}, [url]);
