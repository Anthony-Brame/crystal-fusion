	// Speed in units per sec.
public var speed: float;
public var countertilldestroy:int;	
public var hit:boolean;
public var repeater:boolean;
public var setynumber:float;


	function Start()
	{
	    countertilldestroy = 0;
	    hit = false;
	}
	
function Update () 
{
    // The step size is equal to speed times frame time.
    var step = speed * Time.deltaTime;

    // Move our position a step closer to the target.
    if (!hit)
    {
		transform.position.y -= step;
	}
	        if (hit)
	        {
	        	Destroy (gameObject);
	        }
}

function OnCollisionEnter2D(coll: Collision2D) 
{
    if (coll.gameObject.tag == "Player")
    {
    	hit = true;
    }
}

function OnTriggerEnter2D(other: Collider2D)
{
	if (other.gameObject.tag == "Bossbullet_end" && repeater)
    {
    	transform.position = new Vector3 (transform.position.x, setynumber, transform.position.z);
    }
}