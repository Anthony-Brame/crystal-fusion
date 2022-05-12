#pragma strict
public var player:GameObject;
public var spawnbullet1:GameObject;
public var spawnbullet2:GameObject;
public var spawnbullet3:GameObject;
public var spawnbullet4:GameObject;
public var camera:Camera;
public var health:float;
public var pickattack:int;
public var attackcalled:boolean;
public var stopattacks:boolean;
public var spawnpoint1:GameObject;
public var spawnpoint2:GameObject;
public var spawnpoint3:GameObject;
public var spawnpoint4:GameObject;
public var spawnpoint5:GameObject;
public var spawnpoint6:GameObject;
public var rainbowshot:GameObject;
public var attacknumber:int;
public var firstcall:boolean;
public var rainbowcall:int;
public var camerarotationangle1:int;
public var camerarotationangle2:int;
public var rewardingvictory:ParticleSystem;
public var moretime:GameObject;
public var scrollsizer:UI.Scrollbar;
public var bossAnimator:Animator;
public var attackwaittimer:float;

function Start () 
{
	health = 10;
	player = GameObject.FindGameObjectWithTag ("Boss_player");
	attackcalled = false;
	attacknumber = 0;
	firstcall = true;
	rainbowcall = 3;
	camerarotationangle1 = 0;
	camerarotationangle2 = 45;
    scrollsizer = GameObject.FindGameObjectWithTag ("Timer").GetComponent (UI.Scrollbar);
    stopattacks = false;
    bossAnimator.SetBool("isidle",true);
    bossAnimator.SetBool ("openingisdone",false);
    attackwaittimer = 3;
}

function Update () 
{
	bossAnimator.SetInteger("Health", health);


	if ((pickattack == 1) && (attackcalled) && (!stopattacks))
	{
		AttackOne();
		bossAnimator.SetBool("isidle", false);
		attacknumber ++;
	}
	if ((pickattack == 2) && (attackcalled) && (!stopattacks))
	{
		AttackTwo();
		bossAnimator.SetBool("isidle", false);
		attacknumber ++;
	}
	if ((pickattack == 3) && (attackcalled) && (!stopattacks))
	{
		AttackThree();
		bossAnimator.SetBool("isidle", false);
		attacknumber ++;
	}
	if ((pickattack == 4) && (attackcalled) && (!stopattacks))
	{
		AttackFour();
		bossAnimator.SetBool("isidle", false);
		attacknumber ++;
	}
		if ((pickattack == 5) && (attackcalled) && (!stopattacks))
	{
		TrickHat();
		bossAnimator.SetBool("isidle", false);
		attacknumber ++;
	}
	else if ((!attackcalled) && (pickattack == 0) && (firstcall) && (!stopattacks))
	{
		attackonoff();
		firstcall = false;
	}

	if (attacknumber  > rainbowcall)
	{
		RainbowSpawns();
		attacknumber = 0;
	}

	if (health < 1)
	{
		if (!stopattacks)
		{
			GetComponent (BossPlayer).points += 5000;

			DeathBurst();
		}
	}

	if (scrollsizer.size == 0)
	{
	if (!stopattacks)
		{

			Runaway();
		}
	}
}

function AttackOne ()
{
	attackcalled = false;
	bossAnimator.SetTrigger ("Attack_1");
	Debug.Log ("Attackone");
	Instantiate(spawnbullet2, spawnpoint6.transform.position, Quaternion.identity);
	pickattack = Random.Range (2,4);
	yield WaitForSeconds (attackwaittimer);
	bossAnimator.SetBool("isidle", true);
	yield WaitForSeconds (attackwaittimer);
	attackcalled = true;
}

function AttackTwo ()
{
	attackcalled = false;
	bossAnimator.SetTrigger ("Attack_2");
	Debug.Log ("Attacktwo");
	Instantiate(spawnbullet1, spawnpoint1.transform.position, Quaternion.identity);
	Instantiate(spawnbullet1, spawnpoint2.transform.position, Quaternion.identity);
	Instantiate(spawnbullet1, spawnpoint3.transform.position, Quaternion.identity);
	Instantiate(spawnbullet1, spawnpoint4.transform.position, Quaternion.identity);
	Instantiate(spawnbullet1, spawnpoint5.transform.position, Quaternion.identity);
	pickattack = Random.Range (1,4);
	yield WaitForSeconds (attackwaittimer);
	bossAnimator.SetBool("isidle", true);
	yield WaitForSeconds (attackwaittimer);
	attackcalled = true;
}

function AttackThree ()
{
	attackcalled = false;
	bossAnimator.SetTrigger ("Attack_3");
	Debug.Log ("Attackthree");

	Instantiate (spawnbullet4, spawnpoint6.transform.position, Quaternion.identity);

	pickattack = Random.Range (1,6);
	yield WaitForSeconds (attackwaittimer);
	bossAnimator.SetBool("isidle", true);
	yield WaitForSeconds (attackwaittimer);
	attackcalled = true;
}

function AttackFour ()
{
	attackcalled = false;
	bossAnimator.SetTrigger ("Attack_4");
	Debug.Log ("Attackfour");
	Instantiate(spawnbullet3, spawnpoint6.transform.position, Quaternion.identity);
	pickattack = Random.Range (1,6);
	yield WaitForSeconds (attackwaittimer);
	bossAnimator.SetBool("isidle", true);
	yield WaitForSeconds (attackwaittimer);
	attackcalled = true;

}

function TrickHat ()
{
	attackcalled = false;
	bossAnimator.SetTrigger ("Trick_Hat");
	Debug.Log ("HatTrick");
	Instantiate(moretime, spawnpoint6.transform.position, Quaternion.identity);
	pickattack = Random.Range (1,5);
	bossAnimator.SetBool("isidle", true);
	yield WaitForSeconds (attackwaittimer);
	attackcalled = true;
}

function Runaway ()
{
	stopattacks = true;
	Debug.Log ("Runaway");
	bossAnimator.SetTrigger ("Timertickedout");
	bossAnimator.SetBool ("hasbeencalledExit_1",true);
	yield WaitForSeconds (7);
	Application.LoadLevel ("Levelmanager");
}

function DeathBurst ()
{
	stopattacks = true;
	Debug.Log ("Dying");
	rewardingvictory.Play();
	bossAnimator.SetTrigger ("Killed");
	bossAnimator.SetBool ("hasbeencalledExit_2",true);
	Debug.Log ("Deathanimation onetime call");
	yield WaitForSeconds (7);
}

function OnCollisionEnter2D(coll: Collision2D)
{
	 if (coll.gameObject.tag == "Rainbow2")
	 {
	 	health--;
	 	bossAnimator.SetTrigger ("hasbeenhit");
	 	scrollsizer.size += 0.15;
	 	if (health == 9)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt1",true);
	 		bossAnimator.SetTrigger ("Hurt_1");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 2.5;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 8)
	 	{
	 		GetComponent (BossPlayer).points += 500;
		 	bossAnimator.SetBool ("ishurt1",true);
	 		bossAnimator.SetTrigger ("Hurt_1");	
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 3;
	 		yield WaitForSeconds (2);		
	 	}
		if (health == 7)
	 	{
	 		GetComponent (BossPlayer).points += 500;
			bossAnimator.SetBool ("ishurt1",false);
			bossAnimator.SetBool ("ishurt2",true);
	 		bossAnimator.SetTrigger ("Hurt_2");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 2;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 6)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt2",true);
	 		bossAnimator.SetTrigger ("Hurt_2");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 2;
	 		yield WaitForSeconds (2);
	 	}
	 	if (health == 5)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt2",true);
	 		bossAnimator.SetTrigger ("Hurt_2");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 1.8;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 4)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt2",false);
	 		bossAnimator.SetBool ("ishurt3",true);
	 		bossAnimator.SetTrigger ("Hurt_3");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 1.5;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 3)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt3",true);
	 		bossAnimator.SetTrigger ("Hurt_3");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 1.2;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 2)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt3",true);
	 		bossAnimator.SetTrigger ("Hurt_3");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 1;
	 		yield WaitForSeconds (2);
	 	}
		if (health == 1)
	 	{
	 		GetComponent (BossPlayer).points += 500;
	 		bossAnimator.SetBool ("ishurt3",false);
		 	bossAnimator.SetBool ("ishurt4",true);
	 		bossAnimator.SetTrigger ("Hurt_4");
	 		bossAnimator.SetBool("isidle", true);
	 		attackwaittimer = 0.8;
	 		yield WaitForSeconds (2);
	 	}
	 }
}

function RainbowSpawns()
{
	Instantiate(rainbowshot, spawnpoint1.transform.position, Quaternion.identity);

	if (rainbowcall == 3)
	{
		rainbowcall = 4;
	}
	if (rainbowcall == 4)
	{
		rainbowcall = 5;
	}
	if (rainbowcall == 5)
	{
		rainbowcall = 6;
	}
	if (rainbowcall == 6)
	{
		rainbowcall = 7;
	}
	if (rainbowcall == 7)
	{
		rainbowcall = 8;
	}
}

function attackonoff()
{
		attackcalled = true;
		Debug.Log ("attack called and turned off");
		attackcalled = false;
		attackcalled = true;
		pickattackone();
}

function pickattackone()
{
	Debug.Log ("PickAttackOne Please");
	bossAnimator.SetBool ("openingisdone",true);
	pickattack = 1;
}

/*

reminder on code for animationlinking
animator.SetTrigger ("nameoftriggerhere");
animator.SetBool("isRunning”, true);
animator.SetFloat ("Health", health);


*/