import { Component, OnInit } from "@angular/core";
import { Store, select, State } from "@ngrx/store";
import { increment, decrement, reset } from "../action";
import { pipe } from "rxjs";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.sass"]
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<{ count: {} }>) {}
  count$; //;//: initialState;
  ngOnInit() {
    //this.count$ = this.store.pipe(select("count"));
  }
  IncrementClick() {
    this.store.dispatch(increment({ name: "Balaji" }));
    //this.count$ = this.store.pipe(Map(state=>state.name) select("count"));
    this.store.select(pipe(state => state.count)).subscribe(x => {
      alert(x);
      this.count$ = x;
    });
  }

  DecrementClick() {
    this.store.dispatch(decrement());
    //  this.count$ = this.store.pipe(select("count"));
  }
  ResetClick() {
    this.store.dispatch(reset());
    //this.count$ = this.store.pipe(select("count"));
  }
}
class initialState {
  name: string;
  address: string;
  phoneNumber: string;
  city: string;
  state: string;
}
