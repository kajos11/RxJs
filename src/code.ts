import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {interval}  from "rxjs/Observable/interval"
import  "rxjs/add/operator/skipUntil";

var observable1 = Observable.create((data:any)=>{
    var i = 1;
    setInterval(()=>{
        data.next(i++)
    },1000)
})

var subject = new Subject;

setTimeout(()=>{
    subject.next('hey')
},5000)

var newObs = observable1.skipUntil(subject)

newObs.subscribe((x:any)=>{
    addItem(x)
})



function addItem(val:any){
    var node = document.createElement("li")
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}


/*
//from observable

import {from}  from "rxjs/Observable/from"
import  "rxjs/add/operator/pluck";
import { fromEventPattern } from "rxjs";


from([
    {first:'kar',last:'jos',age:34},
    {first:'bab',last:'yaga',age:120},
    {first:'nit',last:'man',age:25},

])
.pluck('first')
.subscribe((d:any)=>addItem(d))

//map operator
import  "rxjs/add/operator/map";


Observable.create((observer:any)=>{
    observer.next("hey guys")
})
.map((val:any)=>[val.toUpperCase()])
.subscribe((c:any)=>addItem(c));


//merge operator
import 'rxjs/observable/merge';
import { merge } from "rxjs/observable/merge";

var observable = new Observable((observer:any)=>{
    observer.next("hey guys!")
})

var observable2 = new Observable((observer:any)=>{
    observer.next("HOw is it going?")
})

var newObs = merge(observable,observable2)
newObs.subscribe((x:any)=>{
    addItem(x);
})

//Async Subject

import {AsyncSubject} from "rxjs/AsyncSubject";


var subject = new AsyncSubject()

subject.subscribe(
    (data)=> addItem('Observer 1: '+data),
    ()=> addItem('observer 1 completed')
)
var i = 1;
var int = setInterval(()=>subject.next(i++),100);

setTimeout(()=>{
    var observer2 = subject.subscribe(
        data=> addItem('Observer 2: '+data)
    )
    subject.complete()
},500)
*/

/*
//Replay Subject with second argument of window time
import {ReplaySubject} from "rxjs/ReplaySubject";


var subject = new ReplaySubject(30,500)

subject.subscribe(
    (data)=> addItem('Observer 1 '+data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)
var i = 1;
var int = setInterval(()=>subject.next(i++),100);

setTimeout(()=>{
    var observer2 = subject.subscribe(
        data=> addItem('Observer 2'+data)
    )
},500)
 


*/

/*
//Replay Subject: returns previous x number of emitted events before subscription
var subject = new ReplaySubject(2)

subject.subscribe(
    (data)=> addItem('Observer 1 '+data),
    (err)=> addItem(err),
    ()=> addItem('observer 1 completed')
)

subject.next('the first thing has been sent')
subject.next('another thing has been sent')
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
*/

/*
Behavious Subject: Emits last emitted value
*/
/*
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
*/

/*
Subject: Emits only after being subscribed
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
