import {observable, action } from 'mobx'

class storemobx{

@observable numOne:0
@observable numTwo:0
@observable sum:0
//observables 

@action check()
{
  this.sum= this.numOne+ this.numTwo;

   console.log("sum from store",this.sum);
}
//action to store sum of two numbers 

}
export default new storemobx()