#pragma strict

public var goal1:int;
public var goal2:int;
public var goal3:int;
public var levelnumber:int;

public var didwin:boolean;


function Start () 
{
	didwin = false;
}

function Update () 
{
	if (LevelPlayer.points > goal1)
	{
		didwin = true;
		PlayerPrefs.SetInt ("levelnumberz" + levelnumber, 1);
		//Debug.Log (PlayerPrefs.GetInt ("levelnumberz" + levelnumber));

		if (LevelPlayer.points > goal2)
		{
			PlayerPrefs.SetInt ("levelnumberz" + levelnumber, 2);
//			Debug.Log (PlayerPrefs.GetInt ("levelnumberz" + levelnumber));

			if (LevelPlayer.points > goal3)
			{
				PlayerPrefs.SetInt ("levelnumberz" + levelnumber, 3);
			//	Debug.Log (PlayerPrefs.GetInt ("levelnumberz" + levelnumber));
			}
		}
	}
	else
	{
		didwin = false;
		PlayerPrefs.SetInt ("levelnumberz" + levelnumber, 0);
//		Debug.Log (PlayerPrefs.GetInt ("levelnumberz" + levelnumber));
	}
}