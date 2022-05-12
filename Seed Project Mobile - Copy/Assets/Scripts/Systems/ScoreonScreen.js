#pragma strict

public var scoretotext:int;
public var isthisalevel:boolean;
public var isthisboss:boolean;

function Start () 
{
	Debug.Log ("Got Points for GUI");
}

function Update () 
{
	if (isthisalevel)
	{
		scoretotext = GetComponent (LevelPlayer).points;
	}
	if (isthisboss)
	{
		scoretotext = GetComponent (BossPlayer).points;
	}
	else
	{
		scoretotext = GetComponent(Touchmovement).points;
	}
	GetComponent.<UI.Text>().text = "Score: "+scoretotext.ToString();
}