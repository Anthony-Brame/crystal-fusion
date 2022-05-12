#pragma strict

public var rainbowhit:boolean;
public var movingrainbow:GameObject;
public var player:GameObject;
public var numberofrainbows:int;
public var beenclicked:boolean;
public var clickedDoor:GameObject;


function Start () 
{
	player = GameObject.FindWithTag ("Player");
	beenclicked = false;
}

function Update () 
{
	numberofrainbows = player.GetComponent(LevelPlayer).rainbowshot; 
	var hit: RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint (Input.mousePosition), Vector2.zero);

	if (rainbowhit)
	{
		Destroy (gameObject);
	}

	if (hit.collider !=null)
	{
		clickedDoor = hit.collider.gameObject;
	}

}

function OnCollisionEnter2D(coll: Collision2D)
{
	 if (coll.gameObject.tag == "Rainbow2")
	 {
	 	rainbowhit = true;
	 	Destroy(coll.gameObject);
	 	Destroy(gameObject);
	 }
}


function OnMouseDown () 
{

if(Input.GetMouseButtonDown(0))
	{
		Debug.Log("Door is clicked");
	}

	var gameObjectToRemove = player.GetComponent(LevelPlayer).rainbowlist [0];

	if ((Input.GetMouseButtonDown(0))&&(numberofrainbows > 0)) // can use this to click/tap door to the instancate and launch a rainbow at the door?
	{
		Debug.Log ("Test Door Hit");
		player.GetComponent(LevelPlayer).rainbowshot --;
		Destroy (gameObjectToRemove);
		player.GetComponent(LevelPlayer).rainbowlist.RemoveAt (0);
		Instantiate(movingrainbow, player.transform.position, Quaternion.identity);
		beenclicked = false;
	}
}