const express = require("express");

function block_1_basicServer() {
  return new Promise((res) => {
    const app = express();
    app.use(express.json());

    // console.log(app);

    app.get("/menu", (req, res) => {
      res.json({
        items: ["a", "b"],
      });
    });

    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        item: id,
        price: 149,
      });
    });

    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "order created",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      console.log(`Server is running on ${port}`);

      try {
        console.log("Started");
        const menuRes = await fetch(`${base}/menu`);
        const menuData = await menuRes.json();
        console.log("GET/menu", JSON.stringify(menuData));
        // console.log(menuRes.json())

        console.log("+++++++++++++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
        const searchData = await searchRes.json();
        console.log("GET /search", JSON.stringify(searchData));
        console.log("+++++++++++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("GET /menu", JSON.stringify(menuItemData));
        console.log("+++++++++++++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              dish: "birayni",
              quantity: 2,
            }),
          },
        });

        const orderResData = await orderRes.json();
        console.log("POST /order", JSON.stringify(orderResData));
        console.log("+++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(error);
      }
      server.close(() => {
        console.log("Block 1 completed");
        res();
      });
    });
  });
}

function block_2_response() {
  return new Promise((res) => {
    const app = express();

    app.get("/text", (req, res) => {
      res.send("Hello this is simple text");
    });

    app.get("/json", (req, res) => {
      res.json({
        framework: "express",
        version: "6.1.0",
      });
    });

    app.get("/not-found", (req, res) => {
      res.status(404).json({
        error: "Page not found",
      });
    });

    app.get("/health", (req, res) => {
      res.sendStatus(200);
    });

    app.get("/old-menu", (req, res) => {
      // add entry to DB
      res.redirect(301, "/new-menu");
    });

    app.get("/xml", (req, res) => {
      res.type("application/xml").send("<dish><name>Biryani</name></dish>");
    });

    app.get("/custom-headers", (req, res) => {
      res.set("X-powered-By", "Chaicode");
      res.set("X-Request-Id", "12345");
      res.json({
        message: "Custom Header set",
      });
    });

    app.get("/no-content", (req, res) => {
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      try {
        const textRes = await fetch(`${base}/text`);
        const textResData = await textRes.text();
        console.log(textResData);

        console.log("+++++++++++++++++++++++++++++++++");

        const jsonRes = await fetch(`${base}/json`);
        const jsonResData = await jsonRes.json();
        console.log(jsonResData);

        console.log("+++++++++++++++++++++++++++++++++");

        const notFoundRes = await fetch(`${base}/not-found`);
        // const notFoundResData = await notFoundRes.json();
        console.log(notFoundRes.status);

        console.log("+++++++++++++++++++++++++++++++++");

        const healthRes = await fetch(`${base}/health`);
        console.log(healthRes.status);

        console.log("+++++++++++++++++++++++++++++++++");

        const oldMenuRes = await fetch(`${base}/old-menu`);
        console.log(oldMenuRes.status);

        console.log("+++++++++++++++++++++++++++++++++");

        const xmlRes = await fetch(`${base}/xml`);
        const xmlText = await xmlRes.text();
        console.log(xmlText);

        console.log("+++++++++++++++++++++++++++++++++");
        const customeHeadersRes = await fetch(`${base}/custom-headers`);
        const customeHeadersResData = await customeHeadersRes.json();
        console.log(customeHeadersRes.headers, customeHeadersResData);

        console.log("+++++++++++++++++++++++++++++++++");
        const noContentRes = await fetch(`${base}/no-content`);
        console.log(noContentRes.status);

        console.log("+++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(error);
      }
      server.close(() => {
        console.log("Block 2 completed");
        res();
      });
    });
  });
}

async function main() {
  // await block_1_basicServer();
  await block_2_response();
  process.exit(0);
}

main();
