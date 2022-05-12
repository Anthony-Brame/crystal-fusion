#pragma strict

public var canmove:boolean;
public var playerspeed:float;
public var speeddecrease:float;
public static var points:int;
public var penaltypoints:int;
public var addpoints:int;
public static var numbercollected:int;

function Start () 
{
    playerspeed = 1;
    speeddecrease = 0.01;
    penaltypoints = 1;
    addpoints = 1;
    points = 0;
}

function Update () 
{
    
    //movement
    if (Input.GetKey(KeyCode.D) && (canmove))
    {
        GetComponent.<Rigidbody2D>().AddForce(transform.right * playerspeed, ForceMode2D.Impulse);
    }

    if (Input.GetKey(KeyCode.W) && (canmove))
    {
        GetComponent.<Rigidbody2D>().AddForce(transform.up * playerspeed, ForceMode2D.Impulse);
    }

    if (Input.GetKey(KeyCode.S) && (canmove))
    {
        GetComponent.<Rigidbody2D>().AddForce(-transform.up * playerspeed, ForceMode2D.Impulse);
    }

    if (Input.GetKey(KeyCode.A) && (canmove))
    {
        GetComponent.<Rigidbody2D>().AddForce(-transform.right * playerspeed, ForceMode2D.Impulse);
    }
}

function OnCollisionEnter2D(coll: Collision2D) {
    
    //point change system
    if (points > 5)
    {
        addpointsmorethen();
    }
    //reward
    if (coll.gameObject.tag == "Reward")
    {
        coll.transform.parent = transform;
        playerspeed -= speeddecrease;
        numbercollected++;
        points += addpoints;
    }
    //penalty
    if (coll.gameObject.tag == "Penalty")
    {
        coll.transform.parent = transform;
        playerspeed -= speeddecrease;
        numbercollected++;
        points -= penaltypoints;
    }
}

    function addpointsmorethen()
{        
        if (points > 5)
    {
            addpoints = 5;
            penaltypoints = 3;
    }
    if (points > 100)
    {
        addpoints = 50;
        penaltypoints = 75;
    }
    if (points > 1000)
    {
        addpoints = 500;
        penaltypoints = 1000;
    }
     if (points > 5000)
    {
        addpoints = 1000;
        penaltypoints = 1500;
    }
}