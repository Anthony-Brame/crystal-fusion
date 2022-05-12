#pragma strict

public var rainbowhit:boolean;
public var movingrainbowBoss:GameObject;
public var player:GameObject;
public var numberofrainbows:int;
public var beenclicked:boolean;
public var clickedBoss:GameObject;
public var boss:GameObject;
public var bossaiholder:BossAI;


function Start () 
{
	player = GameObject.FindWithTag ("Boss_player");
	boss = GameObject.FindWithTag ("Boss");
	beenclicked = false;
}

function Update () 
{
	numberofrainbows = player.GetComponent(BossPlayer).rainbowshot; 
	var hit: RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint (Input.mousePosition), Vector2.zero);

	if (hit.collider !=null)
	{
		clickedBoss = hit.collider.gameObject;
	}

}

function OnCollisionEnter2D(coll: Collision2D)
{
	 if (coll.gameObject.tag == "Rainbow2")
	 {
	 	rainbowhit = true;
	 	Destroy(coll.gameObject);
	 }
}


function OnMouseDown () 
{

if(Input.GetMouseButtonDown(0))
	{
		Debug.Log("boss is clicked");
	}

	var gameObjectToRemove = player.GetComponent(BossPlayer).rainbowlist [0];

	if ((Input.GetMouseButtonDown(0))&&(numberofrainbows > 0)) // can use this to click/tap boss to the instancate and launch a rainbow at the boss?
	{
		Debug.Log ("Test boss Hit");
		player.GetComponent(BossPlayer).rainbowshot --;
		Destroy (gameObjectToRemove);
		player.GetComponent(BossPlayer).rainbowlist.RemoveAt (0);
		Instantiate(movingrainbowBoss, player.transform.position, Quaternion.identity);
		Debug.Log ("Spawnin");
		beenclicked = false;
	}
}