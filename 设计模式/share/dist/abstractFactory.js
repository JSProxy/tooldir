var IntelCpu = (function () {
    function IntelCpu() {
    }
    IntelCpu.prototype.info = function () {
        console.log('这是 intel 的 cpu');
    };
    return IntelCpu;
}());
var AmdCpu = (function () {
    function AmdCpu() {
    }
    AmdCpu.prototype.info = function () {
        console.log('这是 amd 的 cpu');
    };
    return AmdCpu;
}());
var HpCpu = (function () {
    function HpCpu() {
    }
    HpCpu.prototype.info = function () {
        console.log('这是 hP 的 cpu');
    };
    return HpCpu;
}());
var IntelBoard = (function () {
    function IntelBoard() {
    }
    IntelBoard.prototype.info = function () {
        console.log('这是 intel 的主板');
    };
    return IntelBoard;
}());
var AmdBoard = (function () {
    function AmdBoard() {
    }
    AmdBoard.prototype.info = function () {
        console.log('这是 amd 的主板');
    };
    return AmdBoard;
}());
var HpBoard = (function () {
    function HpBoard() {
    }
    HpBoard.prototype.info = function () {
        console.log('这是 HP 的主板');
    };
    return HpBoard;
}());
var IntelFactory = (function () {
    function IntelFactory() {
    }
    IntelFactory.prototype.getCpu = function () {
        return new IntelCpu();
    };
    IntelFactory.prototype.getBoard = function () {
        return new IntelBoard();
    };
    return IntelFactory;
}());
var AmdFactory = (function () {
    function AmdFactory() {
    }
    AmdFactory.prototype.getCpu = function () {
        return new AmdCpu();
    };
    AmdFactory.prototype.getBoard = function () {
        return new AmdBoard();
    };
    return AmdFactory;
}());
var HpFactory = (function () {
    function HpFactory() {
    }
    HpFactory.prototype.getCpu = function () {
        return new HpCpu();
    };
    HpFactory.prototype.getBoard = function () {
        return new HpBoard();
    };
    return HpFactory;
}());
var intel = new IntelFactory();
intel.getCpu().info();
intel.getBoard().info();
var amd = new AmdFactory();
amd.getCpu().info();
amd.getBoard().info();
var hp = new HpFactory();
hp.getCpu().info();
hp.getBoard().info();
//# sourceMappingURL=abstractFactory.js.map