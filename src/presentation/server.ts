import express, { Router } from 'express';
import path from 'path';


interface Opions {
    port: number,
    routes: Router;
    public_path?: string
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;
    

    constructor(options: Opions){
    const {port, public_path = 'public'} = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = options.routes;
    }

    async start(){

        //*middlewares

        //*public folder
        this.app.use(express.static(this.publicPath));

        //* Routes
        this.app.use(this.routes)
        //*SPA
        this.app.get('*', (req, resp)=> {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            resp.sendFile(indexPath);
            return; 
        })

        this.app.listen(this.port, ()=> {
            console.log(`Server running on the port ${3000}`);
        })

    }

}