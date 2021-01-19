export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagemPath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagemPath;
    }
}