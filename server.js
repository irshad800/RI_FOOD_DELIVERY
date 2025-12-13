import cluster from "node:cluster";
import http from "node:http";
import os from "node:os";
import process from "node:process";

const numCPUs = os.availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // restart worker (recommended)
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
