"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcController = /** @class */ (function () {
    function CalcController() {
    }
    CalcController.prototype.Equals = function (a, b, op) {
        if (!this.Model) {
            return 0;
        }
        switch (op) {
            case "+":
                return this.Model.sum(a, b);
            case "-":
                return this.Model.sub(a, b);
            case "/":
                return this.Model.div(a, b);
            case "*":
                return this.Model.mult(a, b);
            default:
                return 0;
        }
    };
    return CalcController;
}());
exports.CalcController = CalcController;
/*
import {calc}
import class calc{

}
export class CalcController{
    private _input1Value = 0;
    private _input2Value = 0;
    private _operator = Operator.Nome;

    add(x: number, y:number){
        return x + y;
    }
    sub(x: number, y:number){
        return x + y;
    }
    constructor{
        private readonly_calc:calc;
    }
    onInputChanged(value: number) {
        this._inputValue = value;
    }
    onViewClickOnDivide(){
        this._operator = Operator.
    }
    onViewClickOnAdd(){
        this._operator.Add;
    }
    onViewOnEquals(){

    }
}
private calculate(x:number)


export class calc {
    add(x:number)
    initialize()
    
}

*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2FsYy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtJQWdDQSxDQUFDO0lBNUJHLCtCQUFNLEdBQU4sVUFBTyxDQUFRLEVBQUUsQ0FBUSxFQUFFLEVBQVM7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNaO1FBRUQsUUFBUSxFQUFFLEVBQ1Y7WUFDSSxLQUFLLEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9CLEtBQUssR0FBRztnQkFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUUvQixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEM7Z0JBQ0ksT0FBTyxDQUFDLENBQUM7U0FFaEI7SUFDTCxDQUFDO0lBSUwscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLHdDQUFjO0FBaUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF5Q0UifQ==