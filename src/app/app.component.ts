import { Component, OnInit } from "@angular/core";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent {
	public userInput: string = "";
	public previousAnswers: string[];

	ngOnInit(): void {
		this.previousAnswers = [];
		}

	addToPrevious(answer: string): void {
		this.previousAnswers.push(answer);
	}

}
