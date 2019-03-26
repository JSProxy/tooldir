class Single {
    static instance: Single = null
    private constructor(){}

    static getIntance(): Single {
        if(this.instance === null){
            return this.instance = new Single()
        }
        return this.instance;
    }
}

