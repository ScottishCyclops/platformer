class SpaceguyBehavior extends Sup.Behavior
{
    walkingSpeed: number = 0.01
    climbingSpeed: number = 0.05
    jumpForce: number = 0.1
    maxJumpPressingTime: number = 1000

    jumpPressingTime: number = this.maxJumpPressingTime
    jumping: boolean = false

    awake()
    {

    }

    update()
    {
        Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies())

        if(Sup.Input.isKeyDown("A"))
        {
            this.actor.move(-this.walkingSpeed, 0, 0)
            this.actor.spriteRenderer.setHorizontalFlip(true)
        }
        else if(Sup.Input.isKeyDown("D"))
        {
            this.actor.move(this.walkingSpeed, 0, 0)
            this.actor.spriteRenderer.setHorizontalFlip(false)
        }    
    }
}

Sup.registerBehavior(SpaceguyBehavior)
