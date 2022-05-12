public var penalty: GameObject;
public var reward: GameObject;
public var spawnTime : float = 5;
private var spawnPoint: Vector2;

function Start () 
{
    InvokeRepeating("addsomething",spawnTime, spawnTime);
}

function addsomething () 
{
    var y1 = transform.position.y - GetComponent.<Renderer>().bounds.size.y/2;
    var y2 = transform.position.y + GetComponent.<Renderer>().bounds.size.y/2;
    spawnPoint = new Vector2(Random.Range(y1, y2), transform.position.x);
    Instantiate(reward, spawnPoint, Quaternion.identity);
    spawnPoint = new Vector2(Random.Range(y1, y2), transform.position.x);
    Instantiate(penalty, spawnPoint, Quaternion.identity);
}