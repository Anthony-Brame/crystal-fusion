

/*Temp Script, need to rework so it slowly goes towards the player silently and be the target area for the boss bullets, by
using the Ship Script. 
*/
// The target marker.
var player: GameObject;
	
	// Speed in units per sec.
public var speed: float;
	
	function Start()
	{
	    player = GameObject.FindGameObjectWithTag("Boss_player");
	    speed = 3;
	}
	
function Update () 
{
    // The step size is equal to speed times frame time.
    var step = speed * Time.deltaTime;

    // Move our position a step closer to the target.

	        transform.position = Vector3.MoveTowards(transform.position, player.transform.position, step);
}