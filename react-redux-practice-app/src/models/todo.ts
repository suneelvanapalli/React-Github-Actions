export class Todo {
    id?: string;
    name: string;

    constructor(todoName: string) {
        this.id = todoName;
        this.name = todoName;
    }
}