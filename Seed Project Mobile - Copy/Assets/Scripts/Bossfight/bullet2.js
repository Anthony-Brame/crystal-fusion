	// Speed in units per sec.
public var speed: float;
public var countertilldestroy:int;	
public var hit:boolean;


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
	        if (countertilldestroy == 5)
	        {
	        	Destroy (gameObject);
	        }
}

function OnCollisionEnter2D(coll: Collision2D) 
{
    if (coll.gameObject.tag == "Boss_player")
    {
    	hit = true;
    	Destroy (gameObject);
    }
}

function OnTriggerEnter2D(other: Collider2D)
{
	if (other.gameObject.tag == "Bossbullet_end")
    {
    	transform.position = new Vector3 (transform.position.x, 12, transform.position.z);
    	countertilldestroy++;
    }
}