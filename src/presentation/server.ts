import express from 'express';
import path from 'path';


interface Opions {
    port: number,
    public_path?: string
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    

    constructor(options: Opions){
    const {port, public_path = 'public'} = options;
        this.port = port;
        this.publicPath = public_path;
    }

    async start(){

        //middlewares


        //public folder
        this.app.use(express.static(this.publicPath));

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