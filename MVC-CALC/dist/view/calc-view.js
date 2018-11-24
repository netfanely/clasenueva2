"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcView = /** @class */ (function () {
    function CalcView() {
        this._input1 = 0;
        this._input2 = 0;
    }
    CalcView.prototype.Equals = function (a, b, op) {
        if (!this.Controller) { //indefinido
            return 0;
        }
        return this.Controller.Equals(a, b, op);
    };
    return CalcView;
}());
exports.CalcView = CalcView;
/*
export class CalView;
controller: calcController | undefinde;
initialize
showInput(value:number){
    console.log('Input = $(value)`);

}
simulateSetInput

simulate
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvY2FsYy12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtRQUNZLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsWUFBTyxHQUFVLENBQUMsQ0FBQztJQVkvQixDQUFDO0lBUEcseUJBQU0sR0FBTixVQUFPLENBQVEsRUFBRSxDQUFRLEVBQUUsRUFBUztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFlBQVk7WUFDaEMsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksNEJBQVE7QUFnQnJCOzs7Ozs7Ozs7OztFQVdFIn0=