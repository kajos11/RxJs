import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share'
import {fromEvent} from 'rxjs/Observable/fromEvent';


var observable = fromEvent(document,'mousemove')

setTimeout(()=>{
    var subscription = observable.subscribe((x:any)=>addItem(x))
},2000);

function addItem(val:any){
    var node = document.createElement("li")
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
/*
console.log(Observable)
var observable = Observable.create((observer:any)=>{
    try{
        observer.next('hey guys')
        observer.next('how are you')
        setInterval(()=>{
            observer.next('i am good')
        },2000)
    }
    catch(err){
        observer.error(err);
    }
}).share();
var observer = observable.subscribe(
    (x:any)=> addItem(x),
    (error:any)=> addItem(error),
    ()=> addItem('Completed')
);



setTimeout(()=>{
    var observer2 = observable.subscribe(
        (x:any)=> addItem('Subsciber 2: '+x)
    )
}, 1000);
*/
