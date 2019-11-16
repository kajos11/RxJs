import {Observable} from "rxjs/Observable";
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
});
var observer = observable.subscribe(
    (x:any)=> addItem(x),
    (error:any)=> addItem(error),
    ()=> addItem('Completed')
);

var observer2 = observable.subscribe(
    (x:any)=> addItem(x)
);
observer.add(observer2)

setTimeout(()=>{
    observer.unsubscribe();
}, 9002);

function addItem(val:any){
    var node = document.createElement("li")
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}