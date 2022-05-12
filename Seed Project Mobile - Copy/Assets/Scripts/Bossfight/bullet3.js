#pragma strict

public var speed: int;
public var direction:int;
public var collitionnumber:int;
public var player:GameObject;


function Start () 
{
	player = gameObject.FindGameObjectWithTag ("Player");
	direction = Random.Range (0,360);
	speed = 3;
	GetComponent.<Rigidbody2D>().AddForce (new Vector3(player.transform.position.x, direction, player.transform.position.y) * speed);
	GetComponent.<Rigidbody2D>().AddTorque (direction);
}

function Update () 
{
	if (collitionnumber > 5)
	{
		 Destroy (gameObject);
	}
}

function OnCollisionEnter2D(coll: Collision2D) 
{
	if (coll.gameObject.tag == "Wall")
	{
		collitionnumber ++;
	}
}