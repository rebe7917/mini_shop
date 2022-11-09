export function insertOrder(payload){
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4a3VpY3hodWlweHNoZ2xiZHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MzksImV4cCI6MTk4MjE3NDgzOX0.zc504Vi5nDm21Fs7OROwYVBB0_WRy6NTqKIOMvhl3DE";
    const url = "https://fxkuicxhuipxshglbdzb.supabase.co";
    fetch(url + "/rest/v1/simpleshop", {
      method: "POST",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4a3VpY3hodWlweHNoZ2xiZHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MzksImV4cCI6MTk4MjE3NDgzOX0.zc504Vi5nDm21Fs7OROwYVBB0_WRy6NTqKIOMvhl3DE",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4a3VpY3hodWlweHNoZ2xiZHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MzksImV4cCI6MTk4MjE3NDgzOX0.zc504Vi5nDm21Fs7OROwYVBB0_WRy6NTqKIOMvhl3DE",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });
    .then()
    .then()
}

