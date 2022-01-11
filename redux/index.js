 const action = { type : "Inc_count", payload  : "" }

 class Store{
     constructor(reducer, init){
         this.reducer = reducer;
         this.state = init;
     }
     getState() {
         return this.state
     }
 }


 const reducer = (store , action) =>{
     return store;
 };

 const init = { count : 0 };
 const store = new Store(reducer, init);

 console.log(object)