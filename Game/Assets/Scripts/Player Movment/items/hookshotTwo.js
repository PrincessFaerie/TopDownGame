﻿#pragma strict
public var first : System.Boolean;
var player : GameObject;
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		if (!first){
			player.GetComponent(PlayerControl).end = true;
			GetComponent(hookshot).enabled = false;
		}
	}
	if (coll.gameObject == player){
			Debug.Log("yay");
			player.GetComponent(PlayerControl).end = false;
			Destroy (this.gameObject);
	}
}