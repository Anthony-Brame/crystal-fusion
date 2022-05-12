/*#pragma strict
public var speed: float = 0.1F;

function Update() 
{
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) 
	{
		// Get movement of the finger since last frame
		var touchDeltaPosition: Vector2 = Input.GetTouch(0).deltaPosition;
		// Move object across XY plane
		transform.Translate(-touchDeltaPosition.x * speed, -touchDeltaPosition.y * speed, 0);
	}
}
*/
public var StartSwipe : boolean;
public var speed: float;
public var startPos: Vector2;
public var endPos: Vector2;
public var currentlocation:Vector2;
public var timeBetween: float;
public var pos:Vector2;

public static var points:int;
public var penaltypoints:int;
public var addpoints:int;
public static var numbercollected:int;
public var arrow1:GameObject;
public var arrow2:GameObject;
public var scrollsizer:UI.Scrollbar;

public var controltype:int;

function Start()
{
	penaltypoints = 1;
    addpoints = 1;
    points = 0;
    controltype = PlayerPrefs.GetInt ("ControlType");
    scrollsizer = GameObject.FindGameObjectWithTag ("Timer").GetComponent (UI.Scrollbar);
}

function Update()
{	
		pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);


	if (Input.touchCount > 0)
		{
			var finger = Input.GetTouch(0);
			if(finger.phase == TouchPhase.Began)
			{
				startPos = finger.position;
				Debug.Log ("start position: " + startPos);
			}


			if(finger.phase == TouchPhase.Ended && controltype == 1)
		{
					endPos = finger.position;
					Debug.Log ("end position: " + endPos);
					var force : Vector2 = startPos - endPos;
					Debug.Log (force);
					GetComponent.<Rigidbody2D>().AddForce(force);
					// delete the arrows if the firstime move
					Destroy (arrow1);
					Destroy (arrow2);
		}

			if(finger.phase == TouchPhase.Ended && controltype == 2)
		{
				endPos = finger.position;
				Debug.Log ("end position: " + endPos);
				var force2 : Vector2 = endPos - startPos;
				Debug.Log (force);
				GetComponent.<Rigidbody2D>().AddForce(force2);
				// delete the arrows if the firstime move
				Destroy (arrow1);
				Destroy (arrow2);
		}
	}
}


function OnCollisionEnter2D(coll: Collision2D) {
    
    //point change system
    if (points > 5)
    {
        addpointsmorethen();
    }
    //reward
    if (coll.gameObject.tag == "Reward")
    {
        coll.transform.parent = transform;
        numbercollected++;
        points += addpoints;
    }
    //penalty
    if (coll.gameObject.tag == "Penalty")
    {
        coll.transform.parent = transform;
        numbercollected++;
        points -= penaltypoints;
    }

    //timeadder
    if (coll.gameObject.tag == "timeadder")
    {
    	coll.transform.parent = transform;
    	scrollsizer.size += 0.001;
    	points += addpoints;
    }
}

    function addpointsmorethen()
{        
        if (points > 5)
    {
            addpoints = 5;
            penaltypoints = 3;
    }
    if (points > 100)
    {
        addpoints = 50;
        penaltypoints = 75;
    }
    if (points > 1000)
    {
        addpoints = 500;
        penaltypoints = 1000;
    }
     if (points > 5000)
    {
        addpoints = 1000;
        penaltypoints = 1500;
    }
}