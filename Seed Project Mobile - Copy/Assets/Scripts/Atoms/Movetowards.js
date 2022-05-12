// The target marker.
var player: GameObject;

//nottouch is to counter the player movement vs the movement of object
public var nottouch:boolean;
	
	// Speed in units per sec.
	var speed: float;

public var isthisfirsttimeplay:int;
public var tutorialholder:Tutorialmanager;
public var paused:boolean;
	
	function Start()
	{
	    player = GameObject.FindGameObjectWithTag("Player");
	    speed = 1;
	    nottouch = true;
		paused = true;
		if (isthisfirsttimeplay == 2)
	    {
	    	paused = false;
	    }
	}
	
function Update () 
{
    // The step size is equal to speed times frame time.
    var step = speed * Time.deltaTime;
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
				paused = tutorialholder.iseverythingpaused;
    		}

    // Move our position a step closer to the target.
if (!paused)
	{
	    if (nottouch)
	    {
	        transform.position = Vector3.MoveTowards(transform.position, player.transform.position, step);
	    }
	}
}

	function OnCollisionEnter2D(coll: Collision2D) 
	    {
	        if (coll.gameObject.tag == "Player")
	        {
	            nottouch = false;
	        }

	       if (coll.gameObject.tag == "Boss_player")
	        {
	            nottouch = false;
	        }
	    }