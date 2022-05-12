public var penalty: GameObject;
public var reward: GameObject;
public var raretimeadder: GameObject;
public var spawnTime : float = 5;
public var spawnPoint: Vector2;
public var tutorialholder:Tutorialmanager;
public var isthisfirsttimeplay:int;
public var paused:boolean;
public var chance:int;
public var topdown:boolean;

function Start () 
{
		paused = true;
    	InvokeRepeating("addsomething",spawnTime, spawnTime);
}

function addsomething () 
{
	if ((!paused) && (topdown))
	{
		var x1 = transform.position.x - GetComponent.<Renderer>().bounds.size.x/2;
		var x2 = transform.position.x + GetComponent.<Renderer>().bounds.size.x/2;
		spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);
		Instantiate(reward, spawnPoint, Quaternion.identity);
		spawnPoint = new Vector2(Random.Range(x1, x2),transform.position.y);
		Instantiate(penalty, spawnPoint, Quaternion.identity);
	}

	if ((!paused) && (!topdown))
	{
		var y1 = transform.position.x - GetComponent.<Renderer>().bounds.size.y*2;
		var y2 = transform.position.x + GetComponent.<Renderer>().bounds.size.y*2;
		spawnPoint = new Vector2(transform.position.x, Random.Range(y1, y2));
		Instantiate(reward, spawnPoint, Quaternion.identity);
		spawnPoint = new Vector2(transform.position.x, Random.Range(y1, y2));
		Instantiate(penalty, spawnPoint, Quaternion.identity);
	}


}

function Update()
{
	tutorialholder = GameObject.FindWithTag ("tutorialmanager").GetComponent.<Tutorialmanager>();
	isthisfirsttimeplay = tutorialholder.firsttimeplay;
      	if (isthisfirsttimeplay == 1)
    		{
    			paused = true;
    			isthisfirsttimeplay = tutorialholder.firsttimeplay;
				paused = tutorialholder.iseverythingpaused;
    		}
    		if (isthisfirsttimeplay == 2)
    		{
				paused = false;
    		}

    chance = Random.Range (1,100000);

    	if (chance == 13)
    	{
    		addedrare();
    		Debug.Log ("Add Time Rare Collect");
    	}
}

function addedrare()
{
	if ((!paused) && (topdown))
	{
		var x1 = transform.position.x - GetComponent.<Renderer>().bounds.size.x/2;
		var x2 = transform.position.x + GetComponent.<Renderer>().bounds.size.x/2;
		spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);
		Instantiate(raretimeadder, spawnPoint, Quaternion.identity);
	}

	if ((!paused) && (!topdown))
	{
		var y1 = transform.position.y - GetComponent.<Renderer>().bounds.size.y/2;
		var y2 = transform.position.y + GetComponent.<Renderer>().bounds.size.y/2;
		spawnPoint = new Vector2(Random.Range(y1, y2), transform.position.x);
		Instantiate(raretimeadder, spawnPoint, Quaternion.identity);
	}
}