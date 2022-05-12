#pragma strict

public var firsttimeplay:int;
public var iseverythingpaused:boolean;


function Start () 
{
	iseverythingpaused = true;
	firsttimeplay = PlayerPrefs.GetInt("Firsttimeplay");
	if (firsttimeplay == 0)
	{
		PlayerPrefs.SetInt ("Firsttimeplay", 1);
	}

	if (firsttimeplay == 1)
	{
		Debug.Log (PlayerPrefs.GetInt ("Firsttimeplay"));
		iseverythingpaused = true;
	}
	if (firsttimeplay == 2)
	{
		iseverythingpaused = false;
	}
}

function Update () 
{
	if (firsttimeplay == 1)
	{
		iseverythingpaused = true;
		Debug.Log ("Called Tutorial 2");

		if (iseverythingpaused)
		{	
			Debug.Log ("Iseverythingpaused = true");
			if (Input.touchCount > 0)
			{
				Debug.Log ("Called Tutorial3");

				var finger = Input.GetTouch(0);
				Debug.Log (Input.GetTouch(0));

				if(finger.phase == TouchPhase.Began)
			{
				Debug.Log ("It has begun!");
			}

				if(finger.phase == TouchPhase.Ended)
					{
						Debug.Log ("Swiptutorialended");
						iseverythingpaused = false;
						firsttimeplay = 2;
						PlayerPrefs.SetInt ("Firsttimeplay", 2);
						Debug.Log ( PlayerPrefs.GetInt ("Firsttimeplay"));
					}			
			}
		}
	}
}



/*pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	
	if (Input.touchCount > 0)
	{
	var finger = Input.GetTouch(0);
		if(finger.phase == TouchPhase.Began)
		{
			startPos = finger.position;
			Debug.Log ("start position: " + startPos);
		}
		if(finger.phase == TouchPhase.Ended)
		{
			endPos = finger.position;
			Debug.Log ("end position: " + endPos);
			var force : Vector2 = startPos  - endPos;
			Debug.Log (force);
			GetComponent.<Rigidbody2D>().AddForce(force);
		}
	}
*/