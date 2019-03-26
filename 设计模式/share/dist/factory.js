var IntelComputer = (function () {
    function IntelComputer() {
    }
    IntelComputer.prototype.opend = function () {
        console.log('这是 intel 的电脑');
    };
    return IntelComputer;
}());
var AmdComputer = (function () {
    function AmdComputer() {
    }
    AmdComputer.prototype.opend = function () {
        console.log('这是 amd 的电脑');
    };
    return AmdComputer;
}());
var ComputerFactory = (function () {
    function ComputerFactory() {
    }
    ComputerFactory.prototype.produce = function (type) {
        if (type === 'intel') {
            return new IntelComputer();
        }
        else if (type === 'amd') {
            return new AmdComputer();
        }
        else {
            console.log('请填写正确的品牌');
        }
    };
    return ComputerFactory;
}());
var cf = new ComputerFactory();
cf.produce('intel').opend();
var ComputerFactoryMulty = (function () {
    function ComputerFactoryMulty() {
    }
    ComputerFactoryMulty.prototype.produceIntel = function () {
        return new IntelComputer();
    };
    ComputerFactoryMulty.prototype.produceAmd = function () {
        return new AmdComputer();
    };
    return ComputerFactoryMulty;
}());
var cfm = new ComputerFactoryMulty();
cfm.produceAmd().opend();
var ComputerFactoryStatic = (function () {
    function ComputerFactoryStatic() {
    }
    ComputerFactoryStatic.produceIntel = function () {
        return new IntelComputer();
    };
    ComputerFactoryStatic.produceAmd = function () {
        return new AmdComputer();
    };
    return ComputerFactoryStatic;
}());
ComputerFactoryStatic.produceAmd().opend();
//# sourceMappingURL=factory.js.map