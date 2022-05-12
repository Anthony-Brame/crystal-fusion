#pragma strict
public var collectedfromotherscript:int;
public var sizechanger:float;
public var start:boolean;

function Awake ()
{
	start = false;
}

function Start () 
{
	collectedfromotherscript = GetComponent(Touchmovement).numbercollected;
	// this is to attempt to fix camera start bug.
	if (!start)
	{
		sizechanger = 0;
		start = true;
	}
}

function Update () 
{

    if (Touchmovement.numbercollected == 2)
    {
        sizechanger = 8;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 5)
    {
        sizechanger = 10;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 6)
    {
        sizechanger = 12;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 7)
    {
        sizechanger = 14;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 10)
    {
        sizechanger = 16;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 20)
    {
        sizechanger = 18;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected > 30)
    {
        sizechanger = 20;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 40)
    {
        sizechanger = 24;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
    if (Touchmovement.numbercollected == 50)
    {
        sizechanger = 30;
        Camera.main.orthographicSize += (Camera.main.orthographicSize < sizechanger) ? Time.deltaTime : 0;
    }
}