import {BehaviorSubject} from "rxjs/BehaviorSubject";


var subject = new BehaviorSubject("First")

subject.subscribe(
    (data)=> addItem('Observer 1 '+data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)

subject.next('the first thing has been sent')
subject.next('about to subscibe 2nd observer')

var observer2 = subject.subscribe(
    (data)=> addItem('Observer 2'+data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)

subject.next('The second thing has been sent')
subject.next('The third thing has been sent')

observer2.unsubscribe()
subject.next('The final thing has been sent')


function addItem(val:any){
    var node = document.createElement("li")
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}


/*
Subject
*/
/*
import {Subject} from "rxjs/Subject";


var subject = new Subject()

subject.subscribe(
    (data)=> addItem(data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)

subject.next('the first thing has been sent')

var observer2 = subject.subscribe(
    (data)=> addItem('Observer 2'+data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)

subject.next('The second thing has been sent')
subject.next('The third thing has been sent')

observer2.unsubscribe()
subject.next('The final thing has been sent')
*/


/*
Observer
*/

/*
var observable = fromEvent(document,'mousemove')

setTimeout(()=>{
    var subscription = observable.subscribe((x:any)=>addItem(x))
},2000);


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
