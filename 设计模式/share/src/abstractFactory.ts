//抽象工厂方法

interface ICpu {
    info(): void
}

class IntelCpu implements ICpu {
    public info(){
        console.log('这是 intel 的 cpu')
    }
}

class AmdCpu implements ICpu {
    public info(){
        console.log('这是 amd 的 cpu')
    }
}

class HpCpu implements ICpu {
    public info(){
        console.log('这是 hP 的 cpu')
    }
}

interface IBoard {
    info(): void
}

class IntelBoard implements IBoard {
    public info() {
        console.log('这是 intel 的主板')
    }
}

class AmdBoard implements IBoard {
    public info() {
        console.log('这是 amd 的主板')
    }
}

class HpBoard implements IBoard {
    public info() {
        console.log('这是 HP 的主板')
    }
}

interface IFactory {
    getCpu(): ICpu,
    getBoard(): IBoard
}

class IntelFactory implements IFactory {
    public getCpu(){
        return new IntelCpu()
    }

    public getBoard(){
        return new IntelBoard()
    }
}

class AmdFactory implements IFactory {
    public getCpu(){
        return new AmdCpu()
    }
    public getBoard() {
        return new AmdBoard()
    }
}

class HpFactory implements IFactory {
    public getCpu(){
        return new HpCpu()
    }
    public getBoard() {
        return new HpBoard()
    }
}



const intel = new IntelFactory()
intel.getCpu().info()
intel.getBoard().info()

const amd = new AmdFactory()

amd.getCpu().info()
amd.getBoard().info()

const hp = new HpFactory()

hp.getCpu().info()
hp.getBoard().info()




