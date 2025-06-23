import app from "./config/app";
import { env } from "./config/env";
import fooRoutes from "./routes/foo.routes";

app.use(fooRoutes);

app.listen(env.PORT, () => {
	console.log(`🚀 Server is running on http://localhost:${env.PORT}`);
});
