import { error } from 'console';
import { Request, Response } from 'express';


const todos = [
    {id: 1, text: 'Buy milk', createdAt: new Date()},
    {id: 2, text: 'Buy bread', createdAt: null},
    {id: 3, text: 'Buy butter', createdAt: new Date()},
    ]

export class TodosControl {

    //*DI
    constructor(){}

   public getTodos = (req: Request, resp: Response) => {
        resp.json(todos);
    }

    public getTodoById = (req: Request, resp: Response) => {
        const id = + req.params.id;
        if(isNaN(id)) return resp.status(400).json({error: 'Id es not a number'});
        resp.json(id);

        const todo = todos.find(todo => todo.id === id);

        (todo)
        ? resp.json({todo}) 
        : resp.status(404).json({error: `todo whit id ${id} not found`}); 
    }

}