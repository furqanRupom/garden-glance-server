import express, { Application } from "express"
import cors from "cors"
import router from "./app/routes/route";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/',router)

app.get('/', (req,res) => {
   res.send('GardenGlance is running')
})


export default app;