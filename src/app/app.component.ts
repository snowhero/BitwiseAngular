import { Component, OnInit } from "@angular/core";
import Deck from "../classes/Deck";
import ICard from "../interfaces/ICard"
import { NgModule } from "@angular/core";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"
	private myDeck:Deck = new Deck;
	public lastDrawCard:ICard;
	public myHand:ICard[] = [];

	public drawCard() {
		this.lastDrawCard = this.myDeck.drawCard();
		this.myHand.push(this.lastDrawCard);
};

	public returnCard(card:ICard) {
		this.myHand.splice(this.myHand.indexOf(card),1);
		this.myDeck.returnCardToDeck(card);
	};

	public ngOnInit():void {

	}
}
