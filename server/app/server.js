import { app } from "./api/src/App";
app.listen(3000,() =>{
    global.logger.info(`Server started at Port:${global.port}`);

});