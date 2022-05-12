public var takeawaynumber:float;
public var displaytime:UI.Text;
public var callTimeEnd : boolean = true;
public var scoretoremember:int;
public var scoreset:boolean;
public var scrollsizer:UI.Scrollbar;
public var storedtime:float;
//public var addLoader : UnityAdsExample;
public var tutorialholder:Tutorialmanager;
public var isthisfirsttimeplay:int;
public var paused:boolean;
public var isforboss:boolean;


function Start()
{
	//addLoader = GetComponent.<ads11>();
	takeawaynumber = 0.0001;
	scoreset = false;
	paused = true;
	//Advertisment.Initialize (1049761);
	tutorialholder = GameObject.FindWithTag ("tutorialmanager").GetComponent.<Tutorialmanager>();
    if (isthisfirsttimeplay == 2)
    {
    	paused = false;
    }
}

function Update()
{

tutorialholder = GameObject.FindWithTag ("tutorialmanager").GetComponent.<Tutorialmanager>();
isthisfirsttimeplay = tutorialholder.firsttimeplay;
      	if (isthisfirsttimeplay == 1)
    		{
    			paused = true;
    			isthisfirsttimeplay = tutorialholder.firsttimeplay;
				paused = tutorialholder.iseverythingpaused;
    		}
    		if (isthisfirsttimeplay == 2)
    		{
				paused = tutorialholder.iseverythingpaused;
    		}



	if (!paused)
	{
//		Debug.Log ("Timer has started");
		scoretoremember = GetComponent(Touchmovement).points;
		if(GetComponent.<UI.Scrollbar>().size > 0){
			GetComponent.<UI.Scrollbar>().size -= takeawaynumber;
		}

		if((GetComponent.<UI.Scrollbar>().size == 0) && (callTimeEnd == true) && (!isforboss))
		{
			timeRunOut();
		}
		//Display time
		//playerscoretop.text = rememberedscore1.ToString();
		storedtime = scrollsizer.size * 100;
		displaytime.text = storedtime.ToString();
	}
}

function timeRunOut()
{

		
	callTimeEnd = false;
	yield WaitForSeconds (3);
	// for now send back to the game for replay if in non-prototype version will send to main menu
	//if(Advertisment.IsReady())
	//{
		//Advertisment.Show();
	//}
	if ((PlayerPrefs.GetInt ("Adsnumber")) == 3)
	{
//		addLoader.ShowAd();
		PlayerPrefs.SetInt ("Adsnumber" , -1);
	}
	PlayerPrefs.SetInt ("Adsnumber" , PlayerPrefs.GetInt ("Adsnumber") + 1);
	Debug.Log (PlayerPrefs.GetInt ("Adsnumber"));
	Application.LoadLevel ("Levelmanager");
}