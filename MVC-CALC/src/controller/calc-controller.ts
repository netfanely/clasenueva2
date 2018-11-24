import {CalcModel} from "../model";

export class CalcController{

    Model : CalcModel | undefined;

    Equals(a:number, b:number, op:string)
    {
        if (!this.Model) {
            return 0;
        }

        switch (op)
        {
            case "+":
               return this.Model.sum(a,b);
            
            case "-":
                return this.Model.sub(a,b);
            
            case "/":
                return this.Model.div(a,b);
            
            case "*":
                return this.Model.mult(a,b);

            default:
                return 0;
            
        }
    }



}
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