#pragma strict

function Start () {

}

function Update () {

}

function StartGame()
{
	Application.LoadLevel("Gamescene");
}

function ExitGame()
{
	Application.Quit();
}

function Levels()
{
	Application.LoadLevel ("Levelmanager");
}

function highscore()
{
	Application.LoadLevel("ScoreScreen");
}

function options()
{
	Application.LoadLevel("Options");
}

function menu()
{
	Application.LoadLevel("Menu");
}

function DeleteAll()
{

	PlayerPrefs.DeleteKey ("highscore1");
	PlayerPrefs.DeleteKey ("highscore2");
	PlayerPrefs.DeleteKey ("highscore3");
	PlayerPrefs.DeleteKey ("highscore1name");
	PlayerPrefs.DeleteKey ("highscore2name");
	PlayerPrefs.DeleteKey ("highscore3name");
	Debug.Log (PlayerPrefs.GetInt("highscore1"));
}

function testzone()
{
	Application.LoadLevel("touchtomovescreen");
}

function Credits()
{
	Application.LoadLevel ("Credits");
}