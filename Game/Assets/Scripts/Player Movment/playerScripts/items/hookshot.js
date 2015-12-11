﻿#pragma strict

var speed : float;
var prefab : GameObject;
public var first : System.Boolean;
var player : GameObject;

var dir : int; // up = 1, right = 2, down = 3, left = 4
var up : KeyCode;
var left : KeyCode;
var right : KeyCode;
var down : KeyCode;
var xArray = new Array ();
var yArray = new Array ();


function Start () {
	yArray.Clear();

	if (first){
		GetComponent(SpriteRenderer).enabled = false;
		GetComponent(BoxCollider2D).enabled = false;
	}
	else {
		GetComponent(SpriteRenderer).enabled = true;
		GetComponent(BoxCollider2D).enabled = true;
	}
	GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
}

function Update () {

	/****movment****/
	if (dir == 1){
		if (Input.GetKeyDown(left)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * -speed;
		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
		}
	}
	else if (dir == 2){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
		}
	}
	else if (dir == 3){
		if (Input.GetKeyDown(left)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * -speed;
		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
		}
	}
	else if (dir == 4){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
		}	
	}
	
}
function FixedUpdate () {
		yArray.Push(transform.position);
		if (!first){
			var clone : GameObject;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
			
		}

}
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		//xArray.Push(transform.position);
		transform.position = transform.position;
	}
}