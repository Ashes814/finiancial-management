import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";
/* CONFIGURATIONS */

// 调用 dotenv 模块的 config() 方法，加载在 .env 文件中定义的环境变量。
dotenv.config();

// 创建了一个 Express 应用实例，将其赋值给 app 变量。
const app = express();

// 使用 Express 内置的 json() 中间件，将应用的默认解析器替换为解析 JSON 数据的解析器。这样，当应用收到请求时，会自动将请求体解析为 JSON 格式的对象。
app.use(express.json());

// 使用 helmet 中间件，为应用添加了一系列 HTTP 安全相关的标头，例如 X-XSS-Protection 和 Strict-Transport-Security。
app.use(helmet());

// 使用 helmet 的 crossOriginResourcePolicy() 方法，
// 设置 Cross-Origin-Resource-Policy 标头的值为 "cross-origin"。
// 这个标头指示浏览器如何处理跨域请求，可以帮助防止某些跨站攻击。
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// 使用 morgan 中间件，将应用的请求日志输出到控制台，日志格式为 "common"
app.use(morgan("common"));

/** 使用 body-parser 中间件，解析 POST 和 PUT 请求的请求体。
 * 第一行使用 json() 方法解析 JSON 格式的请求体，
 * 第二行使用 urlencoded() 方法解析 URL 编码格式的请求体
 **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//使用 cors 中间件，允许跨域请求。这个中间件会自动为应用添加 Access-Control-Allow-Origin 和其他跨域相关的 HTTP 标头。
app.use(cors());

/* Routes */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port ${PORT}`));
    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));
