import { Router } from "express";
import { TodosControl } from './controller';



export class TodosRoutes {

    static get routes(): Router{
        const router = Router();
        const todosControl = new TodosControl();

            router.use('/api/todos', todosControl.getTodos);
            // router.get('/:id', todosControl.getTodoById);

        return router;
    } 

}