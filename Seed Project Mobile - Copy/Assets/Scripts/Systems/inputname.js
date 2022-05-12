#pragma strict
public var playername : String;
var inputField : UnityEngine.UI.InputField;
var namedisplay : UnityEngine.UI.Text;
var imagescript : UnityEngine.UI.Image;

function Start () 
{

}

function Update () 
{
	playername = inputField.text;

		if (PlayerPrefs.GetInt("highscore1") == null)
		{
			PlayerPrefs.SetInt("highscore1",0);
			Debug.Log (PlayerPrefs.GetInt("highscore1"));		
		}
}

function savenameisherebutnotshowing()
{
	if (playername != "")
	{
		PlayerPrefs.SetString ("Playernamenowplaying", playername);
		if (PlayerPrefs.GetInt ("Firsttimeplay") == 0)
		{
			PlayerPrefs.SetInt ("Firsttimeplay" , 1);
		}
		if (PlayerPrefs.GetInt ("ControlType") == 0)
		{
			PlayerPrefs.SetInt ("ControlType" , 1);
		}
		namedisplay.text = playername;
		//yield WaitForSeconds (1f);
		//gameObject.SetActive(false);
		Application.LoadLevel ("Menu");
		Debug.Log (PlayerPrefs.GetInt ("Firsttimeplay"));
	}
}