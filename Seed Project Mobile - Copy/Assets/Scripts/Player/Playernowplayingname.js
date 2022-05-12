#pragma strict

var namedisplay : UnityEngine.UI.Text;

function Start () 
{
	namedisplay.text = PlayerPrefs.GetString ("Playernamenowplaying");
}

function Update () 
{

}