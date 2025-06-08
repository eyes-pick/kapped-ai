// scripts/openai-mock-test.js
import http from "http";

const mockResponse = {
  id: "chatcmpl-mock",
  object: "chat.completion",
  created: Date.now(),
  model: "gpt-3.5-turbo",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Hello! This is a mock OpenAI response.",
      },
      finish_reason: "stop",
    },
  ],
  usage: { prompt_tokens: 5, completion_tokens: 7, total_tokens: 12 },
};

const server = http.createServer((req, res) => {
  if (req.url === "/v1/chat/completions" && req.method === "POST") {
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(mockResponse));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8081, () => {
  console.log(
    "Mock OpenAI endpoint running at http://localhost:8081/v1/chat/completions",
  );
  // Simple test request
  const postData = JSON.stringify({
    messages: [{ role: "user", content: "Hello?" }],
  });
  const options = {
    hostname: "localhost",
    port: 8081,
    path: "/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": postData.length,
    },
  };
  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("Mock response:", data);
      server.close();
    });
  });
  req.on("error", (err) => console.error("Request error:", err));
  req.write(postData);
  req.end();
});
