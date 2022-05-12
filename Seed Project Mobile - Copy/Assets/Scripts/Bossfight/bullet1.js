public var tracker: GameObject;
public var hitplayer: boolean;
public var stopfollow:boolean;
	
	// Speed in units per sec.
public var speed: float;
	
	function Start()
	{
	    tracker = GameObject.FindGameObjectWithTag("Player");
	    speed = 1;
	    hitplayer = false;
	}
	
function Update () 
{
    // The step size is equal to speed times frame time.
    var step = speed * Time.deltaTime;

    // Move our position a step closer to the target.
    if (!hitplayer && !stopfollow)
    {
	        transform.position = Vector3.MoveTowards(transform.position, tracker.transform.position, step);
	}
}

function OnCollisionEnter2D(coll: Collision2D) 
{
	// set up to hit player and stop	
	if (coll.gameObject.tag == "Boss_player")
    {
    	stopfollow = true;
    	Destroy (gameObject);
    }

}