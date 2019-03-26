//简单工厂
interface IComputer {
    opend(): void
}

class IntelComputer implements IComputer {
    public opend(){
        console.log('这是 intel 的电脑')
    }
}
class AmdComputer implements IComputer {
    public opend(){
        console.log('这是 amd 的电脑')
    }
}


class ComputerFactory {
    public produce(type: String): IComputer {
        if(type === 'intel'){
            return new IntelComputer()
        }else if(type === 'amd'){
            return new AmdComputer()
        }else {
            console.log('请填写正确的品牌')
        }
    }
}


const cf = new ComputerFactory()

cf.produce('intel').opend()




// 多方法工厂
class ComputerFactoryMulty {
    public produceIntel(): IComputer {
        return new IntelComputer()
    }
    public produceAmd(): IComputer {
        return new AmdComputer()
    }
}

const cfm = new ComputerFactoryMulty()

cfm.produceAmd().opend();



//静态工厂
class ComputerFactoryStatic {
    public static produceIntel(): IComputer {
        return new IntelComputer()
    }
    public static produceAmd(): IComputer {
        return new AmdComputer()
    }
}

ComputerFactoryStatic.produceAmd().opend()



