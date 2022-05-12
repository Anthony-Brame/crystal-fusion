#pragma strict

import System.Collections.Generic;

public var StartSwipe : boolean;
public var speed: float;
public var startPos: Vector2;
public var endPos: Vector2;
public var currentlocation:Vector2;
public var timeBetween: float;
public var pos:Vector2;
public var rainbowlist: List.<GameObject>;

public static var points:int;
public var penaltypoints:int;
public var addpoints:int;
public static var numbercollected:int;

public var didwin:boolean;
public var scrollsizer:UI.Scrollbar;

public var rainbowshot:int;

public var controltype:int;

function Start()
{
	penaltypoints = 1;
    addpoints = 1;
    points = 0;
    controltype = PlayerPrefs.GetInt ("ControlType");
    scrollsizer = GameObject.FindGameObjectWithTag ("Timer").GetComponent (UI.Scrollbar);
    rainbowshot = 0;
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
				//Debug.Log ("start position: " + startPos);

			

			}
				if(finger.phase == TouchPhase.Ended && controltype == 1)
					{
						endPos = finger.position;
						//Debug.Log ("end position: " + endPos);
						var force : Vector2 = startPos - endPos;
						//Debug.Log (force);
						GetComponent.<Rigidbody2D>().AddForce(force);
							// delete the arrows if the firstime move
					}

			if(finger.phase == TouchPhase.Ended && controltype == 2)
					{
						endPos = finger.position;
						//Debug.Log ("end position: " + endPos);
						var force2 : Vector2 = endPos - startPos;
						//Debug.Log (force);
						GetComponent.<Rigidbody2D>().AddForce(force2);
							// delete the arrows if the firstime move

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
    if (coll.gameObject.tag == "timeadder")
    {
    	coll.transform.parent = transform;
    	scrollsizer.size += 0.001;
    	points += addpoints * 5;
    }
    if (coll.gameObject.tag == "Rainbow")
    {
    	coll.transform.parent = transform;
    	rainbowshot ++;
    	points += addpoints * 2;
    	rainbowlist.Add (coll.gameObject);
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