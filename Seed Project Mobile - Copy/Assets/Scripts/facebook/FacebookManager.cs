using UnityEngine;
using UnityEngine.UI;
using System;
using System.Collections;
using System.Collections.Generic;
using Facebook.Unity;

public class FacebookManager : MonoBehaviour {

	private static FacebookManager _instance;

	public static FacebookManager Instance
	{
		get {
			if (_instance == null) {
				GameObject fbm = new GameObject ("FBManager");
				fbm.AddComponent<FacebookManager> ();
			}

			return _instance;
		}
	}


	public bool IsLoggedIn { get; set; }
	public string ProfileName { get; set; }
	public Sprite ProfilePic { get; set; }
	public string AppLinkURL { get; set; }

	void Awake()
	{
		DontDestroyOnLoad (this.gameObject);
		_instance = this;

	}

	public void InitFB()
	{
		if (!FB.IsInitialized) {
			FB.Init (SetInit, OnHideUnity);
		} else {
			IsLoggedIn = FB.IsLoggedIn;
		}
	}

	void SetInit()
	{

		if (FB.IsLoggedIn) {
			Debug.Log ("FB is logged in");
			GetProfile ();
		} else {
			Debug.Log ("FB is not logged in");
		}

		IsLoggedIn = FB.IsLoggedIn;

	}

	void OnHideUnity(bool isGameShown)
	{

		if (!isGameShown) {
			Time.timeScale = 0;
		} else {
			Time.timeScale = 1;
		}

	}

	public void GetProfile()
	{
		FB.API ("/me?fields=first_name", HttpMethod.GET, DisplayUsername);
		FB.API ("/me/picture?type=square&height=128&width=128", HttpMethod.GET, DisplayProfilePic);
		FB.GetAppLink (DealWithAppLink);
	}

	void DisplayUsername(IResult result)
	{
		if (result.Error == null) {
			ProfileName = "" + result.ResultDictionary ["first_name"];
		} else {
			Debug.Log (result.Error);
		}
	}

	void DisplayProfilePic(IGraphResult result)
	{

		if (result.Texture != null) {
			ProfilePic = Sprite.Create (result.Texture, new Rect (0, 0, 128, 128), new Vector2 ());
		}

	}

	void DealWithAppLink(IAppLinkResult result)
	{
		/* 
			result.Url can return null if your app is not fully published and does not have an app page. 
			The else statement will provide a fallback incase this happens.
			When you call FB.FeedShare or FB.Mobile.AppInvite on iOS and the url string is null it will crash your app.
		*/
		if (!String.IsNullOrEmpty (result.Url)) {
			AppLinkURL = "" + result.Url + "";
			Debug.Log (AppLinkURL);
		}else {
			AppLinkURL = "http://google.com";
		}
	}


	public void Share()
	{
		FB.FeedShare (
			string.Empty,
			new Uri("https://i.ytimg.com/vi/NtgtMQwr3Ko/maxresdefault.jpg"),//place app url here
			"Crystal Fusion",
			"By Hood and Crow Games",
			"Check out this game",
			new Uri("https://i.ytimg.com/vi/NtgtMQwr3Ko/maxresdefault.jpg"),
			string.Empty,
			ShareCallback
		);
	}

	void ShareCallback(IResult result)
	{
		if (result.Cancelled) {
			Debug.Log ("Share Cancelled");
		} else if (!string.IsNullOrEmpty (result.Error)) {
			Debug.Log ("Error on share!");
		} else if (!string.IsNullOrEmpty (result.RawResult)) {
			Debug.Log ("Success on share");
		}
	}

	public void Invite()
	{
		FB.Mobile.AppInvite (
			new Uri(AppLinkURL),
			new Uri("https://i.ytimg.com/vi/NtgtMQwr3Ko/maxresdefault.jpg"),
			InviteCallback
		);
	}

	void InviteCallback(IResult result)
	{
		if (result.Cancelled) {
			Debug.Log ("Invite Cancelled");
		} else if (!string.IsNullOrEmpty (result.Error)) {
			Debug.Log ("Error on invite!");
		} else if (!string.IsNullOrEmpty (result.RawResult)) {
			Debug.Log ("Success on Invite");
		}
	}

	public void ShareWithUsers()
	{

		FB.AppRequest (
			"Come and join me, I bet you can't beat my score!",
			null,
			new List<object> (){ "app_users" },
			null,
			null,
			null,
			null,
			ShareWithUsersCallback
		);

	}

	void ShareWithUsersCallback(IAppRequestResult result)
	{
		if (result.Cancelled) {
			Debug.Log ("Challenge Cancelled");
		} else if (!string.IsNullOrEmpty (result.Error)) {
			Debug.Log ("Error on Challenge!");
		} else if (!string.IsNullOrEmpty (result.RawResult)) {
			Debug.Log ("Success on Challenge");
		}
	}
}
