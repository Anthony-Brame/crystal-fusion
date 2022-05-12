#pragma strict

public var controltypeboo:boolean;
public var controltypenumber:int;
public var textType:String;
public var textType2:String;
public var Textbox:UnityEngine.UI.Text;
public var Textbox2:UnityEngine.UI.Text;

function Start () 
{
	controltypeboo = true;
}

function controlTypelauncher () 
{

	if ((controltypeboo) && (controltypenumber == 0))
	{
		controltypeboo = false;
	}
	if ((!controltypeboo) && (controltypenumber == 1))
	{
		controltypeboo = true;		
	}

	if (controltypeboo)
	{
		textType = "Normal";
		textType2 = "Pull and release to move";
	}
	if (!controltypeboo)
	{
		textType = "Inverted";
		textType2 = "Push and release to move";
	}

	if (controltypeboo)
	{
		Textbox.text = textType;
		Textbox2.text = textType2;
	}
	if (!controltypeboo)
	{
		Textbox.text = textType;
		Textbox2.text = textType2;
	}

	if (controltypeboo)
	{
		controltypenumber = 0;
		PlayerPrefs.SetInt ("ControlType" , 1);
		Debug.Log (PlayerPrefs.GetInt ("ControlType"));
	}
	if (!controltypeboo)
	{
		controltypenumber = 1;
		PlayerPrefs.SetInt ("ControlType" , 2);
		Debug.Log (PlayerPrefs.GetInt ("ControlType"));
	}
}