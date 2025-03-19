import { Router } from "express";
import { TodosControl} from './todos/controller';



export class AppRoutes {

    static get routes(): Router{
        const router = Router();
        const todosControl = new TodosControl();

            router.get('/api.todos', todosControl.getTodos);

        return router;
    } 

}