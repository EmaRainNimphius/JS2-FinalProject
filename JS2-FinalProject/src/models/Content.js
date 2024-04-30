export default class Content {

    // id is generated in firebase
    static type = 'Content';
    category = ''
    title = ''
    description= ''

    constructor( category, title, description) {
        this.type = 'Content';
        this.category = category;
        this.title = title;
        this.description = description;
    }
}

export { Content }