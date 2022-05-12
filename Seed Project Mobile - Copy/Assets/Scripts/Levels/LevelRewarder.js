#pragma strict

public var rewardstarprefab:GameObject;
public var canvas:Transform;

public var levelonerewardlocation1:GameObject;
public var levelonerewardlocation2:GameObject;
public var levelonerewardlocation3:GameObject;

public var leveltworewardlocation1:GameObject;
public var leveltworewardlocation2:GameObject;
public var leveltworewardlocation3:GameObject;

public var levelthreerewardlocation1:GameObject;
public var levelthreerewardlocation2:GameObject;
public var levelthreerewardlocation3:GameObject;

public var levelfourrewardlocation1:GameObject;
public var levelfourrewardlocation2:GameObject;
public var levelfourrewardlocation3:GameObject;

public var levelfiverewardlocation1:GameObject;
public var levelfiverewardlocation2:GameObject;
public var levelfiverewardlocation3:GameObject;

public var levelsixrewardlocation1:GameObject;
public var levelsixrewardlocation2:GameObject;
public var levelsixrewardlocation3:GameObject;

public var levelsevenrewardlocation1:GameObject;
public var levelsevenrewardlocation2:GameObject;
public var levelsevenrewardlocation3:GameObject;

public var leveleightrewardlocation1:GameObject;
public var leveleightrewardlocation2:GameObject;
public var leveleightrewardlocation3:GameObject;

public var levelninerewardlocation1:GameObject;
public var levelninerewardlocation2:GameObject;
public var levelninerewardlocation3:GameObject;

public var leveltenrewardlocation1:GameObject;
public var leveltenrewardlocation2:GameObject;
public var leveltenrewardlocation3:GameObject;

public var levelelevenrewardlocation1:GameObject;
public var levelelevenrewardlocation2:GameObject;
public var levelelevenrewardlocation3:GameObject;

public var leveltwelverewardlocation1:GameObject;
public var leveltwelverewardlocation2:GameObject;
public var leveltwelverewardlocation3:GameObject;

public var levelthireenrewardlocation1:GameObject;
public var levelthireenrewardlocation2:GameObject;
public var levelthireenrewardlocation3:GameObject;

public var levelfourteenrewardlocation1:GameObject;
public var levelfourteenrewardlocation2:GameObject;
public var levelfourteenrewardlocation3:GameObject;

public var levelfiftteenrewardlocation1:GameObject;
public var levelfiftteenrewardlocation2:GameObject;
public var levelfiftteenrewardlocation3:GameObject;

public var levelsixteenrewardlocation1:GameObject;
public var levelsixteenrewardlocation2:GameObject;
public var levelsixteenrewardlocation3:GameObject;

public var levelseventeenrewardlocation1:GameObject;
public var levelseventeenrewardlocation2:GameObject;
public var levelseventeenrewardlocation3:GameObject;

public var leveleighteenrewardlocation1:GameObject;
public var leveleighteenrewardlocation2:GameObject;
public var leveleighteenrewardlocation3:GameObject;

public var levelnineteenrewardlocation1:GameObject;
public var levelnineteenrewardlocation2:GameObject;
public var levelnineteenrewardlocation3:GameObject;

public var leveltwentyrewardlocation1:GameObject;
public var leveltwentyrewardlocation2:GameObject;
public var leveltwentyrewardlocation3:GameObject;


function Start () 
{
	if ((PlayerPrefs.GetInt ("levelnumberz1")) > 0 )
	{
		//reward one
	var rewardone1 = Instantiate (rewardstarprefab, new Vector3 (levelonerewardlocation1.transform.position.x ,levelonerewardlocation1.transform.position.y ,levelonerewardlocation1.transform.position.z ), Quaternion.identity);
	rewardone1.transform.parent = canvas;
	if ((PlayerPrefs.GetInt ("levelnumberz1")) > 1 )
		{
			//reward two	
			var rewardone2 = Instantiate (rewardstarprefab, new Vector3 (levelonerewardlocation2.transform.position.x ,levelonerewardlocation2.transform.position.y ,levelonerewardlocation2.transform.position.z ), Quaternion.identity);
			rewardone2.transform.parent = canvas;
		if ((PlayerPrefs.GetInt ("levelnumberz1")) > 2 )
			{
				// reward three
				var rewardone3 = Instantiate (rewardstarprefab, new Vector3 (levelonerewardlocation3.transform.position.x ,levelonerewardlocation3.transform.position.y ,levelonerewardlocation3.transform.position.z ), Quaternion.identity);
				rewardone3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz2")) > 0 )
	{
		//reward one
		var rewardtwo1 = Instantiate (rewardstarprefab, new Vector3 (leveltworewardlocation1.transform.position.x ,leveltworewardlocation1.transform.position.y ,leveltworewardlocation1.transform.position.z ), Quaternion.identity);
	rewardtwo1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz2")) > 1 )
		{
			//reward two	
			var rewardtwo2 = Instantiate (rewardstarprefab, new Vector3 (leveltworewardlocation2.transform.position.x ,leveltworewardlocation2.transform.position.y ,leveltworewardlocation2.transform.position.z ), Quaternion.identity);
			rewardtwo2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz2")) > 2 )
			{
				// reward three
				var rewardtwo3 = Instantiate (rewardstarprefab, new Vector3 (leveltworewardlocation3.transform.position.x ,leveltworewardlocation3.transform.position.y ,leveltworewardlocation3.transform.position.z ), Quaternion.identity);
				rewardtwo3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz3")) > 0 )
	{
		//reward one
		var rewardthree1 = Instantiate (rewardstarprefab, new Vector3 (levelthreerewardlocation1.transform.position.x ,levelthreerewardlocation1.transform.position.y ,levelthreerewardlocation1.transform.position.z ), Quaternion.identity);
		rewardthree1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz3")) > 1 )
		{
			//reward two	
		var rewardthree2 = Instantiate (rewardstarprefab, new Vector3 (levelthreerewardlocation2.transform.position.x ,levelthreerewardlocation2.transform.position.y ,levelthreerewardlocation2.transform.position.z ), Quaternion.identity);
		rewardthree2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz3")) > 2 )
			{
				// reward three
				var rewardthree3 = Instantiate (rewardstarprefab, new Vector3 (levelthreerewardlocation3.transform.position.x ,levelthreerewardlocation3.transform.position.y ,levelthreerewardlocation3.transform.position.z ), Quaternion.identity);
				rewardthree3.transform.parent = canvas;

			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz4")) > 0 )
	{
		//reward one
				var rewardfour1 = Instantiate (rewardstarprefab, new Vector3 (levelfourrewardlocation1.transform.position.x ,levelfourrewardlocation1.transform.position.y ,levelfourrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardfour1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz4")) > 1 )
		{
			//reward two	
				var rewardfour2 = Instantiate (rewardstarprefab, new Vector3 (levelfourrewardlocation2.transform.position.x ,levelfourrewardlocation2.transform.position.y ,levelfourrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardfour2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz4")) > 2 )
			{
				// reward three
				var rewardfour3 = Instantiate (rewardstarprefab, new Vector3 (levelfourrewardlocation3.transform.position.x ,levelfourrewardlocation3.transform.position.y ,levelfourrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardfour3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz5")) > 0 )
	{
		//reward one
				var rewardfive1 = Instantiate (rewardstarprefab, new Vector3 (levelfiverewardlocation1.transform.position.x ,levelfiverewardlocation1.transform.position.y ,levelfiverewardlocation1.transform.position.z ), Quaternion.identity);
				rewardfive1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz5")) > 1 )
		{
			//reward two	
				var rewardfive2 = Instantiate (rewardstarprefab, new Vector3 (levelfiverewardlocation2.transform.position.x ,levelfiverewardlocation2.transform.position.y ,levelfiverewardlocation2.transform.position.z ), Quaternion.identity);
				rewardfive2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz5")) > 2 )
			{
				// reward three

				var rewardfive3 = Instantiate (rewardstarprefab, new Vector3 (levelfiverewardlocation3.transform.position.x ,levelfiverewardlocation3.transform.position.y ,levelfiverewardlocation3.transform.position.z ), Quaternion.identity);
				rewardfive3.transform.parent = canvas;

			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz6")) > 0 )
	{
		//reward one
				var rewardsix1 = Instantiate (rewardstarprefab, new Vector3 (levelsixrewardlocation1.transform.position.x ,levelsixrewardlocation1.transform.position.y ,levelsixrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardsix1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz6")) > 1 )
		{
			//reward two	
				var rewardsix2 = Instantiate (rewardstarprefab, new Vector3 (levelsixrewardlocation2.transform.position.x ,levelsixrewardlocation2.transform.position.y ,levelsixrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardsix2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz6")) > 2 )
			{
				// reward three
				var rewardsix3 = Instantiate (rewardstarprefab, new Vector3 (levelsixrewardlocation3.transform.position.x ,levelsixrewardlocation3.transform.position.y ,levelsixrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardsix3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz7")) > 0 )
	{
		//reward one
				var rewardseven1 = Instantiate (rewardstarprefab, new Vector3 (levelsevenrewardlocation1.transform.position.x ,levelsevenrewardlocation1.transform.position.y ,levelsevenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardseven1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz7")) > 1 )
		{
			//reward two	
				var rewardseven2 = Instantiate (rewardstarprefab, new Vector3 (levelsevenrewardlocation2.transform.position.x ,levelsevenrewardlocation2.transform.position.y ,levelsevenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardseven2.transform.parent = canvas;


		if ((PlayerPrefs.GetInt ("levelnumberz7")) > 2 )
			{
				// reward three
				var rewardseven3 = Instantiate (rewardstarprefab, new Vector3 (levelsevenrewardlocation3.transform.position.x ,levelsevenrewardlocation3.transform.position.y ,levelsevenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardseven3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz8")) > 0 )
	{
		//reward one
				var rewardeight1 = Instantiate (rewardstarprefab, new Vector3 (leveleightrewardlocation1.transform.position.x ,leveleightrewardlocation1.transform.position.y ,leveleightrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardeight1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz8")) > 1 )
		{
			//reward two	
				var rewardeight2 = Instantiate (rewardstarprefab, new Vector3 (leveleightrewardlocation2.transform.position.x ,leveleightrewardlocation2.transform.position.y ,leveleightrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardeight2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz8")) > 2 )
			{
				// reward three
				var rewardeight3 = Instantiate (rewardstarprefab, new Vector3 (leveleightrewardlocation3.transform.position.x ,leveleightrewardlocation3.transform.position.y ,leveleightrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardeight3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz9")) > 0 )
	{
		//reward one
				var rewardnine1 = Instantiate (rewardstarprefab, new Vector3 (levelninerewardlocation1.transform.position.x ,levelninerewardlocation1.transform.position.y ,levelninerewardlocation1.transform.position.z ), Quaternion.identity);
				rewardnine1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz9")) > 1 )
		{
			//reward two	
				var rewardnine2 = Instantiate (rewardstarprefab, new Vector3 (levelninerewardlocation2.transform.position.x ,levelninerewardlocation2.transform.position.y ,levelninerewardlocation2.transform.position.z ), Quaternion.identity);
				rewardnine2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz9")) > 2 )
			{
				// reward three
				var rewardnine3 = Instantiate (rewardstarprefab, new Vector3 (levelninerewardlocation3.transform.position.x ,levelninerewardlocation3.transform.position.y ,levelninerewardlocation3.transform.position.z ), Quaternion.identity);
				rewardnine3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz10")) > 0 )
	{
		//reward one
				var rewardten1 = Instantiate (rewardstarprefab, new Vector3 (leveltenrewardlocation1.transform.position.x ,leveltenrewardlocation1.transform.position.y ,leveltenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardten1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz10")) > 1 )
		{
			//reward two	
				var rewardten2 = Instantiate (rewardstarprefab, new Vector3 (leveltenrewardlocation2.transform.position.x ,leveltenrewardlocation2.transform.position.y ,leveltenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardten2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz10")) > 2 )
			{
				// reward three
				var rewardten3 = Instantiate (rewardstarprefab, new Vector3 (leveltenrewardlocation3.transform.position.x ,leveltenrewardlocation3.transform.position.y ,leveltenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardten3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz11")) > 0 )
	{
		//reward one
				var rewardeleven1 = Instantiate (rewardstarprefab, new Vector3 (levelelevenrewardlocation1.transform.position.x ,levelelevenrewardlocation1.transform.position.y ,levelelevenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardeleven1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz11")) > 1 )
		{
			//reward two	
				var rewardeleven2 = Instantiate (rewardstarprefab, new Vector3 (levelelevenrewardlocation2.transform.position.x ,levelelevenrewardlocation2.transform.position.y ,levelelevenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardeleven2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz11")) > 2 )
			{
				// reward three
				var rewardeleven3 = Instantiate (rewardstarprefab, new Vector3 (levelelevenrewardlocation3.transform.position.x ,levelelevenrewardlocation3.transform.position.y ,levelelevenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardeleven3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz12")) > 0 )
	{
		//reward one
				var rewardtwelve1 = Instantiate (rewardstarprefab, new Vector3 (leveltwelverewardlocation1.transform.position.x ,leveltwelverewardlocation1.transform.position.y ,leveltwelverewardlocation1.transform.position.z ), Quaternion.identity);
				rewardtwelve1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz12")) > 1 )
		{
			//reward two	
				var rewardtwelve2 = Instantiate (rewardstarprefab, new Vector3 (leveltwelverewardlocation2.transform.position.x ,leveltwelverewardlocation2.transform.position.y ,leveltwelverewardlocation2.transform.position.z ), Quaternion.identity);
				rewardtwelve2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz12")) > 2 )
			{
				// reward three
				var rewardtwelve3 = Instantiate (rewardstarprefab, new Vector3 (leveltwelverewardlocation3.transform.position.x ,leveltwelverewardlocation3.transform.position.y ,leveltwelverewardlocation3.transform.position.z ), Quaternion.identity);
				rewardtwelve3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz13")) > 0 )
	{
		//reward one
				var rewardthirteen1 = Instantiate (rewardstarprefab, new Vector3 (levelthireenrewardlocation1.transform.position.x ,levelthireenrewardlocation1.transform.position.y ,levelthireenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardthirteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz13")) > 1 )
		{
			//reward two	
				var rewardthirteen2 = Instantiate (rewardstarprefab, new Vector3 (levelthireenrewardlocation2.transform.position.x ,levelthireenrewardlocation2.transform.position.y ,levelthireenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardthirteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz13")) > 2 )
			{
				// reward three
				var rewardthirteen3 = Instantiate (rewardstarprefab, new Vector3 (levelthireenrewardlocation3.transform.position.x ,levelthireenrewardlocation3.transform.position.y ,levelthireenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardthirteen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz14")) > 0 )
	{
		//reward one
				var rewardfourteen1 = Instantiate (rewardstarprefab, new Vector3 (levelfourteenrewardlocation1.transform.position.x ,levelfourteenrewardlocation1.transform.position.y ,levelfourteenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardfourteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz14")) > 1 )
		{
			//reward two	
				var rewardfourteen2 = Instantiate (rewardstarprefab, new Vector3 (levelfourteenrewardlocation2.transform.position.x ,levelfourteenrewardlocation2.transform.position.y ,levelfourteenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardfourteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz14")) > 2 )
			{
				// reward three
				var rewardfourteen3 = Instantiate (rewardstarprefab, new Vector3 (levelfourteenrewardlocation3.transform.position.x ,levelfourteenrewardlocation3.transform.position.y ,levelfourteenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardfourteen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz15")) > 0 )
	{
		//reward one
				var rewardfiftteen1 = Instantiate (rewardstarprefab, new Vector3 (levelfiftteenrewardlocation1.transform.position.x ,levelfiftteenrewardlocation1.transform.position.y ,levelfiftteenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardfiftteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz15")) > 1 )
		{
			//reward two	
				var rewardfiftteen2 = Instantiate (rewardstarprefab, new Vector3 (levelfiftteenrewardlocation2.transform.position.x ,levelfiftteenrewardlocation2.transform.position.y ,levelfiftteenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardfiftteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz15")) > 2 )
			{
				// reward three
				var rewardfiftteen3 = Instantiate (rewardstarprefab, new Vector3 (levelfiftteenrewardlocation3.transform.position.x ,levelfiftteenrewardlocation3.transform.position.y ,levelfiftteenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardfiftteen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz16")) > 0 )
	{
		//reward one
				var rewardsixteen1 = Instantiate (rewardstarprefab, new Vector3 (levelsixteenrewardlocation1.transform.position.x ,levelsixteenrewardlocation1.transform.position.y ,levelsixteenrewardlocation1.transform.position.z ), Quaternion.identity);
				rewardsixteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz16")) > 1 )
		{
			//reward two	
				var rewardsixteen2 = Instantiate (rewardstarprefab, new Vector3 (levelsixteenrewardlocation2.transform.position.x ,levelsixteenrewardlocation2.transform.position.y ,levelsixteenrewardlocation2.transform.position.z ), Quaternion.identity);
				rewardsixteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz16")) > 2 )
			{
				// reward three
				var rewardsixteen3 = Instantiate (rewardstarprefab, new Vector3 (levelsixteenrewardlocation3.transform.position.x ,levelsixteenrewardlocation3.transform.position.y ,levelsixteenrewardlocation3.transform.position.z ), Quaternion.identity);
				rewardsixteen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz17")) > 0 )
	{
		//reward one
			var rewardseventeen1 = Instantiate (rewardstarprefab, new Vector3 (levelseventeenrewardlocation1.transform.position.x ,levelseventeenrewardlocation1.transform.position.y ,levelseventeenrewardlocation1.transform.position.z ), Quaternion.identity);
			rewardseventeen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz17")) > 1 )
		{
			//reward two	
			var rewardseventeen2 = Instantiate (rewardstarprefab, new Vector3 (levelseventeenrewardlocation2.transform.position.x ,levelseventeenrewardlocation2.transform.position.y ,levelseventeenrewardlocation2.transform.position.z ), Quaternion.identity);
			rewardseventeen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz17")) > 2 )
			{
				// reward three
			var rewardseventeen3 = Instantiate (rewardstarprefab, new Vector3 (levelseventeenrewardlocation3.transform.position.x ,levelseventeenrewardlocation3.transform.position.y ,levelseventeenrewardlocation3.transform.position.z ), Quaternion.identity);
			rewardseventeen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz18")) > 0 )
	{
		//reward one
			var rewardeightteen1 = Instantiate (rewardstarprefab, new Vector3 (leveleighteenrewardlocation1.transform.position.x ,leveleighteenrewardlocation1.transform.position.y ,leveleighteenrewardlocation1.transform.position.z ), Quaternion.identity);
			rewardeightteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz18")) > 1 )
		{
			//reward two	
			var rewardeightteen2 = Instantiate (rewardstarprefab, new Vector3 (leveleighteenrewardlocation2.transform.position.x ,leveleighteenrewardlocation2.transform.position.y ,leveleighteenrewardlocation2.transform.position.z ), Quaternion.identity);
			rewardeightteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz18")) > 2 )
			{
				// reward three
			var rewardeightteen3 = Instantiate (rewardstarprefab, new Vector3 (leveleighteenrewardlocation3.transform.position.x ,leveleighteenrewardlocation3.transform.position.y ,leveleighteenrewardlocation3.transform.position.z ), Quaternion.identity);
			rewardeightteen1.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz19")) > 0 )
	{
		//reward one
			var rewardnineteen1 = Instantiate (rewardstarprefab, new Vector3 (levelnineteenrewardlocation1.transform.position.x ,levelnineteenrewardlocation1.transform.position.y ,levelnineteenrewardlocation1.transform.position.z ), Quaternion.identity);
			rewardnineteen1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz19")) > 1 )
		{
			//reward two	
			var rewardnineteen2 = Instantiate (rewardstarprefab, new Vector3 (levelnineteenrewardlocation2.transform.position.x ,levelnineteenrewardlocation2.transform.position.y ,levelnineteenrewardlocation2.transform.position.z ), Quaternion.identity);
			rewardnineteen2.transform.parent = canvas;

		if ((PlayerPrefs.GetInt ("levelnumberz19")) > 2 )
			{
				// reward three
			var rewardnineteen3 = Instantiate (rewardstarprefab, new Vector3 (levelnineteenrewardlocation3.transform.position.x ,levelnineteenrewardlocation3.transform.position.y ,levelnineteenrewardlocation3.transform.position.z ), Quaternion.identity);
			rewardnineteen3.transform.parent = canvas;
			}
		}
	}

	if ((PlayerPrefs.GetInt ("levelnumberz20")) > 0 )
	{
		//reward one
			var rewardtwenty1 = Instantiate (rewardstarprefab, new Vector3 (leveltwentyrewardlocation1.transform.position.x ,leveltwentyrewardlocation1.transform.position.y ,leveltwentyrewardlocation1.transform.position.z ), Quaternion.identity);
			rewardtwenty1.transform.parent = canvas;

	if ((PlayerPrefs.GetInt ("levelnumberz20")) > 1 )
		{
			//reward two
			var rewardtwenty2 = Instantiate (rewardstarprefab, new Vector3 (leveltwentyrewardlocation2.transform.position.x ,leveltwentyrewardlocation2.transform.position.y ,leveltwentyrewardlocation2.transform.position.z ), Quaternion.identity);
			rewardtwenty2.transform.parent = canvas;


		if ((PlayerPrefs.GetInt ("levelnumberz20")) > 2 )
			{
				// reward three
			var rewardtwenty3 = Instantiate (rewardstarprefab, new Vector3 (leveltwentyrewardlocation3.transform.position.x ,leveltwentyrewardlocation3.transform.position.y ,leveltwentyrewardlocation3.transform.position.z ), Quaternion.identity);
			rewardtwenty3.transform.parent = canvas;
			}
		}
	}
}