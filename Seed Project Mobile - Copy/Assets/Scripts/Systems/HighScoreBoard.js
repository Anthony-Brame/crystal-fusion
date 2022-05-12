public var rememberedscore1:int;
public var rememberedscore2:int;
public var rememberedscore3:int;

public var rememberedname1:String;
public var rememberedname2:String;
public var rememberedname3:String;

public var playerscoretop:UI.Text;
public var playerscoremid:UI.Text;
public var playerscorelow:UI.Text;
public var playernametop:UI.Text;
public var playernamemid:UI.Text;
public var playernamelow:UI.Text;

function Awake()
{
	/*Debug.Log (PlayerPrefs.GetInt("highscore1"));
	rememberedscore1 = PlayerPrefs.GetInt("highscore1");
	rememberedname1 = PlayerPrefs.GetString("highscore1name");
	rememberedscore2 = PlayerPrefs.GetInt("highscore2");
	rememberedname2 = PlayerPrefs.GetString("highscore2name");	
	rememberedscore3 = PlayerPrefs.GetInt("highscore3");
	rememberedname3 = PlayerPrefs.GetString("highscore3name");
	playernametop.text = rememberedname1;
	playerscoretop.text = rememberedscore1.ToString();
	playernamemid.text = rememberedname2;
	playerscoremid.text = rememberedscore2.ToString();
	playernamelow.text = rememberedname3;
	playerscorelow.text = rememberedscore3.ToString();
	*/
	loadallsavestuff();
	
}

function Start()
{

}

function Update()
{

}

function loadallsavestuff()
{
	Debug.Log (PlayerPrefs.GetInt("highscore1"));
	rememberedscore1 = PlayerPrefs.GetInt("highscore1");
	rememberedname1 = PlayerPrefs.GetString("highscore1name");
	rememberedscore2 = PlayerPrefs.GetInt("highscore2");
	rememberedname2 = PlayerPrefs.GetString("highscore2name");	
	rememberedscore3 = PlayerPrefs.GetInt("highscore3");
	rememberedname3 = PlayerPrefs.GetString("highscore3name");
	playernametop.text = rememberedname1;
	playerscoretop.text = rememberedscore1.ToString();
	playernamemid.text = rememberedname2;
	playerscoremid.text = rememberedscore2.ToString();
	playernamelow.text = rememberedname3;
	playerscorelow.text = rememberedscore3.ToString();
}