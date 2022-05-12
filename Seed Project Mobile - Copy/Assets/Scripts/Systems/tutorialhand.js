#pragma strict

public var tutorialholder:Tutorialmanager;
public var isthisfirsttimeplay:int;
public var paused:boolean;

function Start () 
{

}

function Update () 
{
	tutorialholder = GameObject.FindWithTag ("tutorialmanager").GetComponent.<Tutorialmanager>();
isthisfirsttimeplay = tutorialholder.firsttimeplay;
      	if (isthisfirsttimeplay == 1)
    		{
    			paused = true;
    			isthisfirsttimeplay = tutorialholder.firsttimeplay;
				paused = tutorialholder.iseverythingpaused;
    		}
    		else
    		{
				Destroy (gameObject);
    		}
}